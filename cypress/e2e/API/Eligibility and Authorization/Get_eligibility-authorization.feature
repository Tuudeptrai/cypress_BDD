@API
Feature: Get Vissit eligibility-authorization
    Background: Get tocken
        Given get tocken

    Scenario: Verify GET visit detail with beartoken and correct docid
        And I send a GET request with correct docid
        Then the response status code should be 200
        And the response should contain eligibility-authorization information

    Scenario: Verify GET visit detail with beartoken and incorrect docid
        And I send a GET request with uncorrect docid
        Then the response status code should be 400

    Scenario: Verify eligibility API response
        When I make an eligibility API request
        Then I should receive the eligibility response

    Scenario: Verify No of check and last time check
        When I make an GET eligibility API request
        Then I should receive the No of check and last time check response
