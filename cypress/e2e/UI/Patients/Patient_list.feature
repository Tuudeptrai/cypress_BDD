@UI
Feature: Patient list
  Background:
    Given I navigate to the Patient page

  Scenario: Check if the page has the title "patients"
    Then I see the title as "Patients"

  Scenario: Check the patient table with fields
    Then I see the patient table with the following fields:
      | Patient ID | Patient Name | Phone Number | DOB | Gender | Insurance |

  Scenario: Check the patient table order by lastname A-Z
    Then All lastname on table is sort A-Z

  Scenario: Check the patient table order by lastname Z-A
    When I click on sort Z-A
    Then All lastname on table is sort Z-A

  Scenario: Check the patient table order by Oldest to Newest
    When I click on sort Oldest to Newest
    Then All lastname on table is sort Oldest to Newest

  Scenario: Check the patient table order by Newest to Oldest
    When I click on sort Newest to Oldest
    Then All lastname on table is sort Newest to Oldest