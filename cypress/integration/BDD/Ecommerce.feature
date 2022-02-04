Feature: End to end Ecommerce validation

    Application regression

    @Regression
    Scenario: Scenario name

        Given I open Ecommerce page
        When I add items to cart
        And Validate the total prices
        Then Select the country, submit and verify final message

    @Smoke
    Scenario Outline: Filling the form to shop
        Given I open Ecommerce page
        When I fill the form details with "<name>" and "<gender>"
        Then validate the form behavior
        And select the shop page
        Examples:
            | name  | gender |
            | Bob   | Male   |
            | Roger | Male   |