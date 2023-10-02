/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { SecureToken } from "../UI/Base_Steps";



When("PUT the corect {string} with body {string}", (docid, status) => {
    cy.request({
      method: "PUT",
      url: `https://officemanagement-api.dev.appsensesolutions.com/api/visits/`+ docid +`/status`,
      headers: {
        Authorization: "Bearer " + SecureToken,
      },
      body: {
        "status": status
      },
       failOnStatusCode: false,
    }).as("putRequest");
  });
  
  Then("the response should have status {int}", (code) => {
    cy.get("@putRequest").then((response) => {
      expect(response.status).to.equal(code);
    });
  });