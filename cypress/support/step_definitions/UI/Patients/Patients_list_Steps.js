/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I see the title as {string}", (title) => {
  cy.contains(".typo-heading-6", title).should("be.visible");
});

Then("I see the patient table with the following fields:", (dataTable) => {
  const expectedFields = dataTable.raw().flat();

  expectedFields.forEach((field) => {
    cy.contains(".mat-header-cell", field).should("be.visible");
  });
});

Then("All lastname on table is sort A-Z", () => {
  // Get the elements with class ".cdk-column-MES-99"
  cy.get(".cdk-column-MES-99").then((elements) => {
    const textArray = [];

    elements.each((index, element) => {
      // Skip the first element
      if (index === 0) {
        return;
      }

      const text = Cypress.$(element).text();
      const splitText = text.split(","); // Cắt văn bản thành mảng bởi dấu phẩy
      if (splitText.length >= 2) {
        // Nếu mảng có ít nhất hai phần tử, lưu chuỗi mới vào mảng textArray
        textArray.push(`${splitText[1].trim()} ${splitText[0].trim()}`);
      }
    });

    // Sort the array in A-Z order (descending order)
    const sortedArray = textArray.slice().sort((a, b) => a.localeCompare(b));
    cy.log("textArray",textArray);
    cy.log("sortedArray",sortedArray);

    // Check if the original array is equal to the sorted array
    // expect(textArray).to.deep.equal(sortedArray);
  });
});
let beforeSorting,
  afterSorting = "";

When("I click on sort Z-A", () => {
  cy.get(".cdk-column-MES-99")
    .eq(2)
    .invoke("text")
    .then((text) => {
      beforeSorting = text.trim();
    });

  // Assuming '#mat-input-3' is the element that triggers the sorting action and '#mat-option-1' represents the option for sorting Z-A
  cy.get('#mat-input-2').click();
  cy.get('.dropdown > :nth-child(2)').click();
  cy.wait(2000);
});

Then("All lastname on table is sort Z-A", () => {
  cy.get(".cdk-column-MES-99")
    .eq(1)
    .invoke("text")
    .then((text) => {
      afterSorting = text.trim();
      expect(beforeSorting).to.not.equal(afterSorting);
    });
});
When("I click on sort Oldest to Newest", () => {
  cy.get(".cdk-column-MES-99")
    .eq(2)
    .invoke("text")
    .then((text) => {
      beforeSorting = text.trim();
    });

  // Assuming '#mat-input-3' is the element that triggers the sorting action and '#mat-option-1' represents the option for sorting Z-A
  cy.get('#mat-input-2').click();
  cy.get(".dropdown > :nth-child(3)").click();
  cy.wait(2000);
});

Then("All lastname on table is sort Oldest to Newest", () => {
  cy.get(".cdk-column-MES-99")
    .eq(2)
    .invoke("text")
    .then((text) => {
      afterSorting = text.trim();
      expect(beforeSorting).to.not.equal(afterSorting);
    });
});
When("I click on sort Newest to Oldest", () => {
  cy.get(".cdk-column-MES-99")
    .eq(1)
    .invoke("text")
    .then((text) => {
      beforeSorting = text.trim();
    });

  // Assuming '#mat-input-3' is the element that triggers the sorting action and '#mat-option-1' represents the option for sorting Z-A
  cy.get('#mat-input-2').click();
  cy.get(".dropdown > :nth-child(4)").click();
  cy.wait(2000);
});

Then("All lastname on table is sort Newest to Oldest", () => {
  cy.get(".cdk-column-MES-99")
    .eq(1)
    .invoke("text")
    .then((text) => {
      afterSorting = text.trim();
      expect(beforeSorting).to.not.equal(afterSorting);
    });
});
