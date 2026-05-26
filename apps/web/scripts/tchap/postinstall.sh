#!/bin/bash
set -x

# Apply tchap patches on patches_tchap folder
./scripts/tchap/apply_patches.sh

# Apply element patches from patches folder
pnpm patch-package
