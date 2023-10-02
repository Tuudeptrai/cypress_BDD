/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-xpath";

When("type in search box with last name and first name",()=>{
    cy.get('#mat-input-3').click();
    cy.get('#mat-input-3').type("nguyen daniel")
});
When("type in search box with last name and  first name and patient id",()=>{
    cy.get('#mat-input-3').click();
    cy.get('#mat-input-3').type("nguyen daniel P0000001")
});
When("type in search box with last name and DOB and patient id",()=>{
    cy.get('#mat-input-3').click();
    cy.get('#mat-input-3').type("nguyen 05/08 P0000001")
});
When("type in search box with last name and DOB",()=>{
    cy.get('#mat-input-3').click();
    cy.get('#mat-input-3').type("nguyen 05/08")
});
When("type in search box with last name",()=>{
    cy.get('#mat-input-3').click();
    cy.get('#mat-input-3').type("nguyen")
});
When("type in search box with not exist last name",()=>{
    cy.get('#mat-input-3').click();
    cy.get('#mat-input-3').type("alibaba")
});
When("type in search box with first name and last name",()=>{
    cy.get('#mat-input-3').click();
    cy.get('#mat-input-3').type("daniel nguyen")
});
When("type in search box with first name and last name and patient id",()=>{
    cy.get('#mat-input-3').click();
    cy.get('#mat-input-3').type("daniel nguyen P0000001")
});
When("type in search box with first name and DOB and patient id",()=>{
    cy.get('#mat-input-3').click();
    cy.get('#mat-input-3').type("daniel 05/08 P0000001")
});
When("type in search box with first name and DOB",()=>{
    cy.get('#mat-input-3').click();
    cy.get('#mat-input-3').type("daniel 05/08")
});
When("type in search box with first name",()=>{
    cy.get('#mat-input-3').click();
    cy.get('#mat-input-3').type("daniel")
});
When("type in search box with not exist first name",()=>{
    cy.get('#mat-input-3').click();
    cy.get('#mat-input-3').type("alibaba")
});

When("type in search box with DOB and last name",()=>{
    cy.get('#mat-input-3').click();
    cy.get('#mat-input-3').type("05/08 nguyen")
});
When("type in search box with DOB and first name",()=>{
    cy.get('#mat-input-3').click();
    cy.get('#mat-input-3').type("05/08 daniel")
});
When("type in search box with DOB and last name and first name",()=>{
    cy.get('#mat-input-3').click();
    cy.get('#mat-input-3').type("05/08 nguyen daniel")
});
When("type in search box with DOB and patient id",()=>{
    cy.get('#mat-input-3').click();
    cy.get('#mat-input-3').type("05/08 P0000001")
});
When("type in search box with DOB and cell phone",()=>{
    cy.get('#mat-input-3').click();
    cy.get('#mat-input-3').type("05/08 0987654322")
});

When("type in search box with patient id and last name",()=>{
    cy.get('#mat-input-3').click();
    cy.get('#mat-input-3').type("P0000001 nguyen")
});
When("type in search box with patient id and first name",()=>{
    cy.get('#mat-input-3').click();
    cy.get('#mat-input-3').type("P0000001 daniel")
});
When("type in search box with patient id and DOB",()=>{
    cy.get('#mat-input-3').click();
    cy.get('#mat-input-3').type("P0000001 05/08")
});
When("type in search box with patient id and cell phone",()=>{
    cy.get('#mat-input-3').click();
    cy.get('#mat-input-3').type("P0000001 0987654322")
});

When("type in search box with cell phone and last name",()=>{
    cy.get('#mat-input-3').click();
    cy.get('#mat-input-3').type("0987654322 nguyen")
});
When("type in search box with cell phone and first name",()=>{
    cy.get('#mat-input-3').click();
    cy.get('#mat-input-3').type("0987654322 daniel")
});
When("type in search box with cell phone and DOB",()=>{
    cy.get('#mat-input-3').click();
    cy.get('#mat-input-3').type("0987654322 05/08")
});
When("type in search box with cell phone and patient id",()=>{
    cy.get('#mat-input-3').click();
    cy.get('#mat-input-3').type("0987654322 P0000001")
});

Then("should show appoiment record",()=>{
    cy.wait(2000);
    cy.get(':nth-child(1) > .search-list-left > .search-list-info > .typo-body-6')
  .should('contain.text', 'Daniel Nguyen');

});
Then("should show no appointment",()=>{
    cy.contains('There is no data match')
  .should('be.visible');
});
