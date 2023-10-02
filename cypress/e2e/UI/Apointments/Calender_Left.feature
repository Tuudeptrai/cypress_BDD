@UI
Feature: Calendar Format and Navigation

    Background: homepage navigate
        Given I navigate to the appointments page

    Scenario: Select day format
        
        When I select the Day date format
        Then the large calendar on the right should display a single column and spanning ninety six rows

    Scenario: Select week format
        
        When I select the Week date format
        Then the large calendar on the right should display seven columns from Monday to Sunday and ninety six rows

    Scenario: Select month format
        
        When I select the Month date format
        Then the large calendar on the right should display seven columns from Monday to Sunday and six rows for dates

    Scenario: Click "Next" button 
         
        When I click the Next button in the small calendar on the left
        Then the large calendar on the right should switch to the next month and the month text should change accordingly

    Scenario: Click "Prev" button
        
        When I click the Prev button in the small calendar on the left
        Then the large calendar on the right should switch to the previous month and the month text should change accordingly

    Scenario: Click "Today link"
        When I click the Today link in the small calendar on the left
        Then the large calendar on the right should switch to today date

    Scenario: Click a date in month format
        When with the Month date format selected
        When I click a specific date in the small calendar on the left
        Then the date in the large calendar on the right should change accordingly

    Scenario: Click a date in week format
        When  with the Week date format selected
        When I click a specific date in the small calendar on the left
        Then the date in the large calendar on the right should change accordingly, and the large calendar should navigate to the corresponding week

    Scenario: Click a date in day format
        When  with the Day date format selected
        When I click a specific date in the small calendar on the left
        Then the date in the large calendar on the right should change accordingly, and the large calendar should navigate to the corresponding day

