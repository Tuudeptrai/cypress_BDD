@UI
Feature: hover detail block

    Background: homepage navigate
        Given I navigate to the appointments page
        When I go to 10 jul 2023
    Scenario: Hover on the schedule appoinment
        
        When I hover in appointment block
        Then the Paitent name should be exist
        And the visit time should be exist
        And the Phone number should be exist
        And the DOB should be exist
        And the Gender should be exist
        And the Provider should be exist
        And the Visit Type should be exist
        And the Service type should be exist
        And the Eligibility Status should be exist
        And the Authorization Status should be exist

