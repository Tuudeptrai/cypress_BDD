/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I type a companyid {string}", (companyId) => {
  if (companyId) {
    cy.get("#mat-input-0").type(companyId); // Assuming "#mat-input-0" is the locator for the company id input field
  }
});

When("I type a username {string}", (username) => {
  if (username) {
    cy.get("#mat-input-1").type(username); // Assuming "#mat-input-1" is the locator for the username input field
  }
});

When("I type a password {string}", (password) => {
  if (password) {
    cy.get("#mat-input-2").type(password); // Assuming "#mat-input-2" is the locator for the password input field
  }
});

When("I click on the login button", () => {
  cy.get("app-one-button > .mat-focus-indicator").click();
  cy.wait(5000); // Assuming "app-one-button > .mat-focus-indicator" is the locator for the login button
});

Then("I should be presented with an error {string}", (errorMessage) => {
  cy.contains(errorMessage).should("be.visible");// Assuming the error message is displayed on the page
});

When("I go to aptient page", () => {
    cy.visit("https://billings.dev.appsensesolutions.com/patients/patient-list");
  });
  
  When("I go back to appointment page", () => {
    cy.visit("https://billings.dev.appsensesolutions.com/appointments");
  });
Then("turn to appointments page", () => {
    cy.contains("Appointments").should("be.visible");
});
Then("I not return page to login", () => {
    cy.contains("Appointments").should("be.visible");
});
