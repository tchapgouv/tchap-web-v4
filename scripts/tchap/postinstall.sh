#!/bin/bash
set -x

# This postinstall script is to make sure we use the linked-dependencies module for matrx-react-sdk

./scripts/tchap/apply_patches.sh

cd linked-dependencies
pushd matrix-react-sdk
# Normally when dealing with a subtree and node_modules, it is good practice to merge them in the parent package.json. 
# However in our case nothing should overlaps since element and matrix-react-sdk are deeply interconnected.
# Moreover, webpack will apply tree shaking to remove unecessary pacakges
yarn install --pure-lockfile
yarn unlink # :TCHAP: for local build, undo previous links if present.
yarn link

popd

cd ..
# Link the layers into element-web
yarn link matrix-react-sdk

