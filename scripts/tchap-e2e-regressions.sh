#!/usr/bin/env bash
#
# tchap-e2e-regressions.sh — joue la suite e2e Playwright de apps/web
# (playwright/e2e), suite par suite : progression lisible en direct, état
# conservé en continu (Ctrl+C interrompt sans rien perdre, relancer reprend),
# bilan final distinguant les échecs « connus » (baseline) des nouveaux.
#
# État du run (TCHAP_E2E_STATE_DIR, défaut <dépôt>/.tchap-e2e-state) :
#   results.jsonl  un résultat par test, écrit à chaque fin de test (machine) ;
#   results.txt    journal lisible, écrit aussi à chaque fin de test ;
#   done/          marqueurs des suites terminées (<cible> + code de sortie +
#                  signature des options « -- ») ; un fichier .partial par suite
#                  en cours signale une exécution interrompue ;
#   logs/          sortie complète de chaque suite ; server.log pour le dev.
#
set -o pipefail

# ============================================================================
# Chemins et configuration
# ============================================================================

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
APP_DIR="$REPO_ROOT/apps/web"
E2E_DIR="$APP_DIR/playwright/e2e"

# CLI Playwright : hoisting racine d'abord, sinon node_modules de apps/web.
CLI="$REPO_ROOT/node_modules/@playwright/test/cli.js"
if [ ! -f "$CLI" ] && [ -f "$APP_DIR/node_modules/@playwright/test/cli.js" ]; then
    CLI="$APP_DIR/node_modules/@playwright/test/cli.js"
fi

REPORTER="$SCRIPT_DIR/tchap-e2e-reporter.mjs"
SUMMARIZE="$SCRIPT_DIR/tchap-e2e-summarize.js"
BASELINE="$SCRIPT_DIR/tchap-e2e-expected-failures.txt"

PROJECT="${TCHAP_E2E_PROJECT:-Chrome}"
BASE_URL="${TCHAP_E2E_BASE_URL:-http://localhost:8080}"
STATE_DIR="${TCHAP_E2E_STATE_DIR:-$REPO_ROOT/.tchap-e2e-state}"

JSONL="$STATE_DIR/results.jsonl"
TXT="$STATE_DIR/results.txt"
DONE_DIR="$STATE_DIR/done"
LOGS_DIR="$STATE_DIR/logs"
SERVER_LOG="$STATE_DIR/server.log"

# Suites volontairement exclues du passage de tests (cassées côté tchap).
EXCLUDED=" login knock register "

# ============================================================================
# Utilitaires
# ============================================================================

die() { printf 'Erreur : %s\n' "$*" >&2; exit 2; }

