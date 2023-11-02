import GlobalVariables from "../globalVariables";
import LoginPage from "../pages/loginPage";

const loginPage = new LoginPage();

class RegistrationPage extends GlobalVariables {
  createAccountLink() {
    return cy.get('[data-test="signup"]');
  }

  firstNameInputField() {
    return cy.get("#firstName");
  }

  lastNameInputField() {
    return cy.get("#lastName");
  }  
  
  confirmPasswordInputField() {
    return cy.get('[id="confirmPassword"]');
  }
  
  submitRegistrationFormButton() {
    return cy.get('[data-test="signup-submit"]');
  }

  onboardingModalNextButton() {
    return cy.get('[data-test="user-onboarding-next"]');
  }


  createAnAccount() {
    this.createAccountLink().click();

    this.checkRegistrationFormLayout();

    this.firstNameInputField().type(Cypress.env("firstName"));
    this.lastNameInputField().type(Cypress.env("lastName"));
    loginPage.userNameInputField().type(Cypress.env("username"));
    loginPage.passwordInputField().type(Cypress.env('password'));
    this.confirmPasswordInputField().type(Cypress.env("password"));
    this.submitRegistrationFormButton().click();

    loginPage.userNameInputField().should('exist');

    loginPage.login(Cypress.env("username"), Cypress.env("password"));
  }

  checkRegistrationFormLayout() {
    cy.matchImageSnapshot(
      'Registration form',
      {
        capture: "viewport",
        blackout: [
          '[data-test="example-locator"]'
        ]
      }
      );
  }


}
export default RegistrationPage;
