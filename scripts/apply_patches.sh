#!/bin/sh
#
# script to clean up the deployments made by redeploy.py for vectorwebdev and vectorwebexp
set -e

for d in patches/*/ ; do
    echo "Patching $d..."
    patch-package --patch-dir "$d"
    echo "...$d done."
done


#patch-package --patch-dir patches/contentscanner && patch-package --patch-dir patches/joinrules