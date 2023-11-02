/// <reference types="Cypress" />
import { faker } from "@faker-js/faker";

//referencing the example.json file, that can be used for testing
let exampleJson = require("../testData/testJsonFiles/example.json");

class GlobalVariables {
    routingNumber = faker.finance.routingNumber();
    bankAccountNumber = faker.finance.accountNumber(9);

    username = Cypress.env("username");
    password = Cypress.env("password");
    firstName = "Fname" + Date.now();
    lastName = "Lname" + Date.now()
    password = "Password1!";
    bankName = "Bank" + Date.now()

    //generates a random image name, from any of the available ones stored in the testData folder
    imageName =
    "cypress/testData/testImages/test_image_" +
    faker.number.int({ min: 1, max: 28 }) +
    ".jpg";

    //get random data from json file
    randomDataFromJson =
    exampleJson[
      Math.floor(Math.random() * exampleJson.length) + 0
    ];
}

export default GlobalVariables;
