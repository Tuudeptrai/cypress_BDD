/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { SecureToken } from "../UI/Base_Steps";

// Background: Get token
Given('get token', () => {
  // Implement code to obtain the token
});

// Scenario: Verify GET visit detail with beartoken and correct docid
When('I send a GET request with correct docid', () => {
  const url = `https://officemanagement-api.dev.appsensesolutions.com/api/visits/l8pH1GMhrmKxbFpQxqxU/eligibility-authorization`;
  cy.request({
    method: 'GET',
    url,
    headers: {
      Authorization: 'Bearer '+SecureToken,
     },
  }).as('getResponse');
});

Then('the response status code should be 200', () => {
  cy.get('@getResponse').its('status').should('equal', 200);
});

Then('the response should contain eligibility-authorization information', () => {
  cy.get('@getResponse').then((response) => {
    const data = response.body.data;
    cy.log(response.body.data);
    expect(data).to.have.property('eligibility');
    expect(data).to.have.property('authorization');
    // Additional assertions can be added for specific properties and values within the response data
  });
});

// Scenario: Verify GET visit detail with beartoken and incorrect docid
When('I send a GET request with uncorrect docid', () => {
  const url = `https://officemanagement-api.dev.appsensesolutions.com/api/visits/l8pH1GMhrmKxbFpQxqOO/eligibility-authorization`;
  cy.request({
    method: 'GET',
    url,
    headers: {
      Authorization: 'Bearer '+SecureToken, // Replace with the actual token
    },
    failOnStatusCode: false, // Allow non-200 status codes
  }).as('getResponse');
});

Then('the response status code should be 400', () => {
  cy.get('@getResponse').its('status').should('equal', 400);
});

When('I make an eligibility API request', () => {
  // Construct the request payload
  const requestPayload = {
    "visitId": "visit1",
    "insuranceCompanies": [
        {
            "name": "Humana",
            "id": "61101",
            "patientInsuranceId": "H69464343",
            "sequence": 1
        }
    ],
    "provider": {
        "name": "PHAM DANH",
        "nationalProviderId": "1114535333"
    },
    "patient": {
        "patientId": "patient1",
        "firstName": "JOSEPH",
        "lastName": "LILES",
        "middleName": "M",
        "dateOfBirth": "09/10/1982",
        "serviceDate": "07/03/2023"
    },
    "serviceTypes": [
        "A3",
        "84",
        "1"
    ],
    "testing": false
}
;

  // Make the API request with the bearer token
  cy.request({
    method: 'POST',
    url: 'https://minions-billing-api-kh6ymtl6gq-uc.a.run.app/api/v1/EDI/eligibility',
    body: requestPayload,
    headers: {
      Authorization: `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjU0NWUyNDZjNTEwNmExMGQ2MzFiMTA0M2E3MWJiNTllNWJhMGM5NGQiLCJ0eXAiOiJKV1QifQ.eyJyb2xlIjpbIkFkbWluIiwiU2NoZWR1bGVyIl0sImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9yZWFkdG9tZS0zMTU0MTUiLCJhdWQiOiJyZWFkdG9tZS0zMTU0MTUiLCJhdXRoX3RpbWUiOjE2ODY1ODI3NTIsInVzZXJfaWQiOiIxRWZWRW9nenlOVkVYTmZqaXRlYlZTSWkxdjQyIiwic3ViIjoiMUVmVkVvZ3p5TlZFWE5maml0ZWJWU0lpMXY0MiIsImlhdCI6MTY4NjU4Mjc1MiwiZXhwIjoxNjg2NTg2MzUyLCJlbWFpbCI6ImJlbnphY2guZmlyZUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJiZW56YWNoLmZpcmVAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQiLCJ0ZW5hbnQiOiJXb3VuZHNEeW5hbWljLXJuNGJ0In19.b9NGR1uzO84PVrUJRp-1tpuVDlTGzkJz5T69oPe4OFHMLGStVlZ_Q8x9JhHzpsJ4AvlyZ_b9D_LRgtK-EJbyPqAl3jc6HnT-aZX4q2ipMv6X32wXdD29YvQudsIE7YAtSK5btJ5hNeFrsAvBgE-CdHsD1F0ZcZNMwEGRWV9InLuu_DKVkDOWYJcERfFgaR3HiU2zUcPoH3MtJijTwuGQeG8Sr67-G421_I2rezywShK9OhWXtdqVWjIrYoEBpaEBrZO3fT9ZiiKZfpiPR7LMy45DGaZFfXzLTaIBOOVegHVQvBbJVID4oKyvY8VCKhvcfAZPS9Jxg1M0WDWPlWrrwg`,
    },
  }).as('eligibilityResponse');
});

Then('I should receive the eligibility response', () => {
  // Access the stored response and assert its content
  cy.get('@eligibilityResponse').then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.data.eligibilityStatus).to.eq('ACTIVE_COVERAGE');

        // Assert the number of benefits is 4
        expect(response.body.data.benefits).to.have.length(4);

        
        // Assert the rejectReason is null
        expect(response.body.data.rejectReason).to.be.null;

        // You can also log the response for further inspection (optional)
        cy.log(response.body);
  });
});



When('I make an GET eligibility API request', () => {
  // Construct the request URL
  const url = 'https://minions-billing-api-kh6ymtl6gq-uc.a.run.app/api/v1/EDI/eligibility?visitId=visit1';

  // Make the API request with the bearer token
  cy.request({
    method: 'GET',
    url: url,
    headers: {
      Authorization: `Bearer `+ SecureToken,
    },
  }).as('eligibilityResponse');
});

Then('I should receive the No of check and last time check response', () => {
  cy.get('@eligibilityResponse').then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.data).to.have.property('numberOfInsuranceCheck');
    expect(response.body.data).to.have.property('lastCreatedAt');
    expect(response.body.message).to.be.null;
  });
});



