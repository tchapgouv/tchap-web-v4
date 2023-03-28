#!/bin/bash
#inspired from ./layered.sh
set -x

# Creates a layered environment with the full repo for the app and SDKs cloned
# and linked. This gives an tchap-web dev environment ready to build with
# matching branches of react-sdk's dependencies so that changes can be tested
# in tchap-web.

# Note that this style is different from the recommended developer setup: this
# file nests js-sdk and matrix-react-sdk inside element-web, while the local
# development setup places them all at the same level. We are nesting them here
# because some CI systems do not allow moving to a directory above the checkout
# for the primary repo (element-web in this case).

#yarn install --pure-lockfile

# Pass appropriate repo to fetchdep.sh (:TCHAP: not needed for tchap-web)
#export PR_ORG=vector-im
#export PR_REPO=element-web

# :TCHAP: added : grep matrix dependencies version from package.json
export MATRIX_JS_SDK_VERSION=v$(awk -F \" '/"matrix-js-sdk": ".+"/ { print $4; exit; }' package.json)
export MATRIX_REACT_SDK_VERSION=v$(awk -F \" '/"matrix-react-sdk": ".+"/ { print $4; exit; }' package.json)
echo "Using MATRIX_JS_SDK_VERSION $MATRIX_JS_SDK_VERSION"
echo "Using MATRIX_REACT_SDK_VERSION $MATRIX_REACT_SDK_VERSION"

# :TCHAP: Create an additional directory to add one layer of depth, otherwise some imports will fail.
# This is because the normal location of dependencies is in tchap-web-v4/node_modules, so ../.. is expected
# to take us to tchap-web-v4. Make it work the same way.
mkdir -p yarn-linked-dependencies
cd yarn-linked-dependencies

# Set up the js-sdk first
../scripts/fetchdep.with.version.sh matrix-org matrix-js-sdk $MATRIX_JS_SDK_VERSION
pushd matrix-js-sdk
yarn unlink # :TCHAP: for local build, undo previous links if present.
yarn link
yarn install --pure-lockfile
popd

# :TCHAP: we don't use this.
# Also set up matrix-analytics-events so we get the latest from
# the main branch or a branch with matching name
#./scripts/fetchdep.sh matrix-org matrix-analytics-events main
#pushd matrix-analytics-events
#yarn link
#yarn install --pure-lockfile
#yarn build:ts
#popd

# Now set up the react-sdk
../scripts/fetchdep.with.version.sh matrix-org matrix-react-sdk $MATRIX_REACT_SDK_VERSION
pushd matrix-react-sdk
yarn unlink # :TCHAP: for local build, undo previous links if present.
yarn link
yarn link matrix-js-sdk
#yarn link @matrix-org/analytics-events # :TCHAP: we don't use this
yarn install --pure-lockfile
popd

# :TCHAP: we are now in linked-dependencies, go back out to tchap-web-v4 dir
cd ..

# Link the layers into element-web
yarn link matrix-js-sdk
yarn link matrix-react-sdk
yarn install --pure-lockfile

