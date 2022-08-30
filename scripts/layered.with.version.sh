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

# (tchap : no need)Install dependencies, as we'll be using fetchdep.sh from matrix-react-sdk
# yarn install --pure-lockfile

# Pass appropriate repo to fetchdep.sh (not needed for tchap-web)
#export PR_ORG=vector-im
#export PR_REPO=element-web

#tchap added : grep matrix dependencies version from package.json
export MATRIX_JS_SDK_VERSION=$(awk -F \" '/"matrix-js-sdk": ".+"/ { print $4; exit; }' package.json)
export MATRIX_REACT_SDK_VERSION=$(awk -F \" '/"matrix-react-sdk": ".+"/ { print $4; exit; }' package.json)

# Set up the js-sdk first
yarn unlink matrix-js-sdk
./scripts/fetchdep.sh matrix-org matrix-js-sdk v$MATRIX_JS_SDK_VERSION
pushd matrix-js-sdk
yarn link
yarn install --pure-lockfile
popd

# Also set up matrix-analytics-events so we get the latest from
# the main branch or a branch with matching name
./scripts/fetchdep.sh matrix-org matrix-analytics-events main
pushd matrix-analytics-events
yarn link
yarn install --pure-lockfile
yarn build:ts
popd

# Now set up the react-sdk
yarn unlink matrix-react-sdk
./scripts/fetchdep.sh matrix-org matrix-react-sdk v$MATRIX_REACT_SDK_VERSION
pushd matrix-react-sdk
yarn link
yarn link matrix-js-sdk
yarn link @matrix-org/analytics-events
yarn install --pure-lockfile
popd

# Link the layers into element-web
yarn link matrix-js-sdk
yarn link matrix-react-sdk

yarn install --pure-lockfile