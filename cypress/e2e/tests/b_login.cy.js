import GlobalVariables from "../globalVariables";
import LoginPage from "../pages/loginPage";

const loginPage = new LoginPage();
const globalVariables = new GlobalVariables();

describe('Login', () => {
  it('login', () => {
    //use the command to compare snapshots and perform visual testing
    cy.matchImageSnapshot();
    loginPage.login(Cypress.env('username'));
  })

  it('login validations', () => {

  });

})
