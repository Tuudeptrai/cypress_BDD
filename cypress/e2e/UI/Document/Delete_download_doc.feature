Feature: document download and delete
    Background:
        Given I navigate to the document page

        
    Scenario: Verify download
        When click on download button
        Then the document should open in a new tab
    
    Scenario: Verify delete
        When click on delete button
        Then doc is removed from the table
