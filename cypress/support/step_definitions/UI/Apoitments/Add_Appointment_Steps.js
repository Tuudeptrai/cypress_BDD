/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-xpath";

When("I click on the appointment button", () => {
  cy.get(".header-title > .mat-focus-indicator").click();
});
When("I select a patient", () => {
  cy.get(
    ".appointment-form__search > app-custom-dropdown > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex"
  ).click();
  cy.get("#mat-option-283 > .mat-option-text > .search__row--patient").then(
    ($element) => {
      cy.wrap($element).click();
    }
  );
});

When("I select {string} from the {string} dropdown", (option, dropdownType) => {
  switch (dropdownType) {
    case "OfficeName":
      cy.get(
        ".information-form-with-title__content > :nth-child(1) > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix"
      )
        .click()
        .then(() => {
          cy.xpath("//*[contains(text(), '" + option + "')]").click({
            multiple: true,
            force: true,
          });
        });
      break;
    case "provider":
      cy.xpath("//input[@id='mat-input-15']/..")
        .click()
        .then(() => {
          cy.get("#mat-autocomplete-2")

            .scrollIntoView()
            .then(() => {
              cy.xpath("//*[contains(text(), '" + option + "')]").click({
                multiple: true,
                force: true,
              });
            });
        });
      break;
    case "ServiceType":
      cy.get("#mat-input-16")
        .click()
        .then(() => {
          cy.get("#mat-autocomplete-3")
            .scrollIntoView()
            .then(() => {
              cy.xpath("//*[contains(text(), '" + option + "')]").click({
                multiple: true,
                force: true,
              });
            });
        });
      break;
    case "VisitForm":
      cy.get("#mat-input-17")
        .click()
        .then(() => {
          cy.xpath("//*[contains(text(), '" + option + "')]")
            .scrollIntoView()
            .click({ multiple: true, force: true });
        });
      break;
    case "VisitReason":
      cy.get("#mat-input-18")
        .click()
        .then(() => {
          cy.xpath("//*[contains(text(), '" + option + "')]")
            .scrollIntoView()
            .click({ multiple: true, force: true });
        });
      break;
    case "VisitStatus":
      cy.get("#mat-input-19")
        .click()
        .then(() => {
          cy.xpath("//*[contains(text(), '" + option + "')]")
            .scrollIntoView()
            .click({ multiple: true, force: true });
        });
      break;
    
    default:
      throw new Error(`Unsupported dropdown type: ${dropdownType}`);
  }
});

When("I select {string} from the date picker", (visitDate) => {
  cy.get("#date-picker-input").clear().type(visitDate);
});

When("I select {string} from the HourStart picker", (visitTime) => {
  cy.get('#mat-select-0 > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow')
    .click({ multiple: true, force: true })
    .then(() => {
      cy.xpath("//*[contains(text(), '" + visitTime + "')]").last()
        .click({
          multiple: true,
          force: true,
        });
    });
});
When("I select {string} from the MinuteStart picker", (visitTime) => {
  cy.get('#mat-select-2 > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow')
    .click({ multiple: true, force: true })
    .then(() => {
      cy.xpath("//*[contains(text(), '" + visitTime + "')]")
      .last()
        .click({
          multiple: true,
          force: true,
        });
    });
});
When("I select {string} from the HourEnd picker", (visitTime) => {
  cy.get('#mat-select-4 > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow')
    .click({ multiple: true, force: true })
    .then(() => {
      cy.xpath("//*[contains(text(), '" + visitTime + "')]")
      .last()
        .click({
          multiple: true,
          force: true,
        });
    });
});
When("I select {string} from the MinuteEnd picker", (visitTime) => {
  cy.get('#mat-select-6 > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow')
    .click({ multiple: true, force: true })
    .then(() => {
      cy.xpath("//*[contains(text(), '" + visitTime + "')]").last()
        .click({
          multiple: true,
          force: true,
        });
    });
});

When("I select {string} in the note field", (note) => {
  cy.get("#mat-input-11").type(note, {force: true});
});

When("I click on click on schedule calender", () => {
  const randomSlot = Math.floor(Math.random() * 96) + 1;
  cy.get(`:nth-child(${randomSlot}) > .fc-timegrid-slot-lane`).click();
});

When("I hit the create button", () => {
  cy.get(".mat-raised-button").click({force: true});
});

Then("the the alert show Create new appointment successfully!", () => {
  cy.contains("Create new appointment successfully!");
  cy.wait(5000);
});
