/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-xpath";


When("click on download button",()=>{
    cy.get(':nth-child(1) > .col-action > .ng-star-inserted > .mat-button-wrapper > .mat-icon > svg').invoke("removeAttr", "target").click();
});
Then("the document should open in a new tab", () => {
    cy.window().then((win) => {
        cy.stub(win, "open").as("windowOpen");
        
        // Click on the download button that should open the new tab
        cy.get(':nth-child(1) > .col-action > .ng-star-inserted > .mat-button-wrapper > .mat-icon > svg').click();
        
        // Wait for the new tab to open
        cy.get("@windowOpen").should("be.called");
        
        // Switch focus to the new tab
        cy.window().then((newWin) => {
            cy.wrap(newWin).as("newWindow");
        });
        
        // Check the URL of the new tab
        cy.get("@newWindow").should("have.property", "location").and("match", /^https:\/\/billings\.dev\.appsensesolutions\.com\/.*/);
    });
});
When("click on delete button", () => {
    cy.get(':nth-child(1) > .primary-color').invoke("text").as("doc1TextBeforeDelete");

    
    cy.get(':nth-child(1) > .col-action > :nth-child(1) > .mat-button-wrapper > .mat-icon > svg')
      .click();
    cy.get('.btn-delete').click();
    cy.wait(3000);
});

Then("doc is removed from the table", () => {
   
    cy.get("@doc1TextBeforeDelete").then((textBeforeDelete) => {
        cy.get(':nth-child(1) > .primary-color').invoke("text").should((textAfterDelete) => {
            expect(textBeforeDelete).not.to.equal(textAfterDelete);
        });
    });
});