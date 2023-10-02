@UI
Feature: Run Eligibility
    Background:
        Given I navigate to the appointments page
        Given get tocken

    Scenario Outline: insurance check eligibility
        When reset data to null
        When I click on the appointment button
        And I select "<Patient>"
        And I select "<OfficeName>" from the "OfficeName" dropdown
        And I select "<Provider>" from the "provider" dropdown
        And I select "<ServiceType>" from the "ServiceType" dropdown
        And I select "<VisitForm>" from the "VisitForm" dropdown
        And I select "<VisitReason>" from the "VisitReason" dropdown
        And I select "<VisitStatus>" from the "VisitStatus" dropdown
        And I select "<VisitDate>" from the date picker
        And I select "<HourStart>" from the HourStart picker
        And I select "<MinuteStart>" from the MinuteStart picker
        And I select "<HourEnd>" from the HourEnd picker
        And I select "<MinuteEnd>" from the MinuteEnd picker
        And I select "<Note>" in the note field
        When I hit the Insurance check button
        Then the the alert show Create new appointment successfully!
        When hit run button
        Then Eligibility Status turn to covered

        Examples:
            | Patient           | OfficeName   | Provider  | ServiceType      | VisitForm | VisitReason     | VisitStatus | VisitDate  | HourStart | MinuteStart | HourEnd | MinuteEnd | Note                        |
            | JOSEPH the Powers | asdfasdfasdf | PHAM DANH | Diagnostic X-Ray | In Office | Follow up visit | No call     | 01/08/2023 | 00        | 00          | 00      | 15        | This is a test appointment1 |


