import GlobalVariables from "../globalVariables";

class LoginPage extends GlobalVariables {
  userNameInputField() {
    return cy.xpath('//input[@id="username"]');
  }
  passwordInputField() {
    return cy.xpath('//input[@id="password"]');
  }
  signUpButton() {
    return cy.xpath('//button[@data-test="signin-submit"]');
  }
  userNameIsRequiredErrorMsg() {
    return cy.xpath('//p[contains(text(), "Username is required")]');
  }
  wrongCredentialsErrorMsg() {
    return cy.xpath('//div[@data-test="signin-error"]');
  }
  transactionButton() {
    return cy.xpath('//button[@data-test="nav-top-new-transaction"]');
  }
  walkthroughtModal() {
    return cy.xpath('//div[@data-test="user-onboarding-dialog-title"]');
  }  
  newTransactionButton() {
    return cy.xpath('//a[@data-test="nav-top-new-transaction"]');
  }

  login(username) {
    this.userNameInputField().type(username);
    this.passwordInputField().type(Cypress.env('password'));
    this.signUpButton().click();

    this.newTransactionButton().should("exist");
  }
}
export default LoginPage

   
