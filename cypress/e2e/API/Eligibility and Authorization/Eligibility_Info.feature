Feature: Verify eligibility API for a patient with a bearer token
Background: Get tocken
        Given get tocken

Scenario: Valid payload with bearer token
 
  When I make a POST request to the eligibility API with the valid payload and bearer token
  Then the body status code should be 200
  And the response should contain "ACTIVE_COVERAGE" for "eligibilityStatus"

Scenario: Invalid date of birth with bearer token
 
  When I make a POST request to the eligibility API with the invalid date of birth payload and bearer token
  Then the body status code should be 200
  And the response should contain "INVALID_REQUEST" for "eligibilityStatus"
  And the response should contain "PATIENT_BIRTH_DATE_DOES_NOT_MATCH" for "rejectReason"

Scenario: Invalid national id with bearer token
 
  When I make a POST request to the eligibility API with the invalid national ID payload and bearer token
  Then the body status code should be 200
  And the response should contain "INVALID_REQUEST" for "eligibilityStatus"
  And the response should contain "REQUIRED_APPLICATION_DATA_MISSING" for "rejectReason"

Scenario: Invalid insurance company id with bearer token
 
  When I make a POST request to the eligibility API with the invalid insurance company ID payload and bearer token
  Then the body status code should be 500
