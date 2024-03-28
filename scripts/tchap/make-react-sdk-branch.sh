# TODO : NOT SURE THIS WORKS, THE PRs do not contain what I thought. First draft.


# The tchap-web branch which contains patch changes that you want to visualize by making a corresponding react-sdk branch.
# Also works with a tag in tchap-web repo, like "tchap-4.4.2"
branch="$1"

git checkout "$1"
./scripts/tchap/install-yarn-linked-repositories.sh #(si changement de version)
cd yarn-linked-dependencies/matrix-react-sdk
# create branch (branches from the checked out tag)
git checkout -B "tchap-web-$1"
# commit into branch
git commit -am "Code from patches from tchap-web branch $1"
# add fork remote (install-yarn-linked-repositories.sh destroys previous remotes)
git remote add fork https://github.com/tchapgouv/matrix-react-sdk-fork
# push branch to fork remote
git push --set-upstream fork "tchap-web-$1"

# go back to tchap-web ?
#cd ../..