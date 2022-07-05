#!/bin/bash

# Tchap: File copied from scripts/package.json.

set -e

version=`node -e 'console.log(require("./package.json").version)'`
today=$(date +%Y%m%d)

if [[ -n "$CONFIG" ]]; then
  echo "CONFIG=$CONFIG"
  cp "config.$CONFIG.json" config.json
  echo "Using config.$CONFIG.json"
else
  echo "No config specified, using config.json."
fi

yarn clean
yarn build

mkdir -p dist
cp -r webapp tchap-$version

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
echo "Packaged tchap-$version-$CONFIG"

scalingo --app $APP env-set VERSION=$version
echo "VERSION is set to $VERSION"
