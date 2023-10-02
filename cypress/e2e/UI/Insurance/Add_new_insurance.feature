Feature: Add new insurance

    Background:
        Given I navigate to the Patient page
        When Go to add insurance page
        
    Scenario: Verify insurance doc has sort A-Z
        Then Insurance doc has sort A-Z

    Scenario: Verify insurance priority has sort A-Z
        Then insurance priority field has sort A-Z

    Scenario: Verify insurance Type field has sort A-Z
        Then insurance Type field has sort A-Z

    Scenario: Verify Signature Date field should be mm/dd/yyyy format
        Then Signature Date field should be mmddyyyy format

    Scenario: Verify add new insurance page
        # When hit add new link
        When select insurance
        When select insurance priority
        When type Patient Ins. ID
        When type Signature Date
        When select insurance Type
        When select Policy Holder
        When Save changes
        Then the message show "Update patient data successfully"
    
    # Scenario: Verify add new insurance with workman's Comp
    #     When hit add new link
    #     When hit workman switch button
    #     When type Company name
    #     When type Employer name
    #     When type Phone number
    #     When select insurance 2
    #     When select insurance priority 2
    #     When type Patient Ins. ID 2
    #     When type Signature Date 2
    #     When select insurance Type 2
    #     When select Policy Holder 2
    #     When Save changes
    #     Then the message show "Update patient data successfully"

     