/*
Copyright 2026 DINUM

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE in the repository root for full details.
*/

/**
 * tchap-e2e-summarize.js — bilan d'un run e2e tchap, à partir de l'état écrit
 * par tchap-e2e-regressions.sh (scripts/tchap-e2e-reporter.mjs).
 *
 * Deux modes :
 *
 *   1. Comptage rapide d'une suite (utilisé par le script shell après chaque
 *      suite jouée) :
 *        node tchap-e2e-summarize.js <état> --tally playwright/e2e/room
 *      imprime « <réussis> <échecs> <ignorés> ».
 *
 *   2. Bilan complet (fin du run, interruption incluse) :
 *        node tchap-e2e-summarize.js <état> [--baseline <fichier>]
 *      lit <état>/results.jsonl + <état>/done/ et affiche : suites déjà
 *      traitées, compteurs, échecs « connus » (baseline) vs nouveaux.
 *
 * Un même test peut apparaître plusieurs fois dans le JSONL (nouvelles
 * tentatives, rejouée lors d'une reprise) : seule sa DERNIÈRE exécution fait
 * foi ; une exécution antérieure en échec suivie d'un succès compte « flaky ».
 *
 * Code de sortie : 0 aucun échec nouveau · 1 au moins une régression ·
 * 2 erreur d'environnement.
 */

import { appendFileSync, existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const DEFAULT_BASELINE = join(SCRIPT_DIR, "tchap-e2e-expected-failures.txt");

/**
 * En-tête écrit lorsqu'un --update-baseline crée le fichier de baseline lui-même.
 */
const BASELINE_HEADER = `# Baseline des échecs e2e « connus ».
#
# Une ligne = une sous-chaîne recherchée dans la clé d'un test échoué :
#     <fichier du spec> :: <suites › titre du test> :: <projet>
# Exemple :
#     playwright/e2e/room/room.spec.ts :: Room › should send a message :: Chrome
#
# Les échecs dont la clé contient l'un de ces motifs sont signalés « connus » :
# ils ne font pas échouer le run. Seuls les échecs absents de cette liste sont
# considérés comme des régressions.
#
# Lignes vides et lignes commençant par « # » sont ignorées.
`;

/** Statuts considérés comme des échecs. */
const FAILURES = new Set(["failed", "timedOut", "interrupted", "didNotRun"]);

/**
 * Nettoie le titre d'un test des segments « machine » (nom du projet, chemin du
 * fichier de spec — absolu, relatif au testDir, ou simple nom). Les entrées
 * écrites par d'anciennes versions du reporter contiennent ces segments ; les
 * normaliser ici permet de les fusionner avec les nouvelles sans --fresh.
 * @param {object} entry une entrée du JSONL
 */
function normalizeEntryTitle(entry) {
    const file = String(entry.file ?? "");
    const base = file.split("/").pop();
    entry.title = String(entry.title ?? "")
        .split(" › ")
        .filter((part) => part && part !== entry.project && !(base && part.endsWith(base)) && part !== file)
        .join(" › ");
    return entry;
}

function die(message) {
    console.error(`Erreur : ${message}`);
    process.exit(2);
}

/**
 * Lit les entrées du JSONL. Une dernière ligne tronquée (interruption brutale)
 * est ignorée.
 * @param {string} stateDir
 * @returns {{ file: string, title: string, project: string, status: string,
 *             durationMs: number, error: string | null }[]}
 */
function readEntries(stateDir) {
    const jsonlPath = join(stateDir, "results.jsonl");
    if (!existsSync(jsonlPath)) return [];

    const entries = [];
    for (const line of readFileSync(jsonlPath, "utf8").split("\n")) {
        if (!line.trim()) continue;
        try {
            entries.push(normalizeEntryTitle(JSON.parse(line)));
        } catch {
            // Ligne incomplète : l'interruption l'a coupée en pleine écriture.
        }
    }
    return entries;
}

/**
 * Garde, pour chaque test, sa dernière exécution et un drapeau « flaky ».
 * @returns {Map<string, { last: object, flaky: boolean }>}
 */
function deduplicate(entries) {
    const byKey = new Map();
    for (const entry of entries) {
        const key = `${entry.file} :: ${entry.title} :: ${entry.project}`;
        const previous = byKey.get(key);
        byKey.set(key, {
            last: entry,
           flaky: (previous?.flaky ?? false) || FAILURES.has(entry.status),
        });
    }
    // Un test n'est « flaky » que s'il finit par réussir après un échec.
    for (const [key, value] of byKey) {
        if (FAILURES.has(value.last.status)) value.flaky = false;
    }
    return byKey;
}

/**
 * Lit les motifs de la baseline (une sous-chaîne par ligne ; lignes vides et
 * commentaires « # » ignorés).
 * @param {string} filePath
 * @returns {string[]}
 */
function readBaseline(filePath) {
    if (!filePath || !existsSync(filePath)) return [];
    return readFileSync(filePath, "utf8")
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.length > 0 && !line.startsWith("#"));
}

