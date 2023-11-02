import GlobalVariables from "../globalVariables"; 

class BankingInfoPage extends GlobalVariables {
  fillBankInfoAfterRegistration = "registration";
  fillBankInfoAtBankAccountsPage = "bankAccountsPage";

  onboardingModalNextButton() {
    return cy.xpath('//button[@data-test="user-onboarding-next"]');
  }

  bankNameInputField() {
    return cy.xpath('//div[@data-test="bankaccount-bankName-input"]');
  }

  bankAccountRautingNumberInputField() {
    return cy.xpath('//div[@data-test="bankaccount-routingNumber-input"]');
  }

  bankAccountNumberInputField() {
    return cy.xpath('//div[@data-test="bankaccount-accountNumber-input"]');
  }

  saveBankInformationButton() {
    return cy.xpath('//button[@data-test="bankaccount-submit"]');
  }

  bankInformationSuccessfullyAddedMessage() {
    return cy.xpath(
      '//div[@data-test="user-onboarding-dialog-title"]//h2[contains(text(), "Finished")]'
    );
  }

  addNewBankAccountButton() {
    return cy.xpath('//a[@data-test="bankaccount-new"]');
  }

  bankingPageSideNavigationButton() {
    return cy.xpath('//a[@data-test="sidenav-bankaccounts"]');
  }  
  
  bankAccountsList() {
    return cy.xpath('//ul[@data-test="bankaccount-list"]');
  }
  
  deleteBankAccountButton() {
    return cy.xpath('//button[@data-test="bankaccount-delete"]');
  }  
  

  fillBankingInfo(section) {
    switch (section) {
      case this.fillBankInfoAfterRegistration:
        this.onboardingModalNextButton().click();
        break;

      case this.fillBankInfoAtBankAccountsPage:
        this.bankingPageSideNavigationButton().click();
        this.addNewBankAccountButton().click();
        break;
    }

    this.bankNameInputField().type(Cypress.env("bankName"));
    this.bankAccountRautingNumberInputField().type(
      this.routingNumber
    );
    this.bankAccountNumberInputField().type(this.bankAccountNumber);

    this.saveBankInformationButton().click();
    
    switch (section) {
      case this.fillBankInfoAfterRegistration:
        this.bankInformationSuccessfullyAddedMessage().should("exist");
        break;

      case this.fillBankInfoAtBankAccountsPage:
        this.bankAccountsList().find("li").its("length").should("be.gte", 1);
        break;
    }
  }

  deleteBankAccount() {
      this.bankingPageSideNavigationButton().click();
      this.addNewBankAccountButton().click();

      this.deleteBankAccount().first().click();
      this.bankAccountsList().find("li").its("length").should("be.eq", 1);
  }

}
export default BankingInfoPage;
