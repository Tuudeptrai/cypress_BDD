/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { SecureToken } from "../UI/Base_Steps";


When(
  'GET detail with docid "zLdV7xVAe55Pi7ZyIipE" should return status code should be 200',
  () => {
    cy.request({
      method: "GET",
      url: `https://officemanagement-api.dev.appsensesolutions.com/api/visits/zLdV7xVAe55Pi7ZyIipE/details`,
      headers: {
        Authorization: "Bearer " + SecureToken,
      },
      failOnStatusCode: false,
    }).as("getVisitDetails");
    cy.get("@getVisitDetails").its("status").should("eq", 200);
  }
);

When("should return detail information", () => {
  // Access the response using cy.get() and assert the expected data
  cy.request({
    method: "GET",
    url: `https://officemanagement-api.dev.appsensesolutions.com/api/visits/zLdV7xVAe55Pi7ZyIipE/details`,
    headers: {
      Authorization: "Bearer " + SecureToken,
    },
    failOnStatusCode: false,
  }).then((response) => {
    expect(response.status).to.equal(200); 
    expect(response.body.data.patient).to.have.property("firstName");
    expect(response.body.data.patient).to.have.property("firstNameKey");
    expect(response.body.data.patient).to.have.property("lastName");
    expect(response.body.data.patient).to.have.property("lastNameKey");
    expect(response.body.data.patient).to.have.property("middleInitial");
    expect(response.body.data.patient).to.have.property("address");
   
    expect(response.body.data.patient).to.have.property("gender");
    expect(response.body.data.patient).to.have.property("dob");
    expect(response.body.data.patient).to.have.property("ssn");
    expect(response.body.data.patient).to.have.property("email")
    expect(response.body.data.patient).to.have.property("homePhone");
    expect(response.body.data.patient).to.have.property("maritalStatus");
    expect(response.body.data.patient).to.have.property("employer");
  });
});
When(
  'GET detail with docid "zLdV7xVAe55Pi7ZyIABC" should return status code should be 404',
  () => {
    cy.request({
      method: "GET",
      url: "https://officemanagement-api.dev.appsensesolutions.com/api/visits/zLdV7xVAe55Pi7ZyIABC/details",
      headers: {
        Authorization: "Bearer " + SecureToken,
      },
      failOnStatusCode: false, // Prevent Cypress from failing the test for non-2xx responses
    }).then((response) => {
      expect(response.status).to.equal(404);
      // Add additional assertions for the response body if needed
    });
  }
);