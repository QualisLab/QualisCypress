import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require('../pages/login')

Given("A user opens a saucelabs website", function () {
    cy.visit('/');
});

When("A user enters the username {string}", function (username) {
    loginPage.elements.usernameInput().type(username)

});

