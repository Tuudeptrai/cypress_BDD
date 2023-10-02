@UI
Feature: Verify appointment box search
    Background:
        Given I navigate to the appointments page
         When I go to 10 jul 2023

    Scenario: Verify appointment list with last name and  first name

        When type in search box with last name and first name
        Then should show appoiment record

    Scenario: Verify appointment list with last name and  first name and patient id

        When type in search box with last name and  first name and patient id
        Then should show appoiment record

    Scenario: Verify appointment list with last name and DOB and patient id
        When type in search box with last name and DOB and patient id
        Then should show appoiment record

    Scenario: Verify appointment list with last name and DOB
        When type in search box with last name and DOB
        Then should show appoiment record

    Scenario: Verify appointment list with last name

        When type in search box with last name
        Then should show appoiment record

    Scenario: Verify appointment list with not exist last name

        When type in search box with not exist last name
        Then should show no appointment

    Scenario: Verify appointment list with first name and last name

        When type in search box with first name and last name
        Then should show appoiment record

    Scenario: Verify appointment list with first name and last name and patient id

        When type in search box with first name and last name and patient id
        Then should show appoiment record

    Scenario: Verify appointment list with first name and DOB and patient id

        When type in search box with first name and DOB and patient id
        Then should show appoiment record

    Scenario: Verify appointment list with first name and DOB
        When type in search box with first name and DOB
        Then should show appoiment record

    Scenario: Verify appointment list with first name

        When type in search box with first name
        Then should show appoiment record

    Scenario: Verify appointment list with not exist first name

        When type in search box with not exist first name
        Then should show no appointment

    Scenario: Verify appointment list with DOB and last name

        When type in search box with DOB and last name
        Then should show appoiment record

    Scenario: Verify appointment list with DOB and first name

        When type in search box with DOB and first name
        Then should show appoiment record

    Scenario: Verify appointment list with DOB and last name and first name

        When type in search box with DOB and last name and first name
        Then should show appoiment record

    Scenario: Verify appointment list with DOB and patient id

        When type in search box with DOB and patient id
        Then should show appoiment record

    Scenario: Verify appointment list with DOB and cell phone

        When type in search box with DOB and cell phone
        Then should show appoiment record

    Scenario: Verify appointment list with patient id and last name

        When type in search box with patient id and last name
        Then should show appoiment record

    Scenario: Verify appointment list with patient id and first name

        When type in search box with patient id and first name
        Then should show appoiment record

    Scenario: Verify appointment list with patient id and DOB

        When type in search box with patient id and DOB
        Then should show appoiment record

    Scenario: Verify appointment list with patient id and cell phone

        When type in search box with patient id and cell phone
        Then should show appoiment record

    Scenario: Verify appointment list with cell phone and last name

        When type in search box with cell phone and last name
        Then should show appoiment record

    Scenario: Verify appointment list with cell phone and first name

        When type in search box with cell phone and first name
        Then should show appoiment record

    Scenario: Verify appointment list with cell phone and DOB

        When type in search box with cell phone and DOB
        Then should show appoiment record

    Scenario: Verify appointment list with cell phone and patient id

        When type in search box with cell phone and patient id
        Then should show appoiment record