Feature: Toggle and Verify Patient Insurance Panel

    Background:
        Given I navigate to the Patient page
        When Clicks on Austin Powers
        And Click on Insurance menu tab

    Scenario: Verify Insurance panel
        # When Toggles Insurance panel
        Then the following elements should be visible within Insurance panel:
            | Element                                                        |
            | Medicare Oklahoma                                              |
            | Primary                                                        |
            | Ins. Company ID:                                               |
            | Patient Ins. ID:                                               |
            | Signature Date:                                                |
            | Insurance Type:                                                |
            | Policy Holder:                                                 |
            | Group No:                                                      |
            | Plan Name:                                                     |
            | Deductible:                                                    |
            | Copay:                                                         |
            | Workman’s Comp                                                 |
            | This insurance is covered by the workman’s comp of the patient |
            | Company Name:                                                  |
            | Employer Name:                                                 |
            | Contact Name:                                                  |
            | Phone number:                                                  |

    # Scenario: Copy Policy Holder to clipboard
    #     When the user clicks the copy button for "Policy Holder"
    #     Then the "Policy Holder" should be copied to clipboard

    Scenario: Copy Patient Ins. ID to clipboard
        When the user clicks the copy button for "Patient Ins. ID"
        Then the "Patient Ins. ID" should be copied to clipboard

    Scenario: Copy Phone number to clipboard
        When the user clicks the copy button for "Phone number"
        Then the "Phone number" should be copied to clipboard
