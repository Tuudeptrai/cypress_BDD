/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-xpath";

When("I click filter button", () => {
  cy.get(`.filter-btn`).click();
});
When("the document type box can be expanded", () => {
  cy.get(`cdk-accordion-item:nth-child(1) .header > .ng-star-inserted`).click();

  // Wait for the element to become invisible
  cy.wait(3000);

  // Verify that the element is not visible
  cy.get("#mat-checkbox-2 .typo-body-7").should("not.be.visible");

  cy.get(`cdk-accordion-item:nth-child(1) .header > .ng-star-inserted`).click();

  // Wait for the element to become visible again
  cy.wait(2000);

  // Verify that the element is now visible
  cy.get("#mat-checkbox-2 .typo-body-7").should("be.visible");
});
When("the Day update box can be expanded", () => {
  cy.get(`cdk-accordion-item:nth-child(3) .header > .ng-star-inserted`).click();
  // Wait for the element to become visible 
  cy.wait(2000);

  // Verify that the element is now visible
  cy.get("div:nth-child(1) > .typo-body-6").should("be.visible");

  cy.get(`cdk-accordion-item:nth-child(3) .header > .ng-star-inserted`).click();

  // Wait for the element to become invisible
  cy.wait(3000);

  // Verify that the element is not visible again
  cy.get("div:nth-child(1) > .typo-body-6").should("not.be.visible");
});
When("I click on {string} checkbox", (type) => {
    cy.xpath('.//*[contains(text(),"'+type+'")]').last().click({ force: true});
});

When("I click expanded button", () => {
    cy.get(`cdk-accordion-item:nth-child(3) .header > .ng-star-inserted`).click();
});
When("I type start day {string}", (date) => {
    cy.get(`#startpicker-input`).type(date);
});
When("I type end day {string}", (date) => {
    cy.get(`#endpicker-input`).type(date);
});
When("I click Apply button", () => {
    cy.get('.buttons > .mat-primary').click();
    cy.wait(3000);
});

Then("The table shows record for the {string}", (type) => {
    cy.get('.mat-row:nth-child(1) > .cdk-column-MES-319').should('have.text'," "+ type+" ");
});
Then("Table shows only record for Sep 04", () => {
    cy.get(".mat-column-MES-320:not(:first)").each(($element) => {
        cy.wrap($element).should("contain", "09/04/2023");
    });
});


