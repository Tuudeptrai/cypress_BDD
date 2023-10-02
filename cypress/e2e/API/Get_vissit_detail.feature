@API
Feature: Get Vissit detail
    Background: Get tocken
        Given get tocken

    Scenario: Verify GET visit detail with beartoken and corect docid

        And GET detail with docid "zLdV7xVAe55Pi7ZyIipE" should return status code should be 200
        And should return detail information 

    Scenario: Verify GET visit detail with beartoken and incorect docid

        And GET detail with docid "zLdV7xVAe55Pi7ZyIABC" should return status code should be 404