/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


When("I hover in appointment block", () => {
    cy.get('.fc-event').eq(0).trigger('mouseover',  {force: true});
  });
  
  Then("the Paitent name should be exist", () => {
    cy.get('.provider').should('exist');
  });
  Then("the visit time should be exist", () => {
    cy.get('.period').should('exist');
  });
  Then("the Phone number should be exist", () => {
    cy.contains('Phone number').should('exist');
  });
  Then("the DOB should be exist", () => {
    cy.contains('Date of birth').should('exist');
  });
  Then("the Gender should be exist", () => {
    cy.contains('Gender').should('exist');
  });
  Then("the Provider should be exist", () => {
    cy.contains('Provider').should('exist');
  });
  Then("the Visit Type should be exist", () => {
    cy.contains('Visit Type').should('exist');
  });
  Then("the Service type should be exist", () => {
    cy.contains('Service type').should('exist');
  });
  Then("the Eligibility Status should be exist", () => {
    cy.contains('Eligibility Status').should('exist');
  });
  Then("the Authorization Status should be exist", () => {
    cy.contains('Authorization Status').should('exist');
  });
  