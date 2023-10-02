
/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { SecureToken } from "../../UI/Base_Steps";

When('POST Authorization', () => {
    // Make the POST request to the authorization endpoint with the payload
    cy.request({
      method: 'POST',
      url: 'https://minions-billing-api-kh6ymtl6gq-uc.a.run.app/api/v1/EDI/authorization',
      body:{
        "visitId": "visit1",
        "insuranceCompany": {
            "name": "Humana",
            "authorizationType": "61101"
        },
        "facility": {
            "name": "Woudynamic",
            "npi": "1114535333"
        },
        "provider": {
            "firstName": "PHAM",
            "lastName": "DANH",
            "npi": "1932426269",
            "taxId": "00909099",
            "contactName": "Danh Pham",
            "contactPhone": "2064654313"
        },
        "patient": {
            "memberId": "H69464343",
            "dateOfBirth": "10/09/1982",
            "firstName": "LILES",
            "lastName": "JOSEPH",
            "relationshipToSubscriber": "self"
        },
        "service": {
            "type": "Medical Care",
            "placeOfService": "Home",
            "serviceFromDate": "30/06/2023",
            "serviceToDate": "01/07/2023",
            "quantity": "",
            "quantityType": ""
        },
        "procedureCodes": [
            {
                "code": "Q4229",
                "type": "CPT/HCPCS",
                "quantity": "1",
                "quantityType": "Units"
            }
        ],
        "diagnosisCodes": [
            {
                "code": "L89154"
            },
            {
                "code": "G8221"
            }
        ]
    },
      headers: {
        Authorization: `Bearer ${SecureToken}`,
      },
    }).as('Response');
  });

  Then('API will return status code should be 200', () => {
    // Assert that the response status code is 200 for the POST Authorization request
    cy.get('@Response').then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  When('POST trigger Authorization Batch', () => {
    // Make the POST request to the trigger Authorization Batch endpoint
    cy.request({
      method: 'POST',
      headers: {
        Authorization: `Bearer ${SecureToken}`,
      },
      url: 'https://ediprocessor-kh6ymtl6gq-uc.a.run.app/api/v1/patients/authorizations',
    }).as('Response');
  });
