#!/bin/sh
#
# Script to apply the patches in patches directory, using patch-package.
set -e

for d in patches/*/ ; do
    echo "Patching $d..."
    patch-package --patch-dir "$d"
    echo "...$d done."
done
