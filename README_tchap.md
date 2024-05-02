## File structures

-   modules -> used for translation
-   linked-dependencies -> subtree dependencies used for matrix-react-sdk
-   yarn-linked-dependencies -> legacy dependencies used for matrix-js-sdk
-   patches_legacy -> legacy patches directory in which code for the patches where put
-   patches -> used for matrix-js-sdk patches
-   src -> code

## Local dev installation

```
yarn install
./scripts/tchap/install-yarn-linked-repositories.sh // this will install your local dependencies yarn-linked and subtree
yarn start

```

## Linked-dependencies

For `matrix-react-sdk` we are using a subtree and our own fork:
When you clone tchap-web-v4, you should be able to see the repo in `linked-dependencies/matrix-react-sdk`.
Our `package.json` will be using this directory as local dependencies for `matrix-react-sdk`.

You can make changes to the subtree repo as if it was code from the parent repo.
Time to time (because it takes a long time to push the code to the remote, since it needs to rebuild all the upstream history), you can push your changes to the remote fork. Necessary before an upgrade to have all the latest changes !

```
git subtree push --prefix=./linked-dependencies/matrix-react-sdk  matrix-react-sdk-tchap org-35118060@github.com:tchapgouv/matrix-react-sdk-tchap.git develop_tchap
```

This command will take all the commits that touch the subtree repo and push them to the remote fork. If you don't want to take all the commits (shouldnt happen), you will have to cherry-pick and push manually to the remote.

## Dev guidelines

### Making a change

-   In element code :
    You need to add around your code those comments

```
// :TCHAP: NAME_OF_THE_PATCH
...code
// end :TCHAP:
```

Then also update the `subtree-modifications.json` file. We continue to keep track of the changes we make to the sdk. It will also be easier to separate different functionnality that tchap added to the code
