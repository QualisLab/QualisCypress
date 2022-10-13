Feature: Demo

    Feature with scenarios customized.  
    #Background:
    #    Given A user opens a saucelabs website

    @prueba4
    Scenario: Success Login
        Given A user opens a saucelabs website
        When A user enters the username "standard_user"
        And A user enters the password "secret_sauce"
        And A user clicks on the login button
        And A user order by "Name (Z to A)"
        Then the product list was ordenated desc by name