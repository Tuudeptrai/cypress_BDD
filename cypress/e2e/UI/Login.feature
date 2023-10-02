@UI
Feature: Login Page

    Background: homepage navigate
        Given I navigate to the login page

    Scenario Outline: validate invalid login credentials
        When I type a companyid "<companyId>"
        And I type a username "<username>"
        And I type a password "<password>"
        And I click on the login button
        Then I should be presented with an error "<message>"

        Examples:
            | username               | password | companyId  | message                                            |
            | benzach.fire@gmail.com | new2pass | 1514516111 | Invalid username, password, or company Id.         |
            | benzach@gmail.com      | new2pass | 1514516058 | Invalid username, password, or company Id.         |
            | benzach.fire@gmail.com | new2paWW | 1514516058 | Invalid username, password, or company Id.         |
            | benzach.fire@gmail.com | new2pass |            | CompanyID cannot be empty                          |
            | benzach.fire@gmail.com |          | 1514516058 | Minimum is 8 characters with at least 1 uppercase. |
            |                        | new2pass | 1514516058 | Username cannot be empty                           |

    Scenario Outline: validate valid login credentials
        When I type a companyid "<companyId>"
        And I type a username "<username>"
        And I type a password "<password>"
        And I click on the login button
        Then turn to appointments page
        Examples:
            | username               | password | companyId  |
            | benzach.fire@gmail.com | new2pass | 1514516058 |

    Scenario Outline: validate valid login credentials remerber me
        When I type a companyid "<companyId>"
        And I type a username "<username>"
        And I type a password "<password>"
        And I click on the login button
        And I go to aptient page
        And I go back to appointment page
        Then I not return page to login

        Examples:
            | username               | password | companyId  |
            | benzach.fire@gmail.com | new2pass | 1514516058 |