import BankingInfoPage from "../pages/bankingInfoPage";
import LoginPage from "../pages/loginPage";
import GlobalVariables from "../globalVariables";

const loginPage = new LoginPage();
const myProfilePage = new BankingInfoPage();

beforeEach(() => {
  loginPage.login(Cypress.env('username'));
});

describe('Add Banking info', () => {
  it("Add Banking info after registration", () => {
    myProfilePage.fillBankingInfo(myProfilePage.fillBankInfoAfterRegistration);
  });

  it('Add banking info in Bank Accounts page', () => {
    myProfilePage.fillBankingInfo(myProfilePage.fillBankInfoAtBankAccountsPage);
  });

  it('Delete bank account', () => {
    myProfilePage.deleteBankAccount();
  });
})
