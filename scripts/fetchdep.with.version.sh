#!/bin/bash
#copied from matrix-react-sdk/scripts

set -x

deforg="$1"
defrepo="$2"
defversion="$3"

if [[ -z "$deforg" ]]; then
    echo "Must provide github org" 1>&2
    exit 1
fi
if [[ -z "$defrepo" ]]; then
    echo "Must provide github repo" 1>&2
    exit 1
fi
if [[ -z "$defversion" ]]; then
    echo "Must provide version" 1>&2
    exit 1
fi

# remove existing downloaded code if present.
rm -rf "$defrepo" || true

# A function that clones a branch of a repo based on the org, repo and branch (or tag)
clone() {
    org=$1
    repo=$2
    branch=$3
    if [ -n "$branch" ]
    then
        echo "Trying to use $org/$repo#$branch"
        # Disable auth prompts: https://serverfault.com/a/665959
        GIT_TERMINAL_PROMPT=0 git clone https://github.com/$org/$repo.git $repo --branch "$branch" --depth 1 && exit 0
    fi
}

clone $deforg $defrepo $defbranch
