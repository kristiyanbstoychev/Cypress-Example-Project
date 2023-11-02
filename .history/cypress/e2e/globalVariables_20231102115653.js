/// <reference types="Cypress" />
import { faker } from "@faker-js/faker";
import exampleJson from "../testData/testJsonFiles"

//referencing the example.json file, that can be used for testing
let exampleJson = require("../testData/example.json");

class GlobalVariables {
    routingNumber = faker.finance.routingNumber();
    bankAccountNumber = faker.finance.accountNumber(9);

    username = Cypress.env("username");
    password = Cypress.env("password");

    //generates a random image name, from any of the available ones stored in the testData folder
    imageName =
    "cypress/testData/testImages/test_image_" +
    faker.number.int({ min: 1, max: 28 }) +
    ".jpg";

    //get random data from json file
    randomDataFromJson =
    exampleJson.locations[
      Math.floor(Math.random() * exampleJson.length) + 0
    ];
}

export default GlobalVariables;
