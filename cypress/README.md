This folder is copied from the matrix-react-sdk and contains Tchap's specifics e2e tests
To run the tests, complete the env vars, start a web instance then run the tests
Files in 'support' folder are automatically imported by Cypress

TODO (in order):
 - stop using the dockerized synapse as backend, and use tchap dev server instead (it's not local, and you can't wipe the DB when you're done with the tests, but at least it's a tchap backend !)
 - make cypress start the tchap-web server. Right now you need to run it by hand separately, and cypress expects to find at http://localhost:8080. (How do element do this in CI ?)
 - make all this run in CI !
 - set the browser locale to french, for all tests
