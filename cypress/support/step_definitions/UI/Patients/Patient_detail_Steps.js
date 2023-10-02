/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("Clicks on Daniel Nguyen", () => {
  cy.xpath(`//*[text()="P0000001"]`).click();
});

When("Toggles the Patient Demographic Panel", () => {
  // Click on the button/icon to toggle the Patient Demographic Panel
  cy.get(
    "app-patient-demographic-container > .patient-form-accordion-container > .accordion > #accordion-header > .accordion-title > .content-left > .mat-icon"
  ).click();

  // Wait for a brief moment for the panel to update
  cy.wait(5000);

  /// Verify that the "Patient MRN:" element exists and is not visible
  cy.xpath(`//*[text()="Gender"]`).should("not.exist");

  cy.wait(2000);
  // Click again to toggle the Panel back
  cy.get(
    "app-patient-demographic-container > .patient-form-accordion-container > .accordion > #accordion-header > .accordion-title > .content-left > .mat-icon"
  ).click();
  cy.wait(2000);
  // Wait for the element to appear again
  cy.xpath(`//*[text()="Gender:"]`).should("be.visible");
});

When("Toggles the Patient Contact Panel", () => {
  cy.get(
    "app-patient-contact-container > .patient-form-accordion-container > .accordion > #accordion-header > .accordion-title > .content-left > .mat-icon"
  ).click();

  // Wait for the element to disappear
  cy.wait(2000);
  cy.get(
    "app-patient-contact-container > .patient-form-accordion-container > .accordion > #accordion-header > #accordion-body > .form > .ng-star-inserted > :nth-child(2) > :nth-child(1) > .label"
  ).should("not.exist");

  cy.wait(2000);
  // Click again to toggle the Panel back
  cy.get(
    "app-patient-contact-container > .patient-form-accordion-container > .accordion > #accordion-header > .accordion-title > .content-left > .mat-icon"
  ).click();
  cy.wait(2000);
  // Wait for the element to appear again
  cy.get(
    "app-patient-contact-container > .patient-form-accordion-container > .accordion > #accordion-header > #accordion-body > .form > .ng-star-inserted > :nth-child(2) > :nth-child(1) > .label"
  )
    .scrollIntoView()
    .should("be.visible");
});
When("Toggles the Emergency Contact Panel", () => {
  cy.get(
    "app-emergency-contact-container > .patient-form-accordion-container > .accordion > #accordion-header > .accordion-title > .content-left > .mat-icon"
  ).click();

  // Wait for the element to disappear
  cy.wait(2000);
  cy.get(
    ".item > app-form-title-description > .description-container > .information > .name > span"
  ).should("not.exist");

  cy.wait(2000);
  // Click again to toggle the Panel back
  cy.get(
    "app-emergency-contact-container > .patient-form-accordion-container > .accordion > #accordion-header > .accordion-title > .content-left > .mat-icon"
  ).click();
  cy.wait(2000);
  // Wait for the element to appear again
  cy.get(
    ".item > app-form-title-description > .description-container > .information > .name > span"
  )
    .scrollIntoView()
    .should("be.visible");
});
Then(
  "the following elements should be visible within the Patient Demographic Panel:",
  (dataTable) => {
    // Get the list of elements from the dataTable variable
    const elementsToCheck = dataTable.rawTable.slice(1).map((row) => row[0]);

    // Loop through each element in the list
    elementsToCheck.forEach((element) => {
      // Use Cypress to check visibility of the element
      cy.contains(element).scrollIntoView().should("be.visible");
    });
  }
);
Then(
  "the following elements should be visible within the Patient Contact Panel:",
  (dataTable) => {
    // Get the list of elements from the dataTable variable
    const elementsToCheck = dataTable.rawTable.slice(1).map((row) => row[0]);

    // Loop through each element in the list
    elementsToCheck.forEach((element) => {
      // Use Cypress to check visibility of the element
      cy.contains(element).scrollIntoView().should("be.visible");
    });
  }
);
Then(
  "the following elements should be visible within the Emergency Contact Panel:",
  (dataTable) => {
    cy.get(
      "app-patient-contact-container > .patient-form-accordion-container > .accordion > #accordion-header > .accordion-title > .content-left > .mat-icon"
    ).click();
    cy.wait(3000);
    // Get the list of elements from the dataTable variable
    const elementsToCheck = dataTable.rawTable.slice(1).map((row) => row[0]);

    // Loop through each element in the list
    elementsToCheck.forEach((element) => {
      // Use Cypress to check visibility of the element
      cy.contains(element).scrollIntoView().should("be.visible");
    });
  }
);
const clipboardy = require("clipboardy");

function getFieldSelector(fieldName, elementType) {
  const selectors = {
    SSN: ".form > .ng-star-inserted > :nth-child(2) > :nth-child(1)",
    "Phone number of patient": ":nth-child(1) > :nth-child(1)",
    "Email of patient": ":nth-child(1) > :nth-child(2)",
    "Phone number of Emergency": ".item > :nth-child(2) > :nth-child(1)",
    "Email of Emergency": ":nth-child(2) > :nth-child(2)",
  };

  return selectors[fieldName] + " > ." + elementType;
}

When("the user clicks the Copy button for {string}", (fieldName) => {
  const copyButtonSelector = getFieldSelector(fieldName, "value > .copy-icon");
  cy.get(copyButtonSelector).eq(0).click();
});

Then("the {string} should be copied to the clipboard", (fieldName) => {
  cy.window().then((win) => {
    cy.document().then((doc) => {
      const clipboardInput = doc.createElement("input");
      clipboardInput.style.position = "fixed";
      clipboardInput.style.opacity = 0;
      const expectedValueSelector = getFieldSelector(fieldName, "value");

      cy.get(expectedValueSelector) // Ensure the element is focused
        .invoke("text")
        .then((text) => {
          cy.task("getClipboard").then((clipboardValue) => {
            expect(text.trim()).to.contains(clipboardValue.trim());
          });
        });
    });
  });
});
