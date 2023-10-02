Feature: Toggle and Verify Patient Information Panel

    Background:
        Given I navigate to the Patient page
        When Clicks on Daniel Nguyen

    Scenario: Verify Patient Demographic Panel
        # When Toggles the Patient Demographic Panel
        Then the following elements should be visible within the Patient Demographic Panel:
            | Element             |
            | Daniel Hoang Nguyen |
            | Patient MRN         |
            | Date of birth       |
            | Gender              |
            | Marital Status      |
            | Employment Status   |
            | Height (cm)         |
            | Weight (kg)         |
            | Allergies           |

    Scenario: Verify Patient Contact Panel
        # When Toggles the Patient Contact Panel
        Then the following elements should be visible within the Patient Contact Panel:
            | Element      |
            | Phone number |
            | Email        |
            | SSN          |
            | Zip Code     |
            | State        |
            | City         |
            | Address      |

    # Scenario: Verify Emergency Contact Panel
    #     When Toggles the Emergency Contact Panel
    #     Then the following elements should be visible within the Emergency Contact Panel:
    #         | Element      |
    #         | Annie Nguyen |
    #         | Phone number |
    #         | Email        |
    #         | Zip Code     |
    #         | State        |
    #         | City         |
    #         | Address      |

    # Scenario: Copy SSN to clipboard
    #     When the user clicks the Copy button for "SSN"
    #     Then the "SSN" should be copied to the clipboard

    Scenario: Copy Phone number of patient to clipboard
        When the user clicks the Copy button for "Phone number of patient"
        Then the "Phone number of patient" should be copied to the clipboard

    Scenario: Copy Email of patient to clipboard
        When the user clicks the Copy button for "Email of patient"
        Then the "Email of patient" should be copied to the clipboard

    # Scenario: Copy Phone number of Emergency to clipboard
    #     When the user clicks the Copy button for "Phone number of Emergency"
    #     Then the "Phone number of Emergency" should be copied to the clipboard

    # Scenario: Copy Email of Emergency to clipboard
    #     When the user clicks the Copy button for "Email of Emergency"
    #     Then the "Email of Emergency" should be copied to the clipboard
