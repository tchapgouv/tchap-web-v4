#!/bin/sh
#
# Script to apply the patches in patches directory, using patch-package.
set -e

echo "Patching patch-package itself... (is https://github.com/ds300/patch-package/issues/488 fixed now?)"
yarn patch-package --patch-dir patches_patch-package --error-on-fail
echo "... done patching patch-package."

node scripts/tchap/checkPatchFile.js

for d in patches/*/ ; do
    echo "Patching $d..."
    yarn patch-package --patch-dir "$d" --error-on-fail
    echo "...$d done."
done
