/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { SecureToken } from "../../UI/Base_Steps";


When('I send a GET request to {string}', (endpoint) => {
 

  cy.request({
    method: 'GET',
    url: 'https://officemanagement-api.dev.appsensesolutions.com' +endpoint,
    headers: {
      Authorization: `Bearer ${SecureToken}`,
    },
  }).as('getResponse');
});

Then('the response should have a key {string}', (key) => {
  cy.get('@getResponse').its('body').should('have.property', key);
});



Then('the response {string} should be sorted in ascending order', (key) => {
  cy.get('@getResponse').then((response) => {
    const items = response.body.data.documents.map((document) => document[key]);
    const sortedItems = [...items].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
    expect(items).to.deep.equal(sortedItems);
  });
});

Then('the response {string} should be sorted in descending order', (key) => {
  cy.get('@getResponse').then((response) => {
    const items = response.body.data.documents.map((document) => document[key]);
    const sortedItems = [...items].sort((a, b) => b.localeCompare(a, undefined, { sensitivity: 'base' }));
    // cy.writeFile('cypress/fixtures/data1.json', JSON.stringify(items));
    // cy.writeFile('cypress/fixtures/data2.json', JSON.stringify(sortedItems));
    expect(items).to.deep.equal(sortedItems);
  });
});

Then('the response {string} should contain {string}', (key, value) => {
    cy.get('@getResponse').its(`body.data.documents.0.${key}`).should('contain', value);
});

