/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I click add patient", () => {
  cy.get(".right > .mat-focus-indicator").click();
});
Then("I see the {string} button", (buttonName) => {
  cy.contains("button", buttonName).should("be.visible");
});

Then(
  "I see the Right menu containing the following items:",
  ( table) => {
    const items = table.raw().flat();
    // Loop through each menu item from 1 to 6 and check if it contains the expected item
    for (let i = 1; i <= 5; i++) {
      cy.get(`:nth-child(${i}) > .item-content > .typo-body-7`).each((menu) => {
        expect(menu.text()).to.contain(items[i - 1]);
      });
    }
  }
);

Then(
  "I see the Patient Demographic box with the following fields:",
  (table) => {
    const placeholders = table.raw().flat();

    // Check each placeholder inside the Patient Demographic box
    placeholders.forEach((placeholder) => {
      // Use a selector to target the input elements with the specific placeholder
      cy.contains('label', placeholder).scrollIntoView().should('be.visible');

    });
  }
);

Then("I see the Patient Contact box with the following fields:", (table) => {
    const placeholders = table.raw().flat();

    // Check each placeholder inside the Patient Demographic box
    placeholders.forEach((placeholder) => {
      // Use a selector to target the input elements with the specific placeholder
      cy.contains('label', placeholder).scrollIntoView().should('be.visible');

    });
});
