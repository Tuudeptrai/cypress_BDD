/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-xpath";
import { SecureToken } from "../UI/Base_Steps";

When("POST authoriztion", (docId) => {
  const requestBody = {
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
}


  cy.request({
    method: "POST",
    url: `https://minions-billing-api-kh6ymtl6gq-uc.a.run.app/api/v1/EDI/authorization`,
    body: requestBody,
    failOnStatusCode: false,
    headers: {
      Authorization: "Bearer " + SecureToken,
      "Content-Type": "application/json",
    },
  }).as("putAppointmentDuration");
});
Then("should return status code should be 200 and the body is the id", () => {
    cy.get("@putAppointmentDuration").its("status").should("eq", 200);
  });