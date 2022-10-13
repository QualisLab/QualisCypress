import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  const demoPage = require("../../pages/DemoPage");
  const dataenviroment = require("../../fixtures/dataenviroment/dataBase.json") 
  
  When("A user order by {string}", (order) => {
    //validar que se posiciona el usuario en la pagina de productos
    demoPage.title()

    //ver cual es el primer producto de la lista - por defecto ordenada de menor a mayor
    demoPage.firstProductName()
    demoPage.lastProductName()


  });