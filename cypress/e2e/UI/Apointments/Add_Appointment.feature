@UI
Feature: Add Appointment
    Background:
        Given I navigate to the appointments page
        When I select the Month date format

    Scenario Outline: Add via add appointment button
        When I click on the appointment button
        And I select a patient
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
        When I hit the create button
        Then the the alert show Create new appointment successfully!

        Examples:
            | OfficeName   | Provider      | ServiceType       | VisitForm     | VisitReason       | VisitStatus              | VisitDate  | HourStart | MinuteStart | HourEnd | MinuteEnd | Note                         |
            | 23123123123  | John Doe      | Medical Care      | In Office     | Follow up visit   | No call                  | 10/08/2023 | 00        | 00          | 00      | 15        | This is a test appointment1  |
            | 123          | Tom bob       | Consultation      | In Office     | DME supplies      | Billing Complete         | 20/08/2023 | 02        | 00          | 02      | 15        | Lorem ipsum dolor sit 1      |
            | 23123123123  | Jane Doe1     | Diagnostic X-Ray  | Virtual Visit | Consult           | Intake with clinician    | 25/08/2023 | 03        | 00          | 03      | 15        | Test appointment             |
            | 123          | Joe provider1 | Radiation Therapy | In Office     | Medication refill | Physician with patient   | 11/08/2023 | 02        | 00          | 02      | 15        | Lorem ipsum dolor sit2       |
            | 23123123123  | Tom bob       | Anesthesia        | Virtual Visit | DME supplies      | Documentation incomplete | 21/08/2023 | 03        | 00          | 03      | 15        | This is a test appointment 2 |
            | asdfasdfasdf | Tom bob       | Other Medical     | In Office     | Consult           | Documentation complete   | 22/08/2023 | 04        | 00          | 04      | 15        | Random note  3               |


