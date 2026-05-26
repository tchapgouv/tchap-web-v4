#!/bin/bash
set -e  # Exit immediately if a command exits with a non-zero status.

# Check for the argument
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <version_number>"
    exit 1
fi

VERSION=$1

# Check if we are in the directory containing package.json
if [ ! -f "package.json" ]; then
    echo "Error: package.json not found in the current directory."
    echo "Please run this script from the root directory of the project."
    exit 1
fi

# Check if the branch already exists and delete it if it does
if git branch --list | grep -q "bump-to-${VERSION}"; then
    echo "Branch bump-to-${VERSION} already exists."
    
    # Check if we are currently on this branch
    if git branch --show-current | grep -q "bump-to-${VERSION}"; then
        echo "Currently on this branch. Switching to develop_tchap first..."
        git checkout develop_tchap
    fi
    
    echo "Deleting branch bump-to-${VERSION}..."
    git branch -D "bump-to-${VERSION}"
fi

# Check if the tag already exists
if git tag -l | grep -q "tchap-${VERSION}"; then
    echo "Error: Tag tchap-${VERSION} already exists."
    echo "Please choose a different version number or delete the existing tag."
    exit 1
fi

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
