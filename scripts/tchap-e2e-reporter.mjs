/*
Copyright 2026 DINUM

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE in the repository root for full details.
*/

/**
 * Reporter Playwright pour tchap-e2e-regressions.sh.
 *
 * Rôle :
 *   - afficher la progression test par test, de façon lisible ;
 *   - écrire chaque fin de test, IMMÉDIATEMENT, dans deux fichiers :
 *       · TCHAP_E2E_JSONL : au format JSON (machine, consommé par
 *         tchap-e2e-summarize.js) ;
 *       · TCHAP_E2E_TXT   : au format texte (humain), un résumé par ligne.
 *
 * L'écriture étant faite à chaque fin de test, une interruption (Ctrl+C, crash)
 * ne perd jamais l'état : les deux fichiers contiennent tout ce qui a été joué
 * jusqu'ici, et le script peut être relancé pour reprendre.
 *
 * Format du JSONL : une ligne JSON par test terminé,
 *   { "file": "playwright/e2e/room/room.spec.ts",
 *     "title": "describe › titre du test",
 *     "project": "Chrome",
 *     "status": "passed" | "failed" | "timedOut" | "skipped" | "interrupted" | "didNotRun",
 *     "durationMs": 1234,
 *     "error": "message d'erreur éventuel" }
 *
 * Format du TXT : « <horodatage> <symbole> <fichier> :: <titre> (<durée> s) ».
 */

import { appendFileSync } from "node:fs";
import { isAbsolute, relative } from "node:path";

/** Symbole affiché par statut de test. */
const SYMBOLS = {
    passed: "✔",
    failed: "✘",
    timedOut: "⏱",
    skipped: "⏭",
    interrupted: "⏸",
    didNotRun: "·",
};

/** Statuts considérés comme des échecs. */
const FAILURES = new Set(["failed", "timedOut", "interrupted", "didNotRun"]);

/** Retire les séquences ANSI d'un message d'erreur. */
function stripAnsi(text) {
    return String(text ?? "").replace(/\x1b\[[0-9;]*[A-Za-z]/g, "");
}

/**
 * Titre complet du test, sans les segments « machine » (nom de projet, chemin du
 * fichier — relatif au testDir ou absolu) que le shell affiche par ailleurs.
 */
function displayTitle(test) {
    const file = test.location?.file ?? "";
    const base = file.split("/").pop();
    const project = test.parent?.project()?.name;
    return test
        .titlePath()
        .filter(
            (part) =>
                part &&
                part !== file &&
                part !== base &&
                part !== project &&
                !(base && String(part).endsWith(base)),
        )
        .join(" › ");
}

/** Chemin du spec relatif à apps/web (.cwd du run Playwright). */
function relativeFile(file) {
    if (isAbsolute(file) && file.startsWith(process.cwd() + "/")) {
        return relative(process.cwd(), file);
    }
    return file;
}

/** Horodatage lisible pour le journal texte. */
function timestamp() {
    return new Date().toISOString().replace("T", " ").slice(0, 19);
}

export default class TchapE2eReporter {
    constructor() {
        this.jsonlPath = process.env.TCHAP_E2E_JSONL ?? null;
        this.txtPath = process.env.TCHAP_E2E_TXT ?? null;
    }

    onBegin(_config, suite) {
        console.log(`▶ ${suite.allTests().length} test(s) à jouer.`);
    }

    onTestEnd(test, result) {
        const entry = {
            file: relativeFile(test.location?.file ?? ""),
            title: displayTitle(test),
            project: test.parent?.project()?.name ?? "",
            status: result.status,
            durationMs: result.duration ?? 0,
            error: stripAnsi(result.error?.message ?? result.errors?.[0]?.message ?? null),
        };

        const symbol = SYMBOLS[result.status] ?? "?";
        const seconds = ((entry.durationMs ?? 0) / 1000).toFixed(1).replace(".", ",");
        const humanLine = `${symbol} ${entry.file} :: ${entry.title} (${seconds} s)`;

        if (this.jsonlPath) {
            appendFileSync(this.jsonlPath, JSON.stringify(entry) + "\n");
        }
        // Journal lisible : complément humain du JSONL, jamais consommé par un
        // outil — relire le JSONL reste la source de vérité.
        if (this.txtPath) {
            appendFileSync(this.txtPath, `${timestamp()}  ${humanLine}\n`);
        }

        console.log(`  ${humanLine}`);

        // Un avant-goût de l'erreur pour éviter d'ouvrir le log complet.
        if (FAILURES.has(result.status) && entry.error) {
            for (const line of entry.error.split("\n").slice(0, 3)) {
                if (line.trim()) console.log(`      ${line}`);
            }
        }
    }

    onError(error) {
        console.error(`  ⚠ Erreur : ${stripAnsi(error?.message ?? JSON.stringify(error)).split("\n")[0]}`);
    }

    onEnd(result) {
        console.log(`◼ Suite terminée (${result.status}).`);
    }
}
