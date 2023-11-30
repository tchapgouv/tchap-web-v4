#!/bin/sh
#
# Script to apply the patches in patches directory, using patch-package.
set -e

node scripts/tchap/checkPatchFile.js

for d in patches/*/ ; do
    echo "Patching $d..."
    yarn patch-package --patch-dir "$d" --error-on-fail
    echo "...$d done."
done
