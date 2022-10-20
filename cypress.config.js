const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const oracledb = require("oracledb");

/**
 * @type {Cypress.PluginConfig}
 */

 oracledb.initOracleClient({libDir: 'C:\\instantclient_21_6'});

 const queryData = async(query, dbconfig) => {
   let conn;
   try{
       conn = await oracledb.getConnection(dbconfig);
       result = await conn.execute(query);
       console.log(result)
       return result
   }catch(err){
       console.log("Error===>"+err)
       return err
   } finally{
     if(conn){
       try{
         conn.close();
       }catch(err){
         console("Error===>"+err);
       }
     }
   }
 }

module.exports = defineConfig({
  env: {
    db: {
        "user": "user",
        "password": "pass",
        "connectString" : "adress"
    }
  },
  e2e: {
    async setupNodeEvents(on, config) {
      var firstNameProduct
      var secondNameProduct
      var sizeList
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("task", {
        sqlQuery: (query) => {
          return queryData(query, config.env.db);
        },
        setFirstNameProduct: (firstName) => {
          firstNameProduct = firstName
          return null
        },
        getFirstNameProduct: () => {
          return firstNameProduct
        },
        setLastNameProduct: (secondName) => {
          secondNameProduct = secondName
          return null
        },
        getLastNameProduct: () => {
          return secondNameProduct
        },
        setSizeList: (size) => {
          sizeList = size
          return null
        },
        getSizeList: () => {
          return sizeList
        }
      });
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "https://www.saucedemo.com",
    chromeWebSecurity: false,
  },
});