usage() {
    cat <<'EOF'
Usage : tchap-e2e-regressions.sh [options] [-- <options Playwright>]

Joue la suite e2e Playwright de apps/web (playwright/e2e), suite par suite :
progression en direct, reprise après interruption (Ctrl+C), bilan distinguant
les échecs connus (baseline) des nouveaux.

Options :
  --fresh            oublie l'état précédent, repart de zéro
  --retry-failed     rejoue les suites déjà terminées mais en échec
  --filter <motif>   ne joue que les suites dont le chemin contient <motif>
  --list             affiche l'état des suites, sans rien exécuter
  --keep-server      le serveur de dev survit aux interruptions (relance rapide)
  --no-server        serveur géré à la main (déjà lancé ailleurs)
  --update-baseline  après le run, recopie dans la baseline (txt) les échecs
                     observés absents du fichier — pour bâtir par tranches la
                     référence des échecs « connus » lors de runs interrompus
  -h, --help         cette aide

Tout ce qui suit « -- » est transmis à « playwright test » pour chaque suite :
  -- --workers 4     parallélise DANS chaque suite (chaque worker lance son
                    navigateur et son conteneur homeserver — cf. votre RAM ;
                    le dépôt amont force workers=1 par défaut) ;
  -- --grep "mot"   restreint les tests joués.
La reprise ne fait confiance aux marqueurs d'une suite QUE si les options « -- »
strictement identiques sont utilisées (--workers exclu, sans effet sur la
sélection). --shard est refusé (marqueurs par suite incompatibles).

Variables d'environnement :
  TCHAP_E2E_PROJECT    projet Playwright (défaut : Chrome)
  TCHAP_E2E_BASE_URL   serveur de dev (défaut : http://localhost:8080)
  TCHAP_E2E_STATE_DIR  répertoire de l'état du run
                       (défaut : <dépôt>/.tchap-e2e-state, ignoré par git)

Codes de sortie : 0 OK · 1 échec(s) nouveau(s) · 2 problème d'environnement
· 130 interrompu (résultats partiels conservés).
EOF
}

# Nom de fichier sûr pour un chemin de cible (playwright/e2e/room → playwright_e2e_room).
marker_of() { printf '%s' "${1//[^a-zA-Z0-9._-]/_}"; }

# Attend que le serveur de dev réponde sur /config.json.
server_ready() {
    node -e 'fetch(process.argv[1]).then((r) => process.exit(r.status === 200 ? 0 : 1)).catch(() => process.exit(1))' \
        "$BASE_URL/config.json" 2>/dev/null
}

# Tue un processus et toute sa descendance (serveur de dev).
kill_tree() {
    [ -n "$1" ] || return 0
    local children child
    children="$(pgrep -P "$1" 2>/dev/null)" || children=""
    for child in $children; do kill_tree "$child"; done
    kill -TERM "$1" 2>/dev/null
    return 0
}

# ============================================================================
# Analyse des arguments
# ============================================================================

FRESH=0 RETRY_FAILED=0 LIST=0 KEEP_SERVER=0 NO_SERVER=0 UPDATE_BASELINE=0
FILTER="" INTERRUPTED=0 CRASHED=0
EXTRA=()

while [ $# -gt 0 ]; do
    case "$1" in
        --fresh) FRESH=1 ;;
        --retry-failed) RETRY_FAILED=1 ;;
        --list) LIST=1 ;;
        --keep-server) KEEP_SERVER=1 ;;
        --no-server) NO_SERVER=1 ;;
        --update-baseline) UPDATE_BASELINE=1 ;;
        --filter) [ $# -ge 2 ] || die "--filter attend un motif"; FILTER="$2"; shift ;;
        -h|--help) usage; exit 0 ;;
        --) shift; EXTRA=("$@"); break ;;
        *) die "option inconnue : $1 (les options Playwright se passent après --)" ;;
    esac
    shift
done

# Signature des options de sélection : une suite n'est « terminée » que pour
# les options avec lesquelles elle a réellement été jouée. Le nombre de workers
# (--workers) et le mode inventaire (--list) n'affectent pas la sélection des
# tests — ils sont retirés de la signature pour pouvoir changer de parallélisme
# ou prévisualiser sans tout rejouer.
EXTRA_SIG=""
i=0
while [ $i -lt ${#EXTRA[@]} ]; do
    case "${EXTRA[$i]}" in
        --workers|-w) i=$((i+2)); continue ;;
        --workers=*) i=$((i+1)); continue ;;
        --list) i=$((i+1)); continue ;;
    esac
    EXTRA_SIG="$EXTRA_SIG ${EXTRA[$i]}"
    i=$((i+1))
done

NOMARK=0
for opt in ${EXTRA[@]+"${EXTRA[@]}"}; do
    case "$opt" in
        --shard|--shard=*)
            die "--shard est incompatible avec ce script : chaque fragment ne jouerait qu'une partie des tests et les marqueurs de suites mentiraient. Shardez avec « playwright test » directement, hors reprise."
            ;;
        --list) NOMARK=1 ;;
    esac
done

# ============================================================================
# Prérequis
# ============================================================================

command -v node >/dev/null 2>&1 || die "node est introuvable dans le PATH"
[ -f "$CLI" ] || die "Playwright introuvable ($CLI) — lancez « pnpm install » à la racine"
[ -f "$REPORTER" ] || die "reporter introuvable : $REPORTER"
[ -f "$SUMMARIZE" ] || die "script de bilan introuvable : $SUMMARIZE"
if ! command -v docker >/dev/null 2>&1 && ! command -v podman >/dev/null 2>&1; then
    echo "ATTENTION : pas de Docker/Podman détecté — les homeservers de test (testcontainers) ne démarreront pas." >&2
