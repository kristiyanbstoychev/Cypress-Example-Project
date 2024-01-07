# CypressExampleProject
Example Cypress Automation Testing Project

The tests are based on the Cypress Real World App - https://github.com/cypress-io/cypress-realworld-app

```
git clone https://github.com/cypress-io/cypress-realworld-app.git
```

before running the app run 
```
yarn install
```

to run the app
```
yarn dev
```

*****************************
# Cypress usage

```
npm init
npm install cypress --save-dev - to create new Cypress project
npx cypress open - to start Cypress UI
npx cypress run --env device="{$deviceName}" , isMobile=true --browser {$browserName} - useful for CI/CD implementations
```
use the cy.matchImageSnapshot(); to compare snapshots of the code, and perform visual testing
