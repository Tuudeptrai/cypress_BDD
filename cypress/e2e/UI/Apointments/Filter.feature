@UI
Feature: Filter Popup
    Background: appointments page navigate
        Given I navigate to the appointments page
        When I go to 10 jul 2023
        When click on filter button

    Scenario: Filter button
        Then Filter popup open
    Scenario: Filter popup - close button
        And click on popup close button
        Then Filter popup should be closed
    Scenario: Filter popup - Provider collapse button
        When click on Provider collapse button
        Then Provider box is toggle
    Scenario: Filter popup - Visit Type collapse button
        When click on Visit Type collapse button
        Then Visit Type box is toggle
    Scenario: Filter popup - Visit Status collapse button
        When click on Visit Status collapse button
        Then Visit Status box is toggle
    Scenario: Filter popup - Visit Form collapse button
        When click on Visit Form collapse button
        Then Visit Form box is toggle
    Scenario: Filter popup - Date collapse button
        When click on Date collapse button
        Then Date box is toggle
    Scenario: Filter popup - Reset all button
        Then Filter popup open
        When click on Date collapse button
        When select date in from datepicker
        And select date in To datepicker
        And click apply button
        Then the customer box which showed on date range should change accordingly
        When click on filter button
        When click on Reset all button
        Then calender will reset



    Scenario: Filter popup - Select date range
        Then Filter popup open
        When click on Date collapse button
        When select date in from datepicker
        And select date in To datepicker
        And click apply button
        Then the customer box which showed on date range should change accordingly
    # #-------------------------------------------------------------------------//

    Scenario Outline: Select one provider
        When I click on Provider search box
        When select one "<provider>" in provider list option
        When click apply button
        Then the "<provider>" appointment block which showed on the calendar should change accordingly
        Examples:
            | provider     |
            | John Doe     |
            | Tom bob      |
            | Jane Doe1    |
            | Jeb Dee      |
       Scenario Outline: unSelect provider
        When I click on Provider search box
        When unselect all provider in provider list option
        When click apply button
        Then the appointment block which provider showed on the calendar should change accordingly
    ##--------------------------------------------------------------------------------------//
    Scenario Outline: Select one Visit type
        When select one "<Visittype>" in Visit type list option
        When click apply button
        Then the "<Visittype>" appointment block which visit type showed on the calendar should change accordingly
        Examples:
            | Visittype         |
            | Consult           |
            | DME supplies      |
            | Follow up visit   |
            | Initial visit     |
            | Medication refill |
    #//---------------------------------------------------------------------------------------//

    Scenario Outline: Select one Visit status
        When click on Visit Status collapse button
        When select one "<Visitstatus>" in Visit status list option
        When click apply button
        Then the "<Visitstatus>" appointment block which Visit status showed on the calendar should change accordingly
        Examples:
            | Visitstatus            |
            | Ready for billing      |
            | Documentation complete |
            | Billing pending        |
            | Billing Complete       |
            | Check-out              |
            | Check in               |
    #//----------------------------------------------------------------------------------------//
    Scenario Outline: Select one Visit form
        When click on Visit Form collapse button
        When select one "<Visitsform>" in Visit form list option
        When click apply button
        Then the "<Visitsform>" appointment block which Visit form showed on the calendar should change accordingly
        Examples:
            | Visitsform    |
            | In Office     |
            | Virtual Visit |