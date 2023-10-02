@UI
Feature: Patient list search
    Background:
        Given I navigate to the Patient page

    Scenario: Verify patient list with last name and  first name

        When patient list with last name and first name
        Then should show the record

    Scenario: Verify patient list with last name and  first name and patient id

        When patient list with last name and  first name and patient id
        Then should show the record

    Scenario: Verify patient list with last name and DOB and patient id
        When patient list with last name and DOB and patient id
        Then should show the record

    Scenario: Verify patient list with last name and DOB
        When patient list with last name and DOB
        Then should show the record

    Scenario: Verify patient list with last name

        When patient list with last name
        Then should show related patients

    Scenario: Verify patient list with not exist last name

        When patient list with not exist last name
        Then should show no patient

    Scenario: Verify patient list with first name and last name

        When patient list with first name and last name
        Then should show the record

    Scenario: Verify patient list with first name and last name and patient id

        When patient list with first name and last name and patient id
        Then should show the record

    Scenario: Verify patient list with first name and DOB and patient id

        When patient list with first name and DOB and patient id
        Then should show the record

    Scenario: Verify patient list with first name and DOB
        When patient list with first name and DOB
        Then should show the record

    Scenario: Verify patient list with first name

        When patient list with first name
        Then should show the record

    Scenario: Verify patient list with not exist first name

        When patient list with not exist first name
        Then should show no patient

    Scenario: Verify patient list with DOB and last name

        When patient list with DOB and last name
        Then should show the record

    Scenario: Verify patient list with DOB and first name

        When patient list with DOB and first name
        Then should show the record

    Scenario: Verify patient list with DOB and last name and first name

        When patient list with DOB and last name and first name
        Then should show the record

    Scenario: Verify patient list with DOB and patient id

        When patient list with DOB and patient id
        Then should show the record

    Scenario: Verify patient list with DOB and cell phone

        When patient list with DOB and cell phone
        Then should show the record

    Scenario: Verify patient list with patient id and last name

        When patient list with patient id and last name
        Then should show the record

    Scenario: Verify patient list with patient id and first name

        When patient list with patient id and first name
        Then should show the record

    Scenario: Verify patient list with patient id and DOB

        When patient list with patient id and DOB
        Then should show the record

    Scenario: Verify patient list with patient id and cell phone

        When patient list with patient id and cell phone
        Then should show the record

    Scenario: Verify patient list with cell phone and last name

        When patient list with cell phone and last name
        Then should show the record

    Scenario: Verify patient list with cell phone and first name

        When patient list with cell phone and first name
        Then should show the record

    Scenario: Verify patient list with cell phone and DOB

        When patient list with cell phone and DOB
        Then should show the record

    Scenario: Verify patient list with cell phone and patient id

        When patient list with cell phone and patient id
        Then should show the record