@UI
Feature: Update visit status
    Background:
        Given I navigate to the appointments page
        When I go to 10 jul 2023
        When I click on the appointment

    Scenario Outline:  update visit status
        When I select visit "<status>" in dropdown
        Then alert should show "Update appointment successfully!"
        Then appointment Process show visit "<status>" point
        Examples:
            | status                   |
            | Check-in                 |
            | Check-out                |
            | Billing Complete         |
            | Billing pending          |
            | Discharge with clinician |
            | Documentation complete   |
            | Documentation incomplete |
            | Intake with clinician    |
            | No call                  |
            | Not arrived              |
            | Physician with patient   |
            | Ready for billing        |
            | Ready for physician      |


    Scenario: update visit status by the current status
        When I select current visit status in dropdown
        Then alert should show "Update appointment failed!"