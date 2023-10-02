/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { SecureToken } from "../../UI/Base_Steps";
let response;
When('Save authorization', () => {
  const saveUrl = 'https://officemanagement-api.dev.appsensesolutions.com/api/visits/LWuynRDJwJSeZBLnAeXO/authorization';
  const payload = {
    "insuranceId": "121212",
    "authorizationNumber": "string",
    "icDs": [
      {
        "code": "11111",
        "actionCode": "A1",
        "actionDescription": "11111"
      }
    ],
    "cpTs": [
      {
        "code": "22222",
        "actionCode": "A1",
        "actionDescription": "22222",
        "type": "string",
        "quantityType": "string",
        "quantity": 0
      }
    ]
  };

  cy.request({
    method: "PATCH",
    url: saveUrl,
    body: payload,
    failOnStatusCode: false,
    headers: {
      Authorization: "Bearer " + SecureToken,
      "Content-Type": "application/json",
    },
  }).then((res) => {
    response = res;
    cy.wrap(response).as('response');
  });
});

When('Get authorization', () => {
  const getUrl = 'https://officemanagement-api.dev.appsensesolutions.com/api/visits/LWuynRDJwJSeZBLnAeXO/insurance-check';

  cy.request({
    method: "GET",
    url: getUrl,
    failOnStatusCode: false,
    headers: {
      Authorization: "Bearer " + SecureToken,
      "Content-Type": "application/json",
    },
  }).then((res) => {
    response = res;
    cy.wrap(response).as('response');
  });
});
When('Get authorization with wrong visit ID', () => {
  const getUrl = 'https://officemanagement-api.dev.appsensesolutions.com/api/visits/LWuynRDJwJSeZBLnAeXX/insurance-check';

  cy.request({
    method: "GET",
    url: getUrl,
    failOnStatusCode: false,
    headers: {
      Authorization: "Bearer " + SecureToken,
      "Content-Type": "application/json",
    },
  }).then((res) => {
    response = res;
    cy.wrap(response).as('response');
  });
});

Then('Save authorization should return code should be 200', () => {
  cy.log('Checking response content:', JSON.stringify(response, null, 2));
    cy.get('@response').its('body.statusCode').should('eq', 200);
});
Then('Get authorization should return code should be 200', () => {
  cy.log('Checking response content:', JSON.stringify(response, null, 2));
    cy.get('@response').its('body.statusCode').should('eq', 200);
});
Then('should return code should be 400', () => {
  cy.log('Checking response content:', JSON.stringify(response, null, 2));
    cy.get('@response').its('body.StatusCode').should('eq', 400);
});
