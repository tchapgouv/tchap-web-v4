This folder is copied from the matrix-react-sdk and contains Tchap's specifics e2e tests
To run the tests, complete the env vars, start a web instance then run the tests
Files in 'support' folder are automatically imported by Cypress

TODO :
 - make all this run in CI ! Will need running a tchap-web server at http://localhost:8080
 - clean up the server after each test : delete created rooms, log out, ...
