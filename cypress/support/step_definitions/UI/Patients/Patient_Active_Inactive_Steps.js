/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-xpath";
import Homepage_PO from "../../../page_objects/Homepage_PO";
const homePO = new Homepage_PO();

When("I Click JoSeph Powers", () => {
  cy.xpath(`//*[text()="P0000002"]`).click();
});
When("I Click the Edit button", () => {
// cy.xpath(`//*[text()="Edit"]`).click();
});
When("I Click Inactive this Patient", () => {
  cy.get(".switch").click();
  // cy.wait(3000);
});
When("I Click the Inactive button", () => {
  cy.get(".btn-confirm").click();
});
When("I click the Add Appointment button", () => {
    cy.get('.button2').click();
});
When("I go to the appointment screen and click the Add Appointment button", () => {
    homePO.navigateToHomePage("appointments");
    cy.get(".header-title > .mat-focus-indicator").click();
});
When("I click on search then click Joseph Powers", () => {
    cy.get(
        ".appointment-form__search > app-custom-dropdown > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex"
      ).type("P0000002");
    cy.xpath(`//*[text()="P0000002"]`).click();
    
});
When("I go to the patient screen", () => {
    homePO.navigateToHomePage("patients");
});
Then("JoSeph Powers should have a lighter color than the other patients", () => {
    cy.xpath(`//*[text()="1232312312"]`).should("have.css", "color", "rgb(51, 52, 62)");
});


Then("The alert should show Updated successfully", () => {
  cy.contains("Patient’s information has been updated successfully!").should(
    "be.visible"
  );
});
Then("The popup should show Patient is inactive",()=>{
    cy.contains("This patient is inactive").should(
        "be.visible"
      );
});