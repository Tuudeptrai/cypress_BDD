/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { SecureToken } from "../../UI/Base_Steps";


Then('the response should have nested key {string}', (key) => {
    cy.get('@getResponse').its('body').should('have.nested.property', key);
  });
  