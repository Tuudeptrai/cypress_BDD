/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Homepage_PO from "../../../page_objects/Homepage_PO";
import "cypress-xpath";

const homePO = new Homepage_PO();
const randomString = () => Math.random().toString(36).substring(7);

When("Go to add insurance page", () => {
  cy.xpath(`//*[text()="P0000005"]`).click();
  cy.get(".right-side-bar-wrap > :nth-child(2) > .typo-body-7").click();
  cy.get(".edit-btn > .mat-button-wrapper").click();
});
When("hit add new link", () => {
  cy.get(".mat-button-wrapper > span").click();
});
When("select insurance", () => {
  const randomIndex = Math.floor(Math.random() * 2) + 1;
  cy.get("#mat-input-11").click();
  cy.get(".dropdown > :nth-child(" + randomIndex + ")").click();
});
When("select insurance priority", () => {
  const randomIndex = Math.floor(Math.random() * 2) + 1;
  cy.get("#mat-input-10").click();
  cy.get(".dropdown > :nth-child(1)").click();
});
When("type Patient Ins. ID", () => {
  const lastName = randomString();
  cy.get("#mat-input-4").type("{selectall}{backspace}", { force: true });
  cy.get("#mat-input-4").invoke("val", lastName, { force: true });
});
When("type Signature Date", () => {
  const Date = "08/30/2023";
  cy.get("#mat-input-5").type("{selectall}{backspace}", { force: true });
  cy.get("#mat-input-5").invoke("val", Date, { force: true });
  cy.get("#mat-input-5").click({force: true});
});

When("select insurance Type", () => {
  const randomIndex = Math.floor(Math.random() * 5) + 1;
  cy.get("#mat-input-12").click({ force: true });
  cy.get(".dropdown > :nth-child(" + randomIndex + ")").click({ force: true });
});
When("select Policy Holder", () => {
  const randomIndex = Math.floor(Math.random() * 1) + 1;
  cy.get("#mat-input-13").click({ force: true });
  cy.get(".dropdown > :nth-child(1)").click({ force: true });
});

When("select insurance 2", () => {
  const randomIndex = Math.floor(Math.random() * 2) + 1;
  cy.get("#mat-input-27").click();
  cy.get(".dropdown > :nth-child(" + randomIndex + ")").click();
});
When("select insurance priority 2", () => {
  const randomIndex = Math.floor(Math.random() * 2) + 1;
  cy.get("#mat-input-26").click();
  cy.get(".dropdown > :nth-child(1)").click();
});
When("type Patient Ins. ID 2", () => {
  const lastName = randomString();
  cy.get("#mat-input-20").type("{selectall}{backspace}", { force: true });
  cy.get("#mat-input-20").invoke("val", lastName, { force: true });
});
When("type Signature Date 2", () => {
  const Date = "08/30/2023";
  cy.get("#mat-input-21").type("{selectall}{backspace}", { force: true });
  cy.get("#mat-input-21").invoke("val", Date, { force: true });
  cy.get("#mat-input-21").click();
});

When("select insurance Type 2", () => {
  const randomIndex = Math.floor(Math.random() * 5) + 1;
  cy.get("#mat-input-28").click({ force: true });
  cy.get(".dropdown > :nth-child(" + randomIndex + ")").click({ force: true });
});
When("select Policy Holder 2", () => {
  const randomIndex = Math.floor(Math.random() * 1) + 1;
  cy.get("#mat-input-29").click({ force: true });
  cy.get(".dropdown > :nth-child(1)").click({ force: true });
});

When("Save changes", () => {
  cy.get(
    ".heading-right-patient-data > .mat-raised-button > .mat-button-wrapper"
  ).click({force: true});
});
Then("the message show {string}", (message) => {
  cy.contains(message).should("be.visible");
});

Then("Insurance doc has sort A-Z", () => {
  cy.get("#mat-input-11").click();

  const dropdownItemsCount = 2;
  const getTextPromises = [];

  for (let itemIndex = 1; itemIndex <= dropdownItemsCount; itemIndex++) {
    getTextPromises.push(
      cy
        .get(`.dropdown > :nth-child(${itemIndex})`)
        .scrollIntoView()
        .invoke("text")
    );
  }

  Promise.all(getTextPromises).then((texts) => {
    const sortedTexts = texts.slice().sort();

    expect(texts).to.deep.equal(sortedTexts);
  });
});

Then("insurance priority field has sort A-Z", () => {
  cy.get("#mat-input-10").click();

  const dropdownItemsCount = 3;
  const getTextPromises = [];

  for (let itemIndex = 1; itemIndex <= dropdownItemsCount; itemIndex++) {
    getTextPromises.push(
      cy
        .get(`.dropdown > :nth-child(${itemIndex})`)
        .scrollIntoView()
        .invoke("text")
    );
  }

  Promise.all(getTextPromises).then((texts) => {
    const sortedTexts = texts.slice().sort();

    expect(texts).to.deep.equal(sortedTexts);
  });
});

Then("insurance Type field has sort A-Z", () => {
  cy.get("#mat-input-12").click();

  const dropdownItemsCount = 5;
  const getTextPromises = [];

  for (let itemIndex = 1; itemIndex <= dropdownItemsCount; itemIndex++) {
    getTextPromises.push(
      cy
        .get(`.dropdown > :nth-child(${itemIndex})`)
        .scrollIntoView()
        .invoke("text")
    );
  }

  Promise.all(getTextPromises).then((texts) => {
    const sortedTexts = texts.slice().sort();

    expect(texts).to.deep.equal(sortedTexts);
  });
});

Then("Signature Date field should be mmddyyyy format", () => {
  const dobField = cy.get("#mat-input-5").eq(0);
  const testDate = "01/15/2023";

  dobField.clear().type(testDate, {force: true});

  dobField.should("have.value", testDate);
});
