Feature: Save Eligibility
    Background: Get tocken
        Given get tocken

    Scenario: Verify PATCH Eligibility

        When PATCH Eligibility
        Then API should return status code should be 200 

    Scenario: Verify PATCH Eligibility with wrrong payload

        When PATCH Eligibility with wrrong payload
        Then API should return status code should be 400 