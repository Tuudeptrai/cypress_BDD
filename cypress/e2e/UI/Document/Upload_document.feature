@UI
Feature: Upload document
    Background:
        Given I navigate to the document page

    Scenario: Upload file via upload document button
        When I click on the upload document button
        And I select document type
        And I upload a file
        And I hit Upload button
        Then The message "Upload documents successfully!" show