/** Un échec est « connu » si un motif de la baseline apparaît dans sa clé. */
function isKnown(failure, patterns) {
    const key = `${failure.file} :: ${failure.title} :: ${failure.project}`;
    return patterns.some((pattern) => key.includes(pattern));
}

/** Resultats d'une suite (cible = chemin relatif, ex. « playwright/e2e/room »). */
function tally(entries, target) {
    const byKey = deduplicate(entries);
    let passed = 0;
    let failed = 0;
    let skipped = 0;
    for (const { last } of byKey.values()) {
        if (last.file !== target && !last.file.startsWith(target + "/")) continue;
        if (FAILURES.has(last.status)) failed += 1;
        else if (last.status === "skipped") skipped += 1;
        else passed += 1;
    }
    return { passed, failed, skipped };
}

/** Marqueurs de suites terminées : { cible: code de sortie }. */
function readDoneMarkers(stateDir) {
    const doneDir = join(stateDir, "done");
    const markers = {};
    if (!existsSync(doneDir)) return markers;
    for (const name of readdirSync(doneDir)) {
        if (!name.endsWith(".exit")) continue;
        const content = readFileSync(join(doneDir, name), "utf8").split("\n");
        markers[content[0] ?? name] = Number(content[1] ?? 0);
    }
    return markers;
}

