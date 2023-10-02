@UI
Feature: document filter
    Background:
        Given I navigate to the document page
        When I click filter button

    Scenario: Verify toggle of document type

        When the document type box can be expanded

    Scenario: Verify toggle of Day update

        When the Day update box can be expanded

    Scenario Outline: Verify Document type check box

        When I click on "<type>" checkbox
        And I click Apply button
        Then The table shows record for the "<type>"
        Examples:
            | type            |
            | Driver License  |
            | HIPAA           |
            | Insurance Card  |
            | Intake Forms    |
            | Financial Forms |

    Scenario: Verify Day update filter

        When I click expanded button
        And I type start day "04/09/2023"
        And I type end day "04/09/2023"
        And I click Apply button
        Then Table shows only record for Sep 04
