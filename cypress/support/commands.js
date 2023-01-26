// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

var firstNameProd
var secondNameProd
var sizeList

Cypress.Commands.add('setFirstNameProduct', (firstName) => {
    firstNameProd = firstName
})

Cypress.Commands.add('getFirstNameProduct', () => {
    return firstNameProd
})

Cypress.Commands.add('setLastNameProduct', (secondName) => {
    secondNameProd = secondName
})

Cypress.Commands.add('getLastNameProduct', () => {
    return secondNameProd
})

Cypress.Commands.add('setSizeList', (size) => {
    sizeList = size
})

Cypress.Commands.add('getSizeList', () => {
    return sizeList
})