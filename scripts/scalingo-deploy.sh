#!/bin/bash

set -e

# only available in npm versions > 16
version=$(npm pkg get version)
#version=$(grep '"version"' package.json | cut -d '"' -f 4 | head -n 1)

yarn clean
VERSION=$version yarn build

# FIXME use a dedicated config
cp config.sample.json webapp/config.json
cp nginx.conf.erb webapp/nginx.conf.erb

mkdir -p dist
cp -r webapp element-$version

"$(dirname $0)"/normalize-version.sh "${version}" > "element-$version/version"

tar chvzf "dist/element-$version.tar.gz" "element-$version"
rm -r "element-$version"

echo
echo "Packaged dist/element-$version.tar.gz"

scalingo --app tchap-dev --region osc-secnum-fr1 deploy "dist/element-$version.tar.gz"
