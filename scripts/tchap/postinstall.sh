#!/bin/bash
set -x

# This postinstall script is to make sure we use the linked-dependencies module for matrx-react-sdk

./scripts/tchap/apply_patches.sh

cd linked-dependencies
pushd matrix-react-sdk
yarn unlink # :TCHAP: for local build, undo previous links if present.
yarn link
yarn install --pure-lockfile
popd

cd ..
# Link the layers into element-web
yarn link matrix-react-sdk

