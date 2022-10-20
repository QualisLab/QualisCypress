import {
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  const demoPage = require("../../pages/DemoPage");
  
  When("A user order by {string}", (order) => {
    //validar que se posiciona el usuario en la pagina de productos
    demoPage.title()

    //ver cual es el primer producto de la lista - por defecto ordenada de menor a mayor
    demoPage.firstProductName()
    //ver cual es el segundo producto de la lista - por defecto ordenada de menor a mayor
    demoPage.lastProductName()
    //se selecciona la opcion deseada para ordenar la lista de productos
    demoPage.select_selectOrder(order)
  });

  Then("the product list was ordenated desc by name", () => {
    
    //ver cual es el primer producto de la lista - por defecto ordenada de menor a mayor
    demoPage.validate_firstProductName()
    demoPage.validate_lastProductName()
  });