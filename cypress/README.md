This folder is copied from the matrix-react-sdk and contains Tchap's specifics e2e tests
To run the tests, complete the env vars, start a web instance then run the tests
Files in 'support' folder are automatically imported by Cypress

# Run cypress

- run a local instance
```
yarn start
```

- run cypress

edit env vars with values according to which home server your local instance uses (dev, preprod, prod)

E2E_TEST_USER_EMAIL=''
E2E_TEST_USER_PASSWORD=''
E2E_TEST_USER_SECURITY_KEY=''
E2E_TEST_USER_HOMESERVER_URL=''
E2E_TEST_USER_HOMESERVER_SHORT=''



```yarn run cypress```



TODO :
 - make all this run in CI ! Will need running a tchap-web server at http://localhost:8080. Cypress does not recommend that the server be started by cypress itself (https://docs.cypress.io/guides/references/best-practices#Web-Servers)
 - clean up the server after each test : delete created rooms, log out, ...
 - import/symlink/whatever the files we are using from matrix-react-sdk, instead of copying them to tchap-web repo.


