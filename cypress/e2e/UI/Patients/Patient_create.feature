Feature: Verify the Patient screen
  Background:
    Given I navigate to the Patient page
    When I click add patient
  Scenario: Verify UI
    Then I see the "Continue" button
    And I see the "Cancel" button
    And I see the Right menu containing the following items:
      | Patient Data          |
      | Next of Kin           |
      | Insurance             |
      | Provider              |
      | Substance Use History |
    And I see the Patient Demographic box with the following fields:
      | First Name        |
      | Middle Name       |
      | Last Name         |
      | Date of birth     |
      | Gender            |
      | Marital Status    |
      | Employment Status |
      | Height            |
      | Weight            |
      | Allergies         |
    And I see the Patient Contact box with the following fields:
      | Phone number |
      | Email        |
      | State        |
      | City         |
      | Address      |