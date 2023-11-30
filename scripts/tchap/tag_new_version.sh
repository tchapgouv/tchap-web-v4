#!/bin/bash
set -e  # Exit immediately if a command exits with a non-zero status.

# Check for the argument
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <version_number>"
    exit 1
fi

VERSION=$1

# Create a new branch from develop_tchap
git checkout -b bump-to-${VERSION} develop_tchap

# Update package.json
npm version ${VERSION} --no-commit-hooks --no-git-tag-version

# Generate the yarn.lock
yarn install


# Commit only the package.json and yarn.lock changes
git add package.json yarn.lock
git commit -m "Bump to ${VERSION}"
git push --set-upstream origin bump-to-${VERSION}


# Create a new tag from develop_tchap and push it to the repo
git tag tchap-${VERSION}
git push origin tchap-${VERSION}

# Information for the user
echo "Don't forget to open a PR and have it validated. Verify with the Review App that the application builds and runs correctly. If not, remove the tag and delete the release"
echo "For the next steps, go see the wiki in the infra repo: https://github.com/tchapgouv/tchap-infra/wiki/Deploy-tchap-web-on-webserver"
