@UI
Feature: Monthy view
    Background:
        Given I navigate to the appointments page
        When I go to 10 jul 2023
        When I click on monthy view

    Scenario: navigation
        When I click on visit group
        Then calendar should highlight current date
    Scenario: toggle effect
        When I click on visit group
        Then title popup show
        When I click out the popup
        Then title popup disappear
    Scenario: search box
        When I click on visit group
        And I type Daniel in search box
        Then the list should show Daniel Nguyen
    Scenario Outline: visit Type
        When I click on visit group
        And I slect "<VisitType>" in visitt type dropdown
        Then the list should show "<VisitType>" appointments
        Examples:
            | VisitType       |
            | Follow up visit |
            | Initial visit   |
            | DME supplies    |
    Scenario Outline: status filter
        When I click on visit group
        And I slect "<status>" in status dropdown
        Then the list should show "<status>" appointments
        Examples:
            | status           |
            | Check-out        |
            | Billing pending  |
            | Billing Complete |

