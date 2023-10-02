/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-xpath";


When("document list with Document ID", () => {
    cy.get("#mat-input-0").type("D0000006");
  cy.wait(3000);
});
When("document list with Document Title", () => {
    cy.get("#mat-input-0").type("6");
  cy.wait(3000);
});
When("document list with Document Title and Document date", () => {
    cy.get("#mat-input-0").type("6 04");
  cy.wait(3000);
});
When("document list with Document date", () => {
    cy.get("#mat-input-0").type("04/09");
  cy.wait(3000);
});

Then("should show the document record", () => {
    cy.get(".mat-row:nth-child(1) > .primary-color")
      .invoke("text")
      .then((doc) => {
        expect(doc.trim()).to.equal("D0000006");
      });
  });
Then("should show the document record with date", () => {
    cy.get(".mat-row:nth-child(1) > .cdk-column-MES-320")
      .invoke("text")
      .then((doc) => {
        expect(doc.trim()).to.equal("09/04/2023");
      });
  })