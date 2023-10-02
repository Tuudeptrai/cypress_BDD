/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-file-upload';
import "cypress-xpath";


When('I click on the upload document button', () => {
  // Add Cypress commands to click on the upload document button
  // For example:
  cy.get('.left > .mat-focus-indicator').click({force: true});
});

When('I select document type', () => {
  // Add Cypress commands to select document type
  // For example:
  cy.get('#mat-input-2').click();
  cy.get('.dropdown > :nth-child(1)').click();
  cy.get('.browse').click();
});

When('I upload a file', () => {
    // Use the cy.fixture() and cy.get().upload() commands to upload a file
    // For example:
    const fileName = 'phat.png'; // Replace with the name of your test file
    cy.fixture(fileName).then(fileContent => {
        cy.get('input[type="file"]').attachFile({
          fileContent,
          fileName,
          mimeType: 'image/png'
        });
      });
     
});

When('I hit Upload button', () => {
  // Add Cypress commands to hit the Upload button
  // For example:
  cy.get('.action > .mat-flat-button').click();
  cy.wait(4000);
});

Then('The message "Upload documents successfully!" show', () => {
   
  
  // Add Cypress commands to verify the success message
  // For example:
  cy.contains("Upload documents successfully!").should('be.visible');
});