@API
Feature: Put appointment duration
    Background: Get tocken
        Given get tocken

    Scenario: Verify PUT visit appointment duration with corect docid

        When PUT visit appointment duration with docid "0ULG4mp8OwSr6Hsz0QKc" with full databody
        Then should return status code should be 200

    Scenario: Verify PUT visit appointment duration with uncorect docid

        When PUT visit appointment duration with uncorect docid "0ULG4mp8OwSr6Hsz0ccc" with full databody
        Then should return status code should be 400
    
    Scenario: Verify PUT visit appointment duration with missing visitDate

        When PUT visit appointment duration with docid "0ULG4mp8OwSr6Hsz0QKc" with missing visitDate 
        Then should return status code should be 400
   
    Scenario: Verify PUT visit appointment duration with uncorect visitLength

        When PUT visit appointment duration with docid "0ULG4mp8OwSr6Hsz0QKc" with uncorect visitLength
        Then should return status code should be 400