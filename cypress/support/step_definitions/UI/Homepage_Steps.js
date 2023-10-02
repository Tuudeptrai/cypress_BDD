/// <reference types="cypress"/>
import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

import Homepage_PO from "../../page_objects/Homepage_PO";

const homePO = new Homepage_PO();

Given(`I navigate to the appointments page`, () => {
  homePO.navigateToHomePage("appointments");
  cy.get('#mat-input-0').type("1514516058");
  cy.get('#mat-input-1').type("benzach.fire@gmail.com");
  cy.get('#mat-input-2').type("new2pass");
  cy.get('app-one-button > .mat-focus-indicator').click();
  cy.get('.title-content > .ng-star-inserted:nth-child(2)', { timeout: 20000 }).should('be.visible');
  // cy.get('#contact-us').invoke("removeAttr", "target").click();
});
Given(`I navigate to the login page`, () => {
  homePO.navigateToHomePage("login");
  
});
Given(`I navigate to the Patient page`, () => {
  homePO.navigateToHomePage("appointments");
  
  cy.get('#mat-input-0').type("1514516058");
  cy.get('#mat-input-1').type("benzach.fire@gmail.com");
  cy.get('#mat-input-2').type("new2pass");
  cy.get('app-one-button > .mat-focus-indicator').click();
  cy.get('.title-content > .ng-star-inserted:nth-child(2)', { timeout: 20000 }).should('be.visible');
  homePO.navigateToHomePage("patients");
  cy.wait(5000);
});
Given(`I navigate to the document page`, () => {
  homePO.navigateToHomePage("appointments");
  
  cy.get('#mat-input-0').type("1514516058");
  cy.get('#mat-input-1').type("benzach.fire@gmail.com");
  cy.get('#mat-input-2').type("new2pass");
  cy.get('app-one-button > .mat-focus-indicator').click();
  cy.get('.title-content > .ng-star-inserted:nth-child(2)', { timeout: 10000 }).should('be.visible');
  homePO.navigateToHomePage("patients/view/0c063372-6808-f30b-2df6-73ebc444bd13?index=3");
  cy.wait(5000);
});

When("I select the Month date format", () => {
  // Implement the logic to select the Month date format
  cy.get("#mat-button-toggle-3-button").click({ force: true });
});
When("I select the Week date format", () => {
    // Implement the logic to select the Week date format
    cy.get('#mat-button-toggle-2-button').click();
  });
