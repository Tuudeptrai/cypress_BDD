/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Homepage_PO from "../../../page_objects/Homepage_PO";
import "cypress-xpath";
// Scenario: Edit patient detail implement
const randomString = () => Math.random().toString(36).substring(7);
const homePO = new Homepage_PO();

When("I click on the edit button", () => {
  cy.get(".mat-icon:nth-child(1) > svg").click({force: true});
  cy.wait(3000); // Edit button locator
});

// Scenario: Verify UI edit patient detail
Then(
  "the following elements should be visible within edit patient detail:",
  (dataTable) => {
    const elements = dataTable.rawTable[1]; // Extract the element names from the table

    elements.forEach((element) => {
      cy.xpath(`//*[text()="${element}"]`).should("be.visible");
    });
  }
);
When("I navigate to the patient detail page", () => {
  homePO.navigateToHomePage("patients/form?id=P0000005");
});

// When steps
When("Type First name random", () => {
  const firstName = randomString();
  cy.get(".name-with-suffix-container > .name").type("{selectall}{backspace}");
  cy.get(".name-with-suffix-container > .name").type(firstName);
});

When("Type Suffix random", () => {
  const suffix = randomString();
  cy.get(".suffix").type("{selectall}{backspace}");
  cy.get(".suffix").type(suffix);
});

When("Type Middle random", () => {
  const middleName = randomString();
  cy.get("#mat-input-0").type("{selectall}{backspace}");
  cy.get("#mat-input-0").type(middleName);
});

When("Type Last name random", () => {
  const lastName = randomString();
  cy.get("#mat-input-1").type("{selectall}{backspace}", { force: true });
  cy.get("#mat-input-1").invoke("val", lastName, { force: true });
});

When("Type Date of birth random", () => {
  const dob = "01/15/1990"; // Replace with your random date generation logic
  cy.get("#date-picker-input").type("{selectall}{backspace}");
  cy.get("#date-picker-input").type(dob);
});
When("Type Last name blank", () => {
  cy.get("#mat-input-1").type("{selectall}{backspace}");
});

When("Type Date of birth blank", () => {
  cy.get("#date-picker-input").type("{selectall}{backspace}");
});

When("Type Gender random", () => {
  const randomIndex = Math.floor(Math.random() * 3) + 1;
  cy.get("#mat-input-6").click();
  cy.get(".dropdown > :nth-child(" + randomIndex + ")").click();
});

When("Type Weight random", () => {
  const minWeight = 50;
  const maxWeight = 85;
  const randomWeight =
    Math.floor(Math.random() * (maxWeight - minWeight + 1)) + minWeight;

  cy.get("#mat-input-4").invoke("val", "{selectall}{backspace}");
  cy.get("#mat-input-4").invoke("val", randomWeight);
});

When("Type Height random", () => {
  const minHeight = 155;
  const maxHeight = 180;
  const randomHeight =
    Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;

  cy.get("#mat-input-3").invoke("val", "{selectall}{backspace}");
  cy.get("#mat-input-3").invoke("val", randomHeight);
});

When("Type Allergies Record random", () => {
  const allergies = "Pollen"; // Replace with your random allergies generation logic
  cy.get("#mat-input-5").type("{selectall}{backspace}");
  cy.get("#mat-input-5").type(allergies);
});

When("Type Marital Status random", () => {
  const randomIndex = Math.floor(Math.random() * 5) + 1; // Replace with your random marital status generation logic
  cy.get("#mat-input-7").click();
  cy.get(".dropdown > :nth-child(" + randomIndex + ")").click();
});

When("Type Employment Status random", () => {
  const randomIndex = Math.floor(Math.random() * 3) + 1; // Replace with your random employment status generation logic
  cy.get("#mat-input-8").click();
  cy.get(".dropdown > :nth-child(" + randomIndex + ")").click();
});

When("Type Phone number random", () => {
  const phoneNumber = "1234567890"; // Replace with your random phone number generation logic
  cy.get('.tel-input-container').type("{selectall}{backspace}");
  cy.get('.tel-input-container').type(phoneNumber);
});

When("Type Email random", () => {
  const email = `${randomString()}@example.com`;
  cy.get("#mat-input-9").type("{selectall}{backspace}");
  cy.get("#mat-input-9").type(email);
});

When("Type State random", () => {
  const randomIndex = Math.floor(Math.random() * 20) + 1; // Replace with your random employment status generation logic
  cy.get("#mat-input-15").click();
  cy.get(".dropdown > :nth-child(" + randomIndex + ")")
    .scrollIntoView()
    .click();
});

When("Type City random", () => {
  const randomIndex = Math.floor(Math.random() * 20) + 1; // Replace with your random employment status generation logic
  cy.get("#mat-input-10").click();
  cy.wait(3000);
  cy.get(".dropdown > :nth-child(" + randomIndex + ")")
    .scrollIntoView()
    .click();
});

When("Type Address random", () => {
  const address = randomString();
  cy.get("#mat-input-11").type("{selectall}{backspace}");
  cy.get("#mat-input-11").type(address);
});

When("hit save patient button", () => {
  cy.get('.btn-primary > .mat-button-wrapper').scrollIntoView().click();

});

Then("should not show message {string}", (message) => {
    cy.contains(message).should('not.exist', { timeout: 10000 });
});


When("hit save button", () => {
  cy.get(".button2 > .mat-button-wrapper").click(); // Save button locator
});

Then("should show message {string}", (message) => {
  cy.contains(message).should("be.visible");
});

Then("Employee field has sort A-Z", () => {
  cy.get("#mat-input-8").click();

  const dropdownItems = [1, 2, 3, 4];
  const getTextPromises = [];

  dropdownItems.forEach((itemIndex) => {
    getTextPromises.push(
      cy.get(`.dropdown > :nth-child(${itemIndex})`).invoke("text")
    );
  });

  Promise.all(getTextPromises).then((texts) => {
    const sortedTexts = texts.slice().sort();

    expect(texts).to.deep.equal(sortedTexts);
  });
});
Then("Married field has sort A-Z", () => {
  cy.get("#mat-input-7").click();

  const dropdownItems = [1, 2, 3, 4, 5];
  const getTextPromises = [];

  dropdownItems.forEach((itemIndex) => {
    getTextPromises.push(
      cy.get(`.dropdown > :nth-child(${itemIndex})`).invoke("text")
    );
  });

  Promise.all(getTextPromises).then((texts) => {
    const sortedTexts = texts.slice().sort();

    expect(texts).to.deep.equal(sortedTexts);
  });
});
Then("State field has sort A-Z", () => {
  cy.get("#mat-input-15").click();

  const dropdownItemsCount = 48;
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
Then("City field has sort A-Z", () => {
  cy.get("#mat-input-10").click();

  const dropdownItemsCount = 48;
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
Then("DOB field should be mmddyyyy format", () => {
  const dobField = cy.get("#date-picker-input");
  const testDate = "01/15/2023";

  dobField.clear().type(testDate);

  dobField.should("have.value", testDate);
});
