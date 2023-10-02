Feature: Upload Authorization
    Background: Get tocken
        Given get tocken

    Scenario: Verify Upload Authorization

        When POST Authorization
        Then API will return status code should be 200
        And POST trigger Authorization Batch
        Then API will return status code should be 200