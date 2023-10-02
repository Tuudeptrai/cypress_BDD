@API
Feature: Get UIconfig
    Background: Get tocken
        Given get tocken

    Scenario: Verify GET config

        And GET Config should return status code should be 200
        And should return config information 