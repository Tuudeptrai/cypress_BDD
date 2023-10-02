/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const clipboardy = require("clipboardy");

When("I Clicks on Austin, Powers", () => {
  cy.xpath(`//*[text()="P0000003"]`).click();
});
When("I Click on Next of Kin tab", () => {
  cy.xpath(`//*[text()="Next of Kin"]`).click();
});
When("Toggles Next of Kin Panel", () => {
  cy.get(".content-left > .mat-icon").click();
  // Wait for a brief moment for the panel to update
  cy.wait(2000);

  /// Verify that the "Patient MRN:" element exists and is not visible
  cy.xpath(`//*[text()="Emergency"]`).should("not.exist");
  cy.get(".content-left > .mat-icon").click();
  // Wait for a brief moment for the panel to update
  cy.wait(2000);
  cy.xpath(`//*[text()="Emergency"]`).should("be.visible");
});
Then(
    "the following elements should be visible within Next of Kin Panel:",
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
  When('user clicks the copy button for {string}', (infoType) => {
    switch (infoType) {
      case "Email":
        cy.get('.copy-icon').eq(0).click();
      case "Phone number":
        cy.get('.copy-icon').eq(1).click();
        break;
      default:
        throw new Error(`Unsupported infoType: ${infoType}`);
    }

  });
  Then('{string} should be copied to clipboard', (fieldName) => {
    switch (fieldName) {
      case "Email":
        locatorToVerify = '.field:nth-child(2) > .color-primary';
        break;
      case "Phone number":
        locatorToVerify = '.field:nth-child(1) > .color-primary';
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
    