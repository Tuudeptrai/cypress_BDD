/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-xpath";
import { SecureToken } from "../../UI/Base_Steps";

When("PUT visit appointment duration with docid {string} with full databody", (docId) => {
  const requestBody = {
    visitDate: "2023-06-25T10:26:05.639Z",
    visitLength: 2,
  };

  cy.request({
    method: "PUT",
    url: `https://officemanagement-api.dev.appsensesolutions.com/api/visits/mgsi5m3DBzuuACgqEXJz/time`,
    body: requestBody,
    failOnStatusCode: false,
    headers: {
      Authorization: "Bearer " + SecureToken,
      "Content-Type": "application/json",
    },
  }).as("putAppointmentDuration");
});

When("PUT visit appointment duration with uncorect docid {string} with full databody", (docId) => {
  const requestBody = {
    visitDate: "2023-06-26T10:26:05.639Z",
    visitLength: 0,
  };

  cy.request({
    method: "PUT",
    url: `https://officemanagement-api.dev.appsensesolutions.com/api/visits/mgsi5m3DBzuuACgqEX99/time`,
    body: requestBody,
    failOnStatusCode: false,
    headers: {
      Authorization: "Bearer " + SecureToken,
      "Content-Type": "application/json",
    },
  }).as("putAppointmentDuration");
});

When("PUT visit appointment duration with docid {string} with missing visitDate", (docId) => {
  const requestBody = {
    visitLength: 0,
  };

  cy.request({
    method: "PUT",
    url: `https://officemanagement-api.dev.appsensesolutions.com/api/visits/mgsi5m3DBzuuACgqEXJz/time`,
    body: requestBody,
    failOnStatusCode: false,
    headers: {
      Authorization: "Bearer " + SecureToken,
      "Content-Type": "application/json",
    },
  }).as("putAppointmentDuration");
});

When("PUT visit appointment duration with docid {string} with uncorect visitLength", (docId) => {
  const requestBody = {
    visitDate: "2023-06-26T10:26:05.639Z",
  };

  cy.request({
    method: "PUT",
    url: `https://officemanagement-api.dev.appsensesolutions.com/api/visits/mgsi5m3DBzuuACgqEXJz/time`,
    body: requestBody,
    failOnStatusCode: false,
    headers: {
      Authorization: "Bearer " + SecureToken,
      "Content-Type": "application/json",
    },
  }).as("putAppointmentDuration");
});

Then("should return status code should be {int}", (statusCode) => {
  cy.get("@putAppointmentDuration").its("status").should("eq", statusCode);
});
