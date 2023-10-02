@API
Feature: Get Patients list
    Background: Get tocken
        Given get tocken

    Scenario: Verify GET patient list order a-z

        When GET patient list order by lastname and order asc
        Then should return status code should be 200 and sort a to z

    Scenario: Verify GET patient list order z-a

       When GET patient list order by lastname and order desc
        Then should return status code should be 200 and sort z to a
    