fi

# Sur macOS, les baselines d'images ne sont valables que sous Linux (AGENTS.md).
OS_ARGS=()
if [ "$(uname -s)" = "Darwin" ]; then
    OS_ARGS=(--ignore-snapshots)
fi

# ============================================================================
# État : reprise d'un run précédent ou repartie de zéro
# ============================================================================

if [ "$FRESH" = 1 ]; then
    rm -rf "$STATE_DIR"
fi
mkdir -p "$DONE_DIR" "$LOGS_DIR"
touch "$JSONL" "$TXT"

# ============================================================================
# Cibles : sous-dossiers de playwright/e2e, hors exclusions, + specs racines
# ============================================================================

shopt -s nullglob
TARGETS=()
for entry in "$E2E_DIR"/*/; do
    name="$(basename "$entry")"
    case "$EXCLUDED" in *" $name "*) continue ;; esac
    TARGETS+=("playwright/e2e/$name")
done
for file in "$E2E_DIR"/*.spec.ts; do
    TARGETS+=("playwright/e2e/$(basename "$file")")
done
[ ${#TARGETS[@]} -gt 0 ] || die "aucune suite trouvée dans $E2E_DIR"

# ============================================================================
# --list : montrer l'état des suites et s'arrêter là
# ============================================================================

if [ "$LIST" = 1 ]; then
    echo "État du run e2e — répertoire : $STATE_DIR"
    echo ""
    for target in "${TARGETS[@]}"; do
        marker="$DONE_DIR/$(marker_of "$target").exit"
        if [ -f "$marker" ]; then
            code="$(sed -n '2p' "$marker")"
            if [ "$(sed -n '3p' "$marker")" = "$EXTRA_SIG" ]; then
                printf '  %s  %s  (code %s)\n' "$([ "${code:-1}" = 0 ] && echo ✔ || echo ✘)" "$target" "${code:-?}"
            else
                printf '  ◦  %s  à rejouer (autres options « -- »)\n' "$target"
            fi
        else
            printf '  ·  %s  à jouer\n' "$target"
        fi
    done
    exit 0
fi

# ============================================================================
# Playable : suites à jouer (déjà faites → sautées, filtre éventuel)
# ============================================================================

if [ "$RETRY_FAILED" = 1 ]; then
    for target in "${TARGETS[@]}"; do
        marker="$DONE_DIR/$(marker_of "$target").exit"
        if [ -f "$marker" ] && [ "$(sed -n '2p' "$marker")" != "0" ]; then
            rm -f "$marker"
        fi
    done
fi

PLAYABLE=()
for target in "${TARGETS[@]}"; do
    if [ -n "$FILTER" ]; then
        case "$target" in *"$FILTER"*) ;; *) continue ;; esac
    fi
    marker="$DONE_DIR/$(marker_of "$target").exit"
    if [ -f "$marker" ] && [ "$(sed -n '3p' "$marker")" = "$EXTRA_SIG" ]; then
        continue
    fi
    PLAYABLE+=("$target")
done

done_count=$(find "$DONE_DIR" -name '*.exit' 2>/dev/null | wc -l | tr -d ' ')
if [ "$done_count" -gt 0 ]; then
    echo "Reprise : $done_count suite(s) déjà traitée(s), ${#PLAYABLE[@]} à jouer (--fresh pour repartir de zéro)."
fi

if [ ${#PLAYABLE[@]} -eq 0 ]; then
    echo "Rien à jouer : toutes les suites ciblées sont déjà traitées."
    node "$SUMMARIZE" "$STATE_DIR" --baseline "$BASELINE"
    exit $?
fi

# ============================================================================
# Serveur de dev (réutilisé s'il tourne déjà — reuseExistingServer dans la
# config Playwright ; cf. AGENTS.md au sujet des serveurs périmés)
# ============================================================================

SERVER_PID=""
cleanup() {
    if [ -n "$SERVER_PID" ]; then
        printf '\nArrêt du serveur de dev (PID %s)…\n' "$SERVER_PID" >&2
        kill_tree "$SERVER_PID"
        local i=0
        while kill -0 "$SERVER_PID" 2>/dev/null && [ $i -lt 10 ]; do sleep 1; i=$((i+1)); done
        kill -9 "$SERVER_PID" 2>/dev/null
    fi
}
trap 'INTERRUPTED=1' INT
trap cleanup EXIT

if [ "$NO_SERVER" != 1 ]; then
    if server_ready; then
        echo "Serveur déjà en écoute sur $BASE_URL : réutilisé."
        echo "  (AGENTS.md : un serveur périmé sert de vieilles pages ; redoutez-le si les résultats semblent absurdes.)"
    else
        echo "Démarrage du serveur de dev « pnpm nx start » ($BASE_URL)…"
        if [ "$KEEP_SERVER" = 1 ] && command -v setsid >/dev/null 2>&1; then
            # Détaché : il survivra aux Ctrl+C pour des reprises rapides.
            setsid sh -c 'cd "$1" && exec pnpm nx --outputStyle stream start' _ "$APP_DIR" \
                >"$SERVER_LOG" 2>&1 </dev/null &
        else
            ( cd "$APP_DIR" && exec pnpm nx --outputStyle stream start ) >"$SERVER_LOG" 2>&1 &
            SERVER_PID=$!
        fi
        waited=0
        until server_ready; do
            sleep 3
            waited=$((waited + 3))
            if [ $waited -ge 600 ]; then
                tail -20 "$SERVER_LOG" >&2
                die "le serveur de dev n'a pas démarré en 600 s (journal : $SERVER_LOG)"
            fi
            printf '.'
        done
        echo " serveur prêt (${waited}s)."
    fi
fi

# ============================================================================
# Boucle principale : une invocation Playwright par suite
# ============================================================================

total=${#PLAYABLE[@]}
echo ""
echo "Suites à jouer : $total (projet : $PROJECT) — Ctrl+C pour interrompre (reprise possible)."

n=0
for target in "${PLAYABLE[@]}"; do
    n=$((n+1))
    safe="$(marker_of "$target")"
    log="$LOGS_DIR/$safe.log"
    echo ""
    echo "━━━ Suite $n/$total : $target ━━━"

    # Reprise fine : une suite interrompue (pas de marqueur) rejoue seulement
    # les fichiers de spec non encore entièrement réussis — les résultats déjà
    # enregistrés (results.jsonl / results.txt) sont conservés tels quels.
    # Le JSONL ne fait foi que s'il a été écrit avec les MÊMES options de
    # sélection (fichier .partial signé) ; sinon toute la suite rejoue.
    run_args=("$target")
    partial="$DONE_DIR/$safe.partial"
    use_fine=0
    if [ "$NOMARK" != 1 ] && [ -f "$partial" ] && [ "$(sed -n '1p' "$partial")" = "$EXTRA_SIG" ]; then
        use_fine=1
    fi
    if [ "$use_fine" = 1 ] && [ -d "$APP_DIR/$target" ]; then
        passed_files="$(node "$SUMMARIZE" "$STATE_DIR" --passed-files "$target")"
        if [ -n "$passed_files" ]; then
            replay=()
            for specfile in $(cd "$APP_DIR" && find "$target" -name "*.spec.ts" | sort); do
                if printf "%s\n" "$passed_files" | grep -qxF -- "$specfile"; then
                    continue
                fi
                replay+=("$specfile")
            done
            all_count=$(cd "$APP_DIR" && find "$target" -name "*.spec.ts" | wc -l | tr -d " ")
            if [ ${#replay[@]} -eq 0 ]; then
                echo "┆ tous les fichiers sont déjà réussis — suite validée sans relance"
                rm -f "$partial"
                printf "%s\n%s\n%s\n" "$target" 0 "$EXTRA_SIG" > "$DONE_DIR/$safe.exit"
                continue
            fi
            if [ ${#replay[@]} -lt "$all_count" ]; then
                echo "┆ reprise fine : $((all_count - ${#replay[@]})) fichier(s) déjà réussi(s) sur $all_count — on rejoue ${#replay[@]}"
                run_args=("${replay[@]}")
            fi
        fi
    fi

    # Run « en cours » : la trace signée servira à la prochaine reprise fine.
    if [ "$NOMARK" != 1 ]; then
        printf '%s\n' "$EXTRA_SIG" > "$partial"
    fi

    # Journal lisible : un repère de suite, puis le reporter ajoute une ligne
    # par test terminé (progression consultable pendant le run, cf. results.txt).
    printf "── %s — %s ──\n" "$target" "$(date "+%Y-%m-%d %H:%M:%S")" >> "$TXT"

    # Progression en direct via le reporter + journal complet suiveur.
    ( cd "$APP_DIR" && TCHAP_E2E_JSONL="$JSONL" TCHAP_E2E_TXT="$TXT" exec node "$CLI" test \
        "--project=$PROJECT" \
        --pass-with-no-tests \
        "--reporter=$REPORTER" \
        ${OS_ARGS[@]+"${OS_ARGS[@]}"} \
        ${EXTRA[@]+"${EXTRA[@]}"} \
        "${run_args[@]}" 2>&1 ) | tee -a "$log"
    code=$?

    if [ "$INTERRUPTED" = 1 ]; then
        echo "⏸ Interrompu pendant « $target » — résultats partiels conservés."
        break
    fi

    case "$code" in
        0|1) ;;  # suite menée à son terme (0 : sans échec ; 1 : avec échecs)
        *)
            echo "✘ « $target » s'est arrêtée anormalement (code $code) — cf. $log"
            CRASHED=$code
            break
            ;;
    esac

    # Mode inventaire (--list pass-through) : rien n'a été joué, aucun marqueur,
    # pas de bilan — le run suivant rejouera normalement la suite.
    if [ "$NOMARK" = 1 ]; then
        echo "┆ --list : collecte sans exécution — aucun marqueur écrit"
        continue
    fi

    # Bilan express de la suite, à destination de l'écran.
    counts="$(node "$SUMMARIZE" "$STATE_DIR" --tally "$target")"
    if [ -n "$counts" ]; then
        set -- $counts
    else
        set -- 0 0 0
    fi
    echo "→ $1 réussi(s) · $2 échec(s) · $3 ignoré(s) (sortie $code)"

    # Sortie 1 sans AUCUN test joué : panne d'environnement (serveur,
    # conteneurs, config…), pas un échec de test — on s'arrête là.
    if [ "$code" = 1 ] && [ $(( $1 + $2 + $3 )) -eq 0 ]; then
        echo "✘ aucun test n'a été joué dans « $target » — problème d'environnement, cf. $log"
        CRASHED=2
        break
    fi

    # Suite terminée : marqueur (cible + code + signature des options).
    rm -f "$partial"
    printf '%s\n%s\n%s\n' "$target" "$code" "$EXTRA_SIG" > "$DONE_DIR/$safe.exit"
done

# ============================================================================
# Bilan
# ============================================================================

done_count=$(find "$DONE_DIR" -name '*.exit' 2>/dev/null | wc -l | tr -d ' ')
echo ""
echo "──────────────────────────────────────────────────────────────────────"
echo "Suites terminées : $done_count/${#TARGETS[@]} · état conservé dans $STATE_DIR"

node "$SUMMARIZE" "$STATE_DIR" --baseline "$BASELINE"
summary=$?

if [ "$UPDATE_BASELINE" = 1 ]; then
    echo ""
    node "$SUMMARIZE" "$STATE_DIR" --baseline "$BASELINE" --update-baseline "$BASELINE"
    echo "NB : les échecs présents dans la baseline ne sont plus signalés comme"
    echo "régressions — n'utilisez --update-baseline que pour bâtir la référence."
fi

if [ "$INTERRUPTED" = 1 ]; then
    echo ""
    echo "Interrompu — relancez la même commande pour reprendre les suites restantes."
    exit 130
fi
if [ "$CRASHED" != 0 ]; then
    exit 2
fi
exit $summary
