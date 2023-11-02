/// <reference types="Cypress" />
import { faker } from "@faker-js/faker";

class GlobalVariables {
    routingNumber = faker.finance.routingNumber();
    bankAccountNumber = faker.finance.accountNumber(9);
}

export default GlobalVariables;
