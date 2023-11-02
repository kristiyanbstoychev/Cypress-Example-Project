import BankingInfoPage from "../pages/bankingInfoPage";
import LoginPage from "../pages/loginPage";
import GlobalVariables from "../globalVariables";
import RegistrationPage from "../pages/registrationPage";

const loginPage = new LoginPage();
const myProfilePage = new BankingInfoPage();
const registrationPage = new RegistrationPage();
const globalVariables = new GlobalVariables();

beforeEach(() => {
  cy.viewport("iphone-x");
  Cypress.env("isMobile", true);
});

describe('Registration Tests', () => {
  it("should be able to register", () => {
    registrationPage.createAnAccount();
  })
})


describe('Login Tests', ()=>{
  it('should be able to login', () => {
    loginPage.login(globalVariables.username);
  });
})
