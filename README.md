# CypressExampleProject
Example Cypress Automation Testing Project

The tests are based on the Cypress Real World App - https://github.com/cypress-io/cypress-realworld-app

git pull https://github.com/cypress-io/cypress-realworld-app.git

before running the app run - yarn install

to run the app - yarn dev

*****************************
# Cypress usage
1. npm init
2. npm install cypress --save-dev - to create new Cypress project
3. npx cypress open - to start Cypress UI
4. npx cypress run --env device="{$deviceName}" , isMobile=true --browser {$browserName}
5. use the cy.matchImageSnapshot(); to compare snapshots of the code, and perform visual testing
