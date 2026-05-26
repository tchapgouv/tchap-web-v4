#!/bin/sh
#
# Script to apply the patches in patches directory, using patch-package.
set -e

node scripts/tchap/checkPatchFile.js

for d in patches_tchap/*/ ; do
    echo "Patching $d..."
    pnpm patch-package --patch-dir "$d" --error-on-fail
    echo "...$d done."
done
