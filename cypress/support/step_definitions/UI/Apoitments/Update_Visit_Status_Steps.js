/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I click on the appointment", () => {
  cy.get(".fc-event").first().click({
    force: true,
    multiple: true,
  });
});
let status = "";
When("I select visit {string} in dropdown", (status) => {
  cy.xpath('//div[contains(@class, "typo-body-8")]')
    .invoke("text")
    .then((text) => {
      cy.xpath('//div[contains(@class, "typo-body-8")]').click({
        force: true,
        multiple: true,
      });
      if(status != text){
        cy.xpath(`//*[text()="`+status+`"]`).click({
        force: true,
        multiple: true,
      });
      }
      
      cy.log("status", status);
    });
});
When("I select current visit status in dropdown", () => {
  cy.xpath('//div[contains(@class, "typo-body-8")]')
    .invoke("text")
    .then((text) => {
      const status = text;
      cy.log(text);
      cy.xpath('//div[contains(@class, "typo-body-8")]').click({
        force: true,
        multiple: true,
      });

      if (status.includes("Check-in")) {
        cy.xpath(`//*[text()="Check-in"]`).click({
          force: true,
          multiple: true,
        });
        cy.log("Selected: Check-in");
      } else if (status.includes("Check-out")) {
        cy.xpath(`//*[text()="Check-out"]`).click({
          force: true,
          multiple: true,
        });
        cy.log("Selected: Check-out");
      } else if (status.includes("Billing Complete")) {
        cy.xpath(`//*[text()="Billing Complete"]`).click({
          force: true,
          multiple: true,
        });
        cy.log("Selected: Billing Complete");
      } else if (status.includes("Billing pending")) {
        cy.xpath(`//*[text()="Billing pending"]`).click({
          force: true,
          multiple: true,
        });
        cy.log("Selected: Billing pending");
      } else if (status.includes("Discharge with clinician")) {
        cy.xpath(`//*[text()="Discharge with clinician"]`).click({
          force: true,
          multiple: true,
        });
        cy.log("Selected: Discharge with clinician");
      } else if (status.includes("Documentation complete")) {
        cy.xpath(`//*[text()="Documentation complete"]`).click({
          force: true,
          multiple: true,
        });
        cy.log("Selected: Documentation complete");
      } else if (status.includes("Documentation incomplete")) {
        cy.xpath(`//*[text()="Documentation incomplete"]`).click({
          force: true,
          multiple: true,
        });
        cy.log("Selected: Documentation incomplete");
      } else if (status.includes("Intake with clinician")) {
        cy.xpath(`//*[text()="Intake with clinician"]`).click({
          force: true,
          multiple: true,
        });
        cy.log("Selected: Intake with clinician");
      } else if (status.includes("No call")) {
        cy.xpath(`//*[text()="No call"]`).click({
          force: true,
          multiple: true,
        });
        cy.log("Selected: No call");
      } else if (status.includes("Not arrived")) {
        cy.xpath(`//*[text()="Not arrived"]`).click({
          force: true,
          multiple: true,
        });
        cy.log("Selected: Not arrived");
      } else if (status.includes("Physician with patient")) {
        cy.xpath(`//*[text()="Physician with patient"]`).click({
          force: true,
          multiple: true,
        });
        cy.log("Selected: Physician with patient");
      } else if (status.includes("Ready for billing")) {
        cy.xpath(`//*[text()="Ready for billing"]`).click({
          force: true,
          multiple: true,
        });
        cy.log("Selected: Ready for billing");
      } else if (status.includes("Ready for physician")) {
        cy.xpath(`//*[text()="Ready for physician"]`).click({
          force: true,
          multiple: true,
        });
        cy.log("Selected: Ready for physician");
      } else {
        cy.log("Invalid status");
      }

      cy.log("status", status);
    });
});



Then("alert should show {string}", (message) => {
  cy.contains(message).should("exist");
});

Then("appointment Process show visit {string} point", (status) => {
  let foundCheckIn = false;
 cy.log("status", status)
  cy.xpath('//div[@class="typo-body-6 text-label"]')
    .each(($element) => {
      const text = $element.text();
      cy.log("text",text)
      if (text == status) {
        foundCheckIn = true;
      }
    })
    .then(() => {
      expect(foundCheckIn).to.be.true;
    });
});
