/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-xpath";

let nameprovider = "";

When("click on appointment box then click edit link", () => {
  cy.get(".event-provider")
    .first()
    .invoke("text")
    .then((text) => {
      nameprovider = text;
    });

  cy.get(".fc-event")
    .first()
    .click({
      multiple: true,
      force: true,
    })
    .then(() => {
      cy.get(".header-btn-edit").click();
    });
});

When("select patient in search box", () => {
  cy.log(nameprovider);
  if (nameprovider.includes("Daniel Nguyen")) {
    cy.get(
      ".appointment-form__search > app-custom-dropdown > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex"
    ).click();
    cy.xpath(`//*[text()="Austin Super Powers"]`).click();
    cy.log("11111");
  } else if (nameprovider.includes("Austin Powers")) {
    cy.get(
      ".appointment-form__search > app-custom-dropdown > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex"
    ).click();
    cy.xpath(`//*[text()="JOSEPH the Powers"]`).click();
    cy.log("22222");
  } else if (nameprovider.includes("JOSEPH Powers")) {
    cy.get(
      ".appointment-form__search > app-custom-dropdown > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex"
    ).click();
    cy.xpath(`//*[text()="Daniel Hoang Nguyen"]`).click();
    cy.log("3333");
  }
});
When("select office name in search box", () => {
  cy.xpath(
    `//div[contains(text(),"Visit Information")]/following-sibling::div/descendant::input`
  )
    .first()
    .invoke("val")
    .then((value) => {
      if (value === "Woudy - 23123123123") {
        cy.xpath(
          '//div[contains(text(),"Visit Information")]/following-sibling::div/descendant::input'
        )
          .first()
          .click({force: true});
        cy.xpath(`//*[text()="  - asdfasdfasdf"]`).click({force: true});
      } else if (value === " - 123") {
        cy.xpath(
          '//div[contains(text(),"Visit Information")]/following-sibling::div/descendant::input'
        )
          .first()
          .click({force: true});
        cy.xpath(`//*[text()="Woudy - 23123123123"]`).click({force: true});
      } else if (value === "  - asdfasdfasdf") {
        cy.xpath(
          '//div[contains(text(),"Visit Information")]/following-sibling::div/descendant::input'
        )
          .first()
          .click({force: true});
        cy.xpath(`//*[text()=" - 123"]`).click({force: true});
      }
      else {
        cy.xpath(
          '//div[contains(text(),"Visit Information")]/following-sibling::div/descendant::input'
        )
          .first()
          .click({force: true});
        cy.xpath(`//*[text()=" - 123"]`).click({force: true});
      }
      // Access the value of the input element
      cy.log(value);
    });
});
When("select provider name in search box", () => {
  cy.xpath(
    `//div[contains(text(),"Visit Information")]/following-sibling::div/descendant::input`
  )
    .eq(1)
    .invoke("val")
    .then((value) => {
      if (value === "Jeb Dee") {
        cy.xpath(
          '//div[contains(text(),"Visit Information")]/following-sibling::div/descendant::input'
        )
          .eq(1)
          .click({force: true});
        cy.xpath(`//*[text()="Jeb Dee"]`).click({
          multiple: true,
          force: true,
        });
      } else if (value === "Jeb Dee") {
        cy.xpath(
          '//div[contains(text(),"Visit Information")]/following-sibling::div/descendant::input'
        )
          .eq(1)
          .click({ multiple: true },{force: true});
        cy.xpath(`//*[text()="Joe provider1"]`).click({ multiple: true, force: true });
      } else if (value === "Joe provider1") {
        cy.xpath(
          '//div[contains(text(),"Visit Information")]/following-sibling::div/descendant::input'
        )
          .eq(1)
          .click({force: true});
        cy.xpath(`//*[text()="Jeb Dee"]`).click({ multiple: true, force: true});
      }
      else {
        cy.xpath(
          '//div[contains(text(),"Visit Information")]/following-sibling::div/descendant::input'
        )
          .eq(1)
          .click({force: true});
        cy.xpath(`//*[text()="Jeb Dee"]`).click({ multiple: true, force: true});
      }
      // Access the value of the input element
      cy.log(value);
    });
});
When("select service types in search box", () => {
  cy.xpath(
    `//div[contains(text(),"Visit Information")]/following-sibling::div/descendant::input`
  )
    .eq(2)
    .invoke("val")
    .then((value) => {
      if (value === "2 - Surgical") {
        cy.xpath(
          '//div[contains(text(),"Visit Information")]/following-sibling::div/descendant::input'
        )
          .eq(2)
          .click({force: true});
        cy.xpath(`//*[text()="1 - Medical Care"]`).click({
          multiple: true,
          force: true,
        });
      } else if (value === "1 - Medical Care") {
        cy.xpath(
          '//div[contains(text(),"Visit Information")]/following-sibling::div/descendant::input'
        )
          .eq(2)
          .click({ multiple: true },{force: true});
        cy.xpath(`//*[text()="3 - Consultation"]`).click({ multiple: true },{force: true});
      } else if (value === "3 - Consultation") {
        cy.xpath(
          '//div[contains(text(),"Visit Information")]/following-sibling::div/descendant::input'
        )
          .eq(2)
          .click({force: true});
        cy.xpath(`//*[text()="2 - Surgical"]`).click({force: true});
      }
      else {
        cy.xpath(
          '//div[contains(text(),"Visit Information")]/following-sibling::div/descendant::input'
        )
          .eq(2)
          .click({force: true});
        cy.xpath(`//*[text()="2 - Surgical"]`).click({force: true});
      }
      // Access the value of the input element
      cy.log(value);
    });
});
When("select visit form in dropdown", () => {
  cy.xpath(
    `//div[contains(text(),"Visit Information")]/following-sibling::div/descendant::input`
  )
    .eq(3)
    .invoke("val")
    .then((value) => {
      if (value === "In Office") {
        cy.xpath(
          '//div[contains(text(),"Visit Information")]/following-sibling::div/descendant::input'
        )
          .eq(3)
          .click({force: true});
        cy.xpath(`//*[text()="Virtual Visit"]`).click({
          multiple: true,
          force: true,
        });
      } else if (value === "Virtual Visit") {
        cy.xpath(
          '//div[contains(text(),"Visit Information")]/following-sibling::div/descendant::input'
        )
          .eq(3)
          .click({ multiple: true },{force: true});
        cy.xpath(`//*[text()="In Office"]`).click({ multiple: true });
      }
      // Access the value of the input element
      cy.log(value);
    });
});
When("select visit reason in dropdown", () => {
  cy.xpath(
    `//div[contains(text(),"Visit Information")]/following-sibling::div/descendant::input`
  )
    .eq(4)
    .invoke("val")
    .then((value) => {
      if (value === "Initial Visit") {
        cy.xpath(
          '//div[contains(text(),"Visit Information")]/following-sibling::div/descendant::input'
        )
          .eq(4)
          .click({force: true});
        cy.xpath(`//*[text()="Follow up visit"]`).click({
          multiple: true,
          force: true,
        });
      } else if (value === "Follow up visit") {
        cy.xpath(
          '//div[contains(text(),"Visit Information")]/following-sibling::div/descendant::input'
        )
          .eq(4)
          .click({ multiple: true },{force: true});
        cy.xpath(`//*[text()="DME supplies"]`).click({ multiple: true });
      } else if (value === "DME supplies") {
        cy.xpath(
          '//div[contains(text(),"Visit Information")]/following-sibling::div/descendant::input'
        )
          .eq(4)
          .click({ multiple: true },{force: true});
        cy.xpath(`//*[text()="Initial Visit"]`).click({ multiple: true });
      }
      else {
        cy.xpath(
          '//div[contains(text(),"Visit Information")]/following-sibling::div/descendant::input'
        )
          .eq(4)
          .click({ multiple: true },{force: true});
        cy.xpath(`//*[text()="Initial Visit"]`).click({ multiple: true });
      }
      // Access the value of the input element
      cy.log(value);
    });
});
When("select visit date in date picker", () => {
  cy.get("#date-picker-input")
    .invoke("val")
    .then((value) => {
      // Generate a random date after today
      const today = new Date();
      const randomDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 1 + Math.floor(Math.random() * 30)
      );

      // Format the date as "MM/DD/YYYY"
      const month = String(randomDate.getMonth() + 1).padStart(2, "0");
      const day = String(randomDate.getDate()).padStart(2, "0");
      const year = randomDate.getFullYear();
      const formattedDate = `${month}/${day}/${year}`;

      // Clear the input field and type the random date
      cy.get("#date-picker-input").clear().type(formattedDate);
    });
});
When("reset date", () => {
  cy.get("#date-picker-input").clear().type("03/07/2023");
});
When("typing some note text on the text field", () => {
  let randomString = Math.random().toString(36).substring(7);
  cy.xpath(
    `//div[contains(text(),"Visit Information")]/following-sibling::div/descendant::input`
  )
    .eq(6)
    .type(randomString, {force: true});
});
When("select {string} in dropdown", (value) => {
  cy.get("dropdown").select(value); // Replace "dropdown" with the appropriate selector
});

When("click save", () => {
  cy.get(".mat-raised-button").click({force: true}); // Replace "save-button" with the appropriate selector
});

Then("alert show {string}", (message) => {
  cy.on("window:alert", (alertMessage) => {
    expect(alertMessage).to.equal(message);
  });
});
