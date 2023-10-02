Feature: Toggle and Verify Next of Kin Panel

    Background:
        Given I navigate to the Patient page
        When I Clicks on Austin, Powers
        When I Click on Next of Kin tab

    Scenario: Verify Toggles Next of Kin Panel
        When Toggles Next of Kin Panel

    Scenario: Verify Next of Kin Panel
        Then the following elements should be visible within Next of Kin Panel:
            | Phone number |
            | Email        |
            | State        |
            | City         |
            | Address      |
            | Zip Code     |

    Scenario: Copy Phone number to clipboard
        When user clicks the copy button for "Phone number"
        Then "Phone number" should be copied to clipboard

    Scenario: Copy Email to clipboard
        When user clicks the copy button for "Email"
        Then "Email" should be copied to clipboard