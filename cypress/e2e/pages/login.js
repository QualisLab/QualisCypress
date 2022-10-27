class loginPage {
    elements = {
      usernameInput: () => 
      cy.get("#user-name"),

      passwordInput: () => cy.get("#password"),
      loginBtn: () => cy.get("#login-button"),
      errorMessage: () => cy.get('h3[data-test="error"]'),
    };
  }
  module.exports = new loginPage();