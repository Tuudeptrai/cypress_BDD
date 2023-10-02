@API
Feature: Get Patients list by search box
    Background: Get tocken
        Given get tocken

    Scenario: Verify GET patient list with last name and  first name

        When GET patient list with last name and first name
        Then should return status code should be 200 and result

    Scenario: Verify GET patient list with last name and  first name and patient id

       When GET patient list with last name and  first name and patient id
        Then should return status code should be 200 and result
    
    Scenario: Verify GET patient list with last name and DOB and patient id
       When GET patient list with last name and DOB and patient id
        Then should return status code should be 200 and result
    
    Scenario: Verify GET patient list with last name and DOB

       When GET patient list with last name and DOB
        Then should return status code should be 200 and result
    
    Scenario: Verify GET patient list with last name

       When GET patient list with last name
        Then should return status code should be 200 and total patients

    Scenario: Verify GET patient list with not exist last name

       When GET patient list with not exist last name
        Then should return status code should be 200 and no patient
    
    Scenario: Verify GET patient list with first name and last name   

        When GET patient list with first name and last name
        Then should return status code should be 200 and result

    Scenario: Verify GET patient list with first name and last name and patient id

       When GET patient list with first name and last name and patient id
        Then should return status code should be 200 and result

    Scenario: Verify GET patient list with first name and DOB and patient id
       When GET patient list with first name and DOB and patient id
        Then should return status code should be 200 and result

    Scenario: Verify GET patient list with first name and DOB
       When GET patient list with first name and DOB
        Then should return status code should be 200 and result

    Scenario: Verify GET patient list with first name

       When GET patient list with first name
        Then should return status code should be 200 and result

    Scenario: Verify GET patient list with not exist first name

       When GET patient list with not exist first name
        Then should return status code should be 200 and no patient

    Scenario: Verify GET patient list with DOB and last name   

        When GET patient list with DOB and last name
        Then should return status code should be 200 and result
    
    Scenario: Verify GET patient list with DOB and first name   

        When GET patient list with DOB and first name
        Then should return status code should be 200 and result

    Scenario: Verify GET patient list with DOB and last name and first name

        When GET patient list with DOB and last name and first name
        Then should return status code should be 200 and result

     Scenario: Verify GET patient list with DOB and patient id

        When GET patient list with DOB and patient id
        Then should return status code should be 200 and result
     
     Scenario: Verify GET patient list with DOB and cell phone

        When GET patient list with DOB and cell phone
        Then should return status code should be 200 and result

    Scenario: Verify GET patient list with patient id and last name   

        When GET patient list with patient id and last name
        Then should return status code should be 200 and result
   
    Scenario: Verify GET patient list with patient id and first name   

        When GET patient list with patient id and first name
        Then should return status code should be 200 and result

    Scenario: Verify GET patient list with patient id and DOB   

        When GET patient list with patient id and DOB
        Then should return status code should be 200 and result

    Scenario: Verify GET patient list with patient id and cell phone   

        When GET patient list with patient id and cell phone
        Then should return status code should be 200 and result

    Scenario: Verify GET patient list with cell phone and last name  

        When GET patient list with cell phone and last name
        Then should return status code should be 200 and result
    
    Scenario: Verify GET patient list with cell phone and first name  

        When GET patient list with cell phone and first name
        Then should return status code should be 200 and result
    
    Scenario: Verify GET patient list with cell phone and DOB  

        When GET patient list with cell phone and DOB
        Then should return status code should be 200 and result

    Scenario: Verify GET patient list with cell phone and patient id   

        When GET patient list with cell phone and patient id
        Then should return status code should be 200 and result