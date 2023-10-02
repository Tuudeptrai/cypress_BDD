@UI
Feature: edit appointment
    Background: homepage navigate
        Given I navigate to the appointments page
        When I go to 10 jul 2023
        
    Scenario: change patient information
        When click on appointment box then click edit link
        And select patient in search box
        And click save
        Then alert show "Update appointment successfully!"

    # Scenario: change the office name
    #     When click on appointment box then click edit link
    #     And select office name in search box
    #     And click save
    #     Then alert show "Update appointment successfully!"
        
    Scenario: change the provider name
        When click on appointment box then click edit link
        And select provider name in search box
        And click save
        Then alert show "Update appointment successfully!"
        
    Scenario: change the service types name
        When click on appointment box then click edit link
        And select service types in search box
        And click save
        Then alert show "Update appointment successfully!"
        
    Scenario: change the visit form 
        When click on appointment box then click edit link
        And select visit form in dropdown
        And click save
        Then alert show "Update appointment successfully!"
        
    Scenario: change the visit reason
        When click on appointment box then click edit link
        And select visit reason in dropdown
        And click save
        Then alert show "Update appointment successfully!"
        
    # Scenario: change the visit date 
    #     When click on appointment box then click edit link
    #     And select visit date in date picker
    #     And click save
    #     When click on appointment box then click edit link
    #     And reset date
    #     And click save
    Scenario: change the note
        When click on appointment box then click edit link
        And typing some note text on the text field
        And click save
        Then alert show "Update appointment successfully!"