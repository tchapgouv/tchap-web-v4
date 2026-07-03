#!/bin/bash

# Tchap: File copied from scripts/package.js
# This file is meant to be used in scalingo and github actions

set -e

today=$(date +%Y%m%d)

version=$(./apps/web/scripts/tchap/get-version-from-package-json.sh)
export VERSION=$version
echo "VERSION is set to $VERSION"

if [[ -n "$CONFIG" ]]; then
  echo "CONFIG=$CONFIG"
  cp "apps/web/config.$CONFIG.json" apps/web/config.json
  echo "Using apps/web/config.$CONFIG.json"
else
  echo "No config specified, using config.json."
fi

pnpm clean
pnpm install

echo "===== Installing shared components"
pushd packages/shared-components
ls -l
pnpm build
# echo "preparing ..."
# pnpm prepare

popd


pushd ./apps/web
echo "===== Building app"
pnpm build

popd

mkdir -p dist
cp -r apps/web/webapp tchap-$version

# if $version looks like semver with leading v, strip it before writing to file
if [[ ${version} =~ ^v[[:digit:]]+\.[[:digit:]]+\.[[:digit:]]+(-.+)?$ ]]; then
    echo ${version:1} > tchap-$version/version
else
    echo ${version} > tchap-$version/version
fi

# Copy the files in /dist, ready to be served.
cp -r tchap-$version/* dist/

# Also make a tar file. Useful for releases.
tar chvzf tchap-$version-$CONFIG-$today.tar.gz dist
rm -r tchap-$version

echo
echo "Packaged `pwd`/tchap-$version-$CONFIG-$today.tar.gz"
