@API
Feature: Save And Get Authorization API
    Background: Get tocken
        Given get tocken

    Scenario: Verify save authorization

        When Save authorization
        Then Save authorization should return code should be 200 

    Scenario: Verify Get authorization

        When Get authorization
        Then Get authorization should return code should be 200 

    Scenario: Verify Get authorization

        When Get authorization with wrong visit ID
        Then should return code should be 400 