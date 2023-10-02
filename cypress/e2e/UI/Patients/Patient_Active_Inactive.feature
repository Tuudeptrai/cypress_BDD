Feature: Verify the Patient inactive and active

  Background:
    Given I navigate to the Patient page
    When I Click JoSeph Powers
    And I Click the Edit button
    And I Click Inactive this Patient

  Scenario: Verify default

    And I Click the Inactive button
    Then The alert should show Updated successfully

  Scenario:  Verify default
    And I Click the Inactive button
    Then The alert should show Updated successfully
    When I click the Add Appointment button
    Then The popup should show Patient is inactive
    When I go to the appointment screen and click the Add Appointment button
    And I click on search then click Joseph Powers
    Then The popup should show Patient is inactive
    When I go to the patient screen
    Then JoSeph Powers should have a lighter color than the other patients



  Scenario: Verify default

    Then The alert should show Updated successfully


