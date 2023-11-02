import BankingInfoPage from "../pages/bankingInfoPage";
import LoginPage from "../pages/loginPage";
import GlobalVariables from "../globalVariables";
import RegistrationPage from "../pages/registrationPage";

const loginPage = new LoginPage();
const myProfilePage = new BankingInfoPage();
const registrationPage = new RegistrationPage();

beforeEach(() => {
  cy.viewport("iphone-x");
  Cypress.env("isMobile", true);
});

describe('Registration Tests', () => {
  it("should be able to register", () => {
    registrationPage.createAnAccount();
  });

  it('Add banking info in Bank Accounts page', () => {
    myProfilePage.fillBankingInfo(myProfilePage.fillBankInfoAtBankAccountsPage);
  });

  it('Delete bank account', () => {
    myProfilePage.deleteBankAccount();
  });
})
