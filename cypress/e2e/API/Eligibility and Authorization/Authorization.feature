@API
Feature: Implement Authorization API
    Background: Get tocken
        Given get tocken

    Scenario: Verify POST authorization

        When POST authoriztion
        Then should return status code should be 200 and the body is the id
