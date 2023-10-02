@UI
Feature: document list search
    Background:
        Given I navigate to the document page

    Scenario: Verify document list with Document ID

        When document list with Document ID
        Then should show the document record 

    Scenario: Verify document list with Document Title

        When document list with Document Title
        Then should show the document record 

    Scenario: Verify document list with Document date
        When document list with Document date
        Then should show the document record with date
    
    Scenario: Verify document list with Document Title and Document date
        When document list with Document Title and Document date
        Then should show the document record