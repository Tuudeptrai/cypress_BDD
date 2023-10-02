/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Given: A patient list with last name and first name
When("patient list with last name and first name", () => {
  cy.get("#mat-input-0").type("pow j");
 
});
When("patient list with last name and  first name and patient id", () => {
  cy.get("#mat-input-0").type("pow j P0000002");
 
});
When("patient list with last name and DOB and patient id", () => {
  cy.get("#mat-input-0").type("pow 07/11 P0000002");
 
});
When("patient list with last name and DOB", () => {
  cy.get("#mat-input-0").type("pow 07/11");
 
});
When("patient list with last name", () => {
  cy.get("#mat-input-0").type("pow");
 cy.wait(2000)
});
When("patient list with not exist last name", () => {
  cy.get("#mat-input-0").type("aaabbbccc");
 
});
//--------------------------------------------------------
When("patient list with first name and last name", () => {
    cy.get('#mat-input-1').click();
    cy.xpath("//*[contains(text(), 'First Name')]").click({
        multiple: true,
        force: true,
      });
  cy.get("#mat-input-0").type("j pow");
 
});
When("patient list with first name and last name and patient id", () => {
    cy.get('#mat-input-1').click();
    cy.xpath("//*[contains(text(), 'First Name')]").click({
        multiple: true,
        force: true,
      });
  cy.get("#mat-input-0").type("j pow P0000002");
 
});
When("patient list with first name and DOB and patient id", () => {
    cy.get('#mat-input-1').click();
    cy.xpath("//*[contains(text(), 'First Name')]").click({
        multiple: true,
        force: true,
      });
  cy.get("#mat-input-0").type("j 07/11 P0000002");
 
});
When("patient list with first name and DOB", () => {
    cy.get('#mat-input-1').click();
    cy.xpath("//*[contains(text(), 'First Name')]").click({
        multiple: true,
        force: true,
      });
  cy.get("#mat-input-0").type("j 07/11");
 
});
When("patient list with first name", () => {
    cy.get('#mat-input-1').click();
    cy.xpath("//*[contains(text(), 'First Name')]").click({
        multiple: true,
        force: true,
      });
  cy.get("#mat-input-0").type("j");
 
});
When("patient list with not exist first name", () => {
    cy.get('#mat-input-1').click();
    cy.xpath("//*[contains(text(), 'First Name')]").click({
        multiple: true,
        force: true,
      });
  cy.get("#mat-input-0").type("kk");
 
});
//-----------------------------------------------------------
When("patient list with DOB and last name", () => {
    cy.get('#mat-input-1').click();
    cy.xpath("//*[contains(text(), 'Date of birth')]").click({
        multiple: true,
        force: true,
      });
  cy.get("#mat-input-0").type("07/11 pow");
 
});
When("patient list with DOB and first name", () => {
    cy.get('#mat-input-1').click();
    cy.xpath("//*[contains(text(), 'Date of birth')]").click({
        multiple: true,
        force: true,
      });
  cy.get("#mat-input-0").type("07/11 j");
 
});
When("patient list with DOB and last name and first name", () => {
    cy.get('#mat-input-1').click();
    cy.xpath("//*[contains(text(), 'Date of birth')]").click({
        multiple: true,
        force: true,
      });
  cy.get("#mat-input-0").type("07/11 pow j");
 
});
When("patient list with DOB and patient id", () => {
    cy.get('#mat-input-1').click();
    cy.xpath("//*[contains(text(), 'Date of birth')]").click({
        multiple: true,
        force: true,
      });
  cy.get("#mat-input-0").type("07/11 P0000002");
 
});
When("patient list with DOB and cell phone", () => {
    cy.get('#mat-input-1').click();
    cy.xpath("//*[contains(text(), 'Date of birth')]").click({
        multiple: true,
        force: true,
      });
  cy.get("#mat-input-0").type("07/11 1232312312");
 
});
//---------------------------------------------------
When("patient list with patient id and last name", () => {
    cy.get('#mat-input-1').click();
    cy.xpath("//*[contains(text(), 'MRN')]").click({
        multiple: true,
        force: true,
      });
  cy.get("#mat-input-0").type("P0000002 pow");
 
});
When("patient list with patient id and first name", () => {
    cy.get('#mat-input-1').click();
    cy.xpath("//*[contains(text(), 'MRN')]").click({
        multiple: true,
        force: true,
      });
  cy.get("#mat-input-0").type("P0000002 j");
 
});
When("patient list with patient id and DOB", () => {
    cy.get('#mat-input-1').click();
    cy.xpath("//*[contains(text(), 'MRN')]").click({
        multiple: true,
        force: true,
      });
  cy.get("#mat-input-0").type("P0000002 07/11");
 
});
When("patient list with patient id and cell phone", () => {
    cy.get('#mat-input-1').click();
    cy.xpath("//*[contains(text(), 'MRN')]").click({
        multiple: true,
        force: true,
      });
  cy.get("#mat-input-0").type("P0000002 1232312312");
 
});
//-------------------------------------------------------------------
When("patient list with cell phone and last name", () => {
    cy.get('#mat-input-1').click();
    cy.xpath("//*[contains(text(), 'Phone number')]").click({
        multiple: true,
        force: true,
      });
  cy.get("#mat-input-0").type("1232312312 pow");
 
});
When("patient list with cell phone and first name", () => {
    cy.get('#mat-input-1').click();
    cy.xpath("//*[contains(text(), 'Phone number')]").click({
        multiple: true,
        force: true,
      });
  cy.get("#mat-input-0").type("1232312312 j");
 
});
When("patient list with cell phone and DOB", () => {
    cy.get('#mat-input-1').click();
    cy.xpath("//*[contains(text(), 'Phone number')]").click({
        multiple: true,
        force: true,
      });
  cy.get("#mat-input-0").type("1232312312 07/11");
 
});
When("patient list with cell phone and patient id", () => {
    cy.get('#mat-input-1').click();
    cy.xpath("//*[contains(text(), 'Phone number')]").click({
        multiple: true,
        force: true,
      });
  cy.get("#mat-input-0").type("1232312312 P0000002");
 
});



// Then: The record should be displayed
Then("should show the record", () => {
  cy.wait(5000);
  cy.get(".mat-row > .cdk-column-MES-99")
    .invoke("text")
    .then((patient) => {
      expect(patient.trim()).to.equal("Joseph, Powers");
    });
});
Then("should show no patient", () => {
    cy.contains("There is no patient data in the list").should("exist");
  });
  

Then("should show related patients", () => {
  cy.get(".mat-row > .cdk-column-MES-99")
    .eq(0)
    .invoke("text")
    .then((patient) => {
      expect(patient.trim()).to.equal("Austin, Powers");
    });
  cy.get(".mat-row > .cdk-column-MES-99")
    .eq(1)
    .invoke("text")
    .then((patient) => {
      expect(patient.trim()).to.equal("Joseph, Powers");
    });
});
