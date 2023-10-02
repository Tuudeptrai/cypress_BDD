
@UI
Feature: Edit patient detail
    Background:
        Given I navigate to the Patient page
        When I navigate to the patient detail page
        When I click on the edit button

    Scenario: Verify UI edit patient detail
        Then the following elements should be visible within edit patient detail:
            | Element           |
            | First Name        |
            | Suffix            |
            | Middle Name       |
            | Last Name         |
            | Date of birth     |
            | Gender            |
            | Weight (kg)       |
            | Height (cm)       |
            | Allergies         |
            | Marital Status    |
            | Employment Status |
            | Phone number      |
            | Email             |
            | State             |
            | City              |
            | Address           |



    Scenario: Verify Employee field has sort A-Z
        Then Employee field has sort A-Z

    Scenario: Verify Married field has sort A-Z
        Then Married field has sort A-Z

    Scenario: Verify State field has sort A-Z
        Then State field has sort A-Z

    Scenario: Verify City field has sort A-Z
        Then City field has sort A-Z

    Scenario: Verify DOB field should be mm/dd/yyyy format
        Then DOB field should be mmddyyyy format

    Scenario: Edit patient detail implement
        When Type First name random
        When Type Suffix random
        When Type Middle random
        When Type Last name random
        When Type Date of birth random
        When Type Gender random
        When Type Height random
        When Type Weight random
        When Type Allergies Record random
        When Type Marital Status random
        When Type Employment Status random
        When Type Phone number random
        When Type Email random
        When Type State random
        When Type Address random
        And hit save patient button
        Then should show message "Update patient data successfully"
        
    Scenario: verify blank reuired field can not save
        When Type First name random
        When Type Suffix random
        When Type Middle random
        When Type Last name blank
        When Type Date of birth blank
        When Type Gender random
        When Type Weight random
        When Type Height random
        When Type Allergies Record random
        When Type Marital Status random
        When Type Employment Status random
        When Type Phone number random
        When Type Email random
        When Type State random
        When Type Address random
        And hit save patient button
        Then should show message "Last name can not be blank"





