import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require("../../pages/LoginPage");
const dataenviroment = require("../../fixtures/dataenviroment/dataBase.json") 

Given("A user opens a saucelabs website", () => {
  cy.visit("/");
});
When("A user enters the username {string}", (username) => {
  loginPage.typeUsername(username);
});
When("A user provides incorrect credentials", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.username);
    cy.log(row.password);
    loginPage.typeUsername(row.username);
    loginPage.typePassword(row.password);
  });
});
When("A user enters the password {string}", (password) => {
  loginPage.typePassword(password);
});
When("A user clicks on the login button", () => {
  loginPage.clickLogin();
});
Then("the url will contains the inventory subdirectory", () => {
  cy.url().should("contains", "/inventory.html");
});
Then("The error message {string} is displayed", (errorMessage) => {
  loginPage.elements.errorMessage().should("have.text", errorMessage);
});
Then("el usuario desea validar la {string} para el {string}", (api,id) => {
  cy.log("Configuramos los valores a utilizar ")
  cy.request({
    url: dataenviroment[api],
    method: "GET",
    qs: {"id": id},
    failOnStatusCode: false
  }).then((response) => {
    expect(response.status).to.eq(200)
    cy.log(response.body)
  })
});
Then('valido la query', () => {
  const SQL_NOT_ON_STORE_STATUS = "SELECT * FROM ANY_TABLE";
  cy.task("sqlQuery", SQL_NOT_ON_STORE_STATUS).then((resolvedValue) => {
    resolvedValue["rows"].forEach((item) => {
      cy.log("result==>" + item);
    })
  })
})