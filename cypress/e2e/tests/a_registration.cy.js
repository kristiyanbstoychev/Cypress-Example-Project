import RegistrationPage from "../pages/registrationPage";

const registrationPage = new RegistrationPage();
const username = Cypress.env("username");

describe('Registration', () => {
  it('new registration', () => {
    registrationPage.createAnAccount(username);
    cy.matchImageSnapshot();
  })

  it("registration validations", () => {});

})
