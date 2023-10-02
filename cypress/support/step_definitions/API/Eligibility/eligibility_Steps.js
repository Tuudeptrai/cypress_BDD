/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { SecureToken } from "../../UI/Base_Steps";

// Constants for URL and payloads
const apiUrl =
  "https://minions-billing-api-kh6ymtl6gq-uc.a.run.app/api/v1/EDI/eligibility";

const validPayload = {
  visitId: "visit1",
  insuranceCompanies: [
    {
      name: "Humana",
      id: "61101",
      patientInsuranceId: "H69464343",
      sequence: 1,
    },
  ],
  provider: {
    name: "PHAM DANH",
    nationalProviderId: "1114535333",
  },
  patient: {
    patientId: "patient1",
    firstName: "JOSEPH",
    lastName: "LILES",
    middleName: "M",
    dateOfBirth: "09/10/1982",
    serviceDate: "07/03/2023",
  },
  serviceTypes: ["A3", "84", "1"],
  testing: false,
};

const invalidDobPayload = {
  visitId: "visit1",
  insuranceCompanies: [
    {
      name: "Humana",
      id: "61101",
      patientInsuranceId: "H69464343",
      sequence: 1,
    },
  ],
  provider: {
    name: "PHAM DANH",
    nationalProviderId: "1114535333",
  },
  patient: {
    patientId: "patient1",
    firstName: "JOSEPH",
    lastName: "LILES",
    middleName: "M",
    dateOfBirth: "09/11/1981",
    serviceDate: "07/03/2023",
  },
  serviceTypes: ["A3", "84", "1"],
  testing: false,
};

const invalidNationalIdPayload = {
  visitId: "visit1",
  insuranceCompanies: [
    {
      name: "Humana",
      id: "61101",
      patientInsuranceId: "H69464343",
      sequence: 1,
    },
  ],
  provider: {
    name: "PHAM DANH",
    nationalProviderId: "1114535444",
  },
  patient: {
    patientId: "patient1",
    firstName: "JOSEPH",
    lastName: "LILES",
    middleName: "M",
    dateOfBirth: "09/10/1982",
    serviceDate: "07/03/2023",
  },
  serviceTypes: ["A3", "84", "1"],
  testing: false,
};

const invalidInsuranceCompanyIdPayload = {
  visitId: "visit1",
  insuranceCompanies: [
    {
      name: "Humana",
      id: "61102",
      patientInsuranceId: "H69464343",
      sequence: 1,
    },
  ],
  provider: {
    name: "PHAM DANH",
    nationalProviderId: "1114535333",
  },
  patient: {
    patientId: "patient1",
    firstName: "JOSEPH",
    lastName: "LILES",
    middleName: "M",
    dateOfBirth: "09/10/1982",
    serviceDate: "07/03/2023",
  },
  serviceTypes: ["A3", "84", "1"],
  testing: false,
};

When(
  "I make a POST request to the eligibility API with the valid payload and bearer token",
  () => {
    cy.request({
      method: "POST",
      url: apiUrl,
      body: validPayload,
      headers: {
        Authorization: `Bearer ${SecureToken}`,
      },
    }).as("response");
  }
);
When(
  "I make a POST request to the eligibility API with the invalid date of birth payload and bearer token",
  () => {
    cy.request({
      method: "POST",
      url: apiUrl,
      body: invalidDobPayload,
      headers: {
        Authorization: `Bearer ${SecureToken}`,
      },
    }).as("response");
  }
);
When(
  "I make a POST request to the eligibility API with the invalid national ID payload and bearer token",
  () => {
    cy.request({
      method: "POST",
      url: apiUrl,
      body: invalidNationalIdPayload,
      headers: {
        Authorization: `Bearer ${SecureToken}`,
      },
    }).as("response");
  }
);
When(
  "I make a POST request to the eligibility API with the invalid insurance company ID payload and bearer token",
  () => {
    cy.request({
      method: "POST",
      url: apiUrl,
      body: invalidInsuranceCompanyIdPayload,
      failOnStatusCode: false,
      headers: {
        Authorization: `Bearer ${SecureToken}`,
      },
    }).as("response");
  }
);

// Define similar step definitions for the other scenarios (invalid date of birth, invalid national id, and invalid insurance company id) with the corresponding payloads.

Then("the body status code should be {int}", (statusCode) => {
  cy.get("@response").its("status").should("eq", statusCode);
});

Then(
  "the response should contain {string} for {string}",
  (expectedValue, field) => {
    cy.get("@response")
      .its("body.data")
      .should("have.property", field)
      .and("eq", expectedValue);
  }
);
