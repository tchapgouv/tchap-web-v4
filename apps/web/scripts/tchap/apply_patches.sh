#!/bin/sh
#
# Script to apply the patches in patches directory, using patch-package.
# The patches are applied from the workspace root node_modules, not inside the one in apps/web
set -e

node ./scripts/tchap/checkPatchFile.js

for d in patches_tchap/*/ ; do
    echo "Patching $d..."
    pnpm patch-package --patch-dir "$d" --error-on-fail
    echo "...$d done."
done