function main() {
    const [stateDir, ...rest] = process.argv.slice(2);
    if (!stateDir) die("usage : node tchap-e2e-summarize.js <état> [--tally <cible>] [--baseline <fichier>]");

    let tallyTarget = null;
    let passedFilesTarget = null;
    let updateBaselineFile = null;
    let baselineFile = DEFAULT_BASELINE;
    for (let i = 0; i < rest.length; i++) {
        if (rest[i] === "--tally") tallyTarget = rest[++i];
        else if (rest[i] === "--passed-files") passedFilesTarget = rest[++i];
        else if (rest[i] === "--update-baseline") updateBaselineFile = rest[++i];
        else if (rest[i] === "--baseline") baselineFile = rest[++i];
        else die(`option inconnue : ${rest[i]}`);
    }

    const entries = readEntries(stateDir);

    // --- Mode comptage rapide : « <réussis> <échecs> <ignorés> » -------------
    if (tallyTarget !== null) {
        const counts = tally(entries, tallyTarget);
        console.log(`${counts.passed} ${counts.failed} ${counts.skipped}`);
        return;
    }

    // --- Mode reprise fine : les fichiers d'une cible entièrement réussis ----
    // (utilisé par le script shell pour ne pas rejouer une suite interrompue
    // au-delà de ce qui a déjà été vérifié ; un fichier n'est « réussi » que si
    // tous ses tests l'ont été — un seul échec ou interruption le rejouera.)
    if (passedFilesTarget !== null) {
        const byAttempt = deduplicate(entries);
        const perFile = new Map();
        for (const { last } of byAttempt.values()) {
            if (last.file !== passedFilesTarget && !last.file.startsWith(passedFilesTarget + "/")) continue;
            const state = perFile.get(last.file) ?? { real: 0, passed: 0 };
            if (last.status !== "skipped") {
                state.real += 1;
                if (last.status === "passed") state.passed += 1;
            }
            perFile.set(last.file, state);
        }
        for (const [file, state] of perFile) {
            if (state.real > 0 && state.real === state.passed) console.log(file);
        }
        return;
    }

    // --- Bilan complet -------------------------------------------------------
    const byKey = deduplicate(entries);
    const patterns = readBaseline(baselineFile);
    const done = readDoneMarkers(stateDir);

    const passed = [];
    const failed = [];
    const skipped = [];
    const flaky = [];
    for (const { last, flaky: wasFlaky } of byKey.values()) {
        if (FAILURES.has(last.status)) failed.push(last);
        else if (last.status === "skipped") skipped.push(last);
        else passed.push(last);
        if (wasFlaky) flaky.push(last);
    }
    const known = failed.filter((failure) => isKnown(failure, patterns));
    const fresh = failed.filter((failure) => !isKnown(failure, patterns));
    const totalMs = [...byKey.values()].reduce((sum, { last }) => sum + (last.durationMs ?? 0), 0);

    const line = "═".repeat(72);
    console.log(`\n${line}`);
    console.log("  Bilan e2e tchap");
    console.log(line);

    const doneEntries = Object.entries(done);
    if (doneEntries.length > 0) {
        console.log(`\nSuites terminées (${doneEntries.length}) :`);
        for (const [target, code] of doneEntries) {
            console.log(`  ${code === 0 ? "✔" : "✘"} ${target}${code === 0 ? "" : ` (code ${code})`}`);
        }
    }

    console.log(`\nTests joués : ${byKey.size} (durée cumulée ${(totalMs / 1000).toFixed(1).replace(".", ",")} s)`);
    console.log(`  Réussis      : ${passed.length}${flaky.length ? ` (dont ${flaky.length} instables)` : ""}`);
    console.log(`  Échecs       : ${failed.length} (connus : ${known.length} · nouveaux : ${fresh.length})`);
    console.log(`  Ignorés      : ${skipped.length}`);

    if (fresh.length > 0) {
        console.log(`\n${"─".repeat(72)}`);
        console.log("NOUVELLES RÉGRESSIONS :");
        for (const failure of fresh) {
            console.log(`\n  ${failure.file} :: ${failure.title} [${failure.project || "sans projet"}]`);
            if (failure.error) {
                for (const errLine of failure.error.split("\n").slice(0, 12)) {
                    console.log(`    | ${errLine}`);
                }
            }
        }
    }

    if (known.length > 0) {
        console.log(`\n${"─".repeat(72)}`);
        console.log("Échecs connus (cf. baseline) :");
        for (const failure of known) {
            console.log(`  ${failure.file} :: ${failure.title}`);
        }
    }

    console.log(`\n${line}`);
    if (fresh.length > 0) {
        console.log("Des régressions ont été détectées — cf. détail ci-dessus.");
        // Rappel de la commande volontaire (jamais exécutée d'elle-même) :
        // accepter des échecs dans la référence est un choix délibéré.
        if (!updateBaselineFile) {
            console.log("");
            console.log(`S'ils sont attendus (référence en construction), pour les tolérer :`);
            console.log(`  ./scripts/tchap-e2e-regressions.sh --update-baseline`);
        }
    } else if (failed.length > 0) {
        console.log("Pas de nouvel échec : uniquement des échecs déjà connus.");
    } else {
        console.log("Aucun échec ✔");
    }
    console.log(line);

    // --- Mise à jour facultative de la baseline (--update-baseline) -------
    // Ajoute au fichier txt les clés des échecs OBSERVÉS qui n'y figurent pas
    // encore. Usage : bâtir/actualiser la référence des échecs « connus » à
    // partir de runs longs interrompus par tranches — jamais en automatique,
    // sinon chaque régression deviendrait « connue » au moment où elle apparaît.
    if (updateBaselineFile) {
        const existing = readBaseline(updateBaselineFile);
        const failureKeys = [...new Set(failed.map((f) => `${f.file} :: ${f.title} :: ${f.project}`))];
        const additions = failureKeys.filter((key) => !existing.includes(key));
        if (!existsSync(updateBaselineFile)) {
            writeFileSync(updateBaselineFile, BASELINE_HEADER);
        } else if (!readFileSync(updateBaselineFile, "utf8").endsWith("\n")) {
            appendFileSync(updateBaselineFile, "\n");
        }
        if (additions.length > 0) appendFileSync(updateBaselineFile, `${additions.join("\n")}\n`);
        console.log(`\nBaseline ${updateBaselineFile} : ${additions.length} motif(s) ajouté(s).`);
    }

    process.exit(fresh.length > 0 ? 1 : 0);
}

main();
