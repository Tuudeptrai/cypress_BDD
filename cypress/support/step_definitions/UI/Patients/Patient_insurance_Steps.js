/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const clipboardy = require("clipboardy");


When("Clicks on Austin Powers", () => {
    cy.xpath(`//*[text()="P0000003"]`).click();
  });
When("Click on Insurance menu tab", () => {
  cy.get(".right-side-bar-wrap > :nth-child(2)").click();
});
When("Toggles Insurance panel", () => {
  cy.get(
    ".patient-form-accordion-container.ng-tns-c82-11 > .accordion > #accordion-header > .accordion-title > .content-left"
  ).click();
  // Wait for a brief moment for the panel to update
  cy.wait(2000);

  /// Verify that the "Patient MRN:" element exists and is not visible
  cy.xpath(`//*[text()="Primary"]`).should("not.exist");
  cy.get(
    ".patient-form-accordion-container.ng-tns-c82-11 > .accordion > #accordion-header > .accordion-title > .content-left"
  ).click();
  // Wait for a brief moment for the panel to update
  cy.wait(2000);
  cy.xpath(`//*[text()="Primary"]`).should("be.visible");
});
Then(
    "the following elements should be visible within Insurance panel:",
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
  
  let locatorToVerify;
  
  
  When('the user clicks the copy button for {string}', (infoType) => {
    switch (infoType) {
      case "Policy Holder":
        cy.get('.copy-icon').eq(1).click();
         break;
      case "Patient Ins. ID":
        cy.get('.copy-icon').eq(0).click();
      case "Phone number":
        cy.get('.copy-icon').eq(2).click();
        break;
      default:
        throw new Error(`Unsupported infoType: ${infoType}`);
    }

  });
  
  Then('the {string} should be copied to clipboard', (fieldName) => {
    switch (fieldName) {
      case "Policy Holder":
        locatorToVerify = '.patient-form-accordion-container.ng-tns-c82-11 > .accordion > #accordion-header > #accordion-body > .form > .container > :nth-child(4) > :nth-child(1) > .value';
        break;
      case "Patient Ins. ID":
        locatorToVerify = '.patient-form-accordion-container.ng-tns-c82-11 > .accordion > #accordion-header > #accordion-body > .form > .container > :nth-child(2) > :nth-child(2) > .value';
        break;
      case "Phone number":
        locatorToVerify = '.patient-form-accordion-container.ng-tns-c82-11 > .accordion > #accordion-header > #accordion-body > .form > .container > .workman > .body > :nth-child(2) > :nth-child(2) > .value';
        break;
      default:
        throw new Error(`Unsupported fieldName: ${fieldName}`);
    }
  
    cy.get(locatorToVerify)
      .invoke("text")
      .then((text) => {
        cy.window().then((win) => {
          // Create a temporary textarea element to copy the text to clipboard
          const tempTextArea = document.createElement("textarea");
          tempTextArea.style.position = "fixed";
          tempTextArea.style.opacity = 0;
          tempTextArea.value = text;
  
          // Append the textarea to the DOM
          document.body.appendChild(tempTextArea);
  
          // Select and copy the text from the textarea
          tempTextArea.select();
          document.execCommand("copy");
  
          // Remove the temporary textarea
          document.body.removeChild(tempTextArea);
  
          // Read the copied text from the clipboard
          navigator.clipboard.readText().then((clipboardValue) => {
            expect(text.trim()).to.contains(clipboardValue.trim());
          });
        });
      });
  });
    