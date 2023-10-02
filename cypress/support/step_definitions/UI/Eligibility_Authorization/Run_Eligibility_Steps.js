/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-xpath";
import { SecureToken } from "../Base_Steps";

const baseUrl =
  "https://officemanagement-api.dev.appsensesolutions.com/api/Patients/0c063372-6808-f30b-2df6-73ebc444bd13/eligibility";

let response;
When("reset data to null", () => {
  const payload = [
    {
      insuranceId: "string",
      eligibilityStatus: "UNVERIFIED",
      coInsurance: 0,
      coPayment: 0,
      timePeriodQualifier: "string",
      deductible: 0,
      rejectReason: "string",
      benefitInquiryId: "string",
    },
  ];

  cy.request({
    method: "PATCH",
    url: baseUrl,
    headers: {
      Authorization: `Bearer ${SecureToken}`,
    },
    body: payload,
    failOnStatusCode: false,
  }).then((res) => {
    response = res;
  });
});
When("I select {string}", (Patient) => {
  cy.log(Patient);
  cy.get(
    ".appointment-form__search > app-custom-dropdown > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex"
  ).click();
  cy.wait(5000);
  cy.get("#mat-option-286 > .mat-option-text > .search__row--patient").click();
  cy.log("11111");
});
When("I hit the Insurance check button", () => {
  cy.get(".secondary-button").click();
});
When("hit run button", () => {
  cy.get(".run").click({ force: true });
});
Then("Eligibility Status turn to covered", () => {
  cy.xpath('.//*[contains(text(),"Covered")] | .//*[contains(text(),"Rejected")]').should('exist');

});
