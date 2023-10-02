/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


When("I click on monthy view",()=>{
    cy.get('#mat-button-toggle-3-button').click();
})
When("I click on visit group",()=>{
  cy.get('tr:nth-child(3) > .fc-day:nth-child(5) .event-provider').click();
})
When("I click out the popup",()=>{
    cy.get('.close-button').click();
})
When("I type Daniel in search box",()=>{
    cy.get('#mat-input-4').type("Daniel");
})
When("calendar should highlight current date", () => {
    let found = false;
  
    for (let i = 2; i <= 8; i++) {
      cy.get(`:nth-child(${i}) > .item--bot`).invoke('css', 'background-color').then((color) => {
        if (color === 'rgb(17, 87, 200)') {
          found = true;
          expect(color).to.equal('rgb(17, 87, 200)');
        }
      });
  
      if (found) {
        break; // Exit the loop if the condition is satisfied
      }
    }
  });
  
When("the list should show Daniel Nguyen",()=>{
    cy.contains("Daniel Nguyen").should("exist");
})
When("I slect {string} in visitt type dropdown",(VisitType)=>{
    cy.get('#mat-input-5').click();
    cy.contains(VisitType).scrollIntoView().click({ force: true, multiple: true });
      
})
When("I slect {string} in status dropdown",(status)=>{
    cy.get('#mat-input-6').click();
    cy.contains(status).scrollIntoView().click({ force: true, multiple: true });
      
})

Then("the list should show {string} appointments",(option)=>{
    cy.contains(option).should("exist");
})

Then("title popup show", () => {
    cy.get('.title').should('exist');
  });
  
  Then("title popup disappear", () => {
    cy.get('.title').should('not.exist');
  });
  