/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-xpath";

function clickPrevMonthUntilJuly() {
  cy.get('.tui-calendar-title').then(($title) => {
    if (!$title.text().includes('Jul')) {
      // Continue clicking until the title contains "jul"
      cy.get('.tui-calendar-btn-prev-month').click();
      cy.wait(3000);
      clickPrevMonthUntilJuly(); // Call the function recursively
    }else{
      return;
    }
  });
}
When ("I go to 10 jul 2023",()=>{
  cy.wait(3000);
  // Call the recursive function to click until July is displayed
  clickPrevMonthUntilJuly();

  // Now the title contains "jul"
  // Click on the element with data-timestamp="1688922000000"
  cy.get('[data-timestamp="1688922000000"]').click();
  cy.wait(5000);
});
When("click on filter button", () => {
  cy.wait(2000);
  cy.get(".show-filter-sidebar-btn").click();
});

Then("Filter popup open", () => {
  cy.get(".typo-button-1").should("be.visible");
});

When("click on popup close button", () => {
  cy.get(".filter-header > img").click();
});

Then("Filter popup should be closed", () => {
  cy.get(".typo-button-1", { timeout: 10000 }).should("not.exist");
});


When("click on Provider collapse button", () => {
  cy.get(':nth-child(1) > .filter-section > .header > .ng-star-inserted').click();
});

Then("Provider box is toggle", () => {
  cy.get('#mat-input-6').should("not.be.visible");
  cy.get(':nth-child(1) > .filter-section > .header > .ng-star-inserted').click();
  cy.get("#mat-input-6").should("be.visible");
});

When("click on Visit Type collapse button", () => {
  cy.get(':nth-child(3) > .filter-section > .header > .ng-star-inserted').click();
});

Then("Visit Type box is toggle", () => {
  cy.get('#mat-checkbox-11 > .mat-checkbox-layout > .mat-checkbox-label').should("not.be.visible");
  cy.get(':nth-child(3) > .filter-section > .header > .ng-star-inserted').click();
  cy.get('#mat-checkbox-11 > .mat-checkbox-layout > .mat-checkbox-label').should("be.visible");
});

When("click on Visit Status collapse button", () => {
  cy.get(':nth-child(5) > .filter-section > .header > .ng-star-inserted').click();
});

Then("Visit Status box is toggle", () => {
  cy.get(':nth-child(5) > .filter-section > [role="region"] > app-checkbox-list > :nth-child(1)').should("be.visible");
  cy.get(':nth-child(5) > .filter-section > .header > .ng-star-inserted').click();
  cy.get(':nth-child(5) > .filter-section > [role="region"] > app-checkbox-list > :nth-child(1)').should("not.be.visible");
});


When("click on Visit Form collapse button", () => {
  cy.get(':nth-child(7) > .filter-section > .header > .ng-star-inserted').click();
});

Then("Visit Form box is toggle", () => {
  cy.get(':nth-child(7) > .filter-section > [role="region"] > app-checkbox-list > :nth-child(1)').should("be.visible");
  cy.get(':nth-child(7) > .filter-section > .header > .ng-star-inserted').click();
  cy.get(':nth-child(7) > .filter-section > [role="region"] > app-checkbox-list > :nth-child(1)').should("not.be.visible");
});


When("click on Date collapse button", () => {
  cy.get(':nth-child(9) > .filter-section > .header > .ng-star-inserted').click();
});

Then("Date box is toggle", () => {
  cy.get('.date-range-container').should("be.visible");
  cy.get(':nth-child(9) > .filter-section > .header > .ng-star-inserted').click();
  cy.get('.date-range-container').should("not.be.visible");
});

//------------------------------------------------------------------------------------------------//
Then("nothing happen", () => {});
Then("the customer box which showed on date range should change accordingly", () => {
  cy.get('[style="inset: 3300px 0% -3350px; z-index: 1;"] > .fc-event').last().scrollIntoView().should("be.visible");
});
Then("calender will reset", () => {
  cy.get('.fc-day-fri > .fc-timegrid-col-frame > :nth-child(2) > [style="inset: 3300px 0% -3350px; z-index: 1;"] > .fc-event').should("be.visible");
});
When("select date in from datepicker", () => {
  cy.get('#startpicker-input').click();
  cy.get('#startpicker-input').type("10/07/2023");
});
When("select date in To datepicker", () => {
  cy.get('#endpicker-input').click();
  cy.get('#endpicker-input').type("13/07/2023");
});
When("click on Reset all button", () => {
  cy.get('.reset').click();
});
//---------------------------------------------------------------------------------------------//
When("I click on Provider search box",()=>{
  cy.get('#mat-input-6').click();
})
When("select one {string} in provider list option",(provider)=>{
  cy.xpath('.//*[contains(text(),"'+provider+'")]').first().click();
})
When("the {string} appointment block which showed on the calendar should change accordingly", (providerblock) => {
  switch (providerblock) {
    case "John Doe":
      cy.get('.fc-day-fri > .fc-timegrid-col-frame > :nth-child(2) > [style="inset: 3300px 0% -3350px; z-index: 1;"] > .fc-event')
        .scrollIntoView()
        .filter(":visible")
        .should("not.exist");
      break;
    case "Tom bob":
      cy.get('[style="inset: 3400px 0% -3450px; z-index: 1;"] > .fc-event')
        .scrollIntoView()
        .filter(":visible")
        .should("not.exist");
      break;
    case "PHAM DANH":
      cy.get( '.fc-day-thu > .fc-timegrid-col-frame > :nth-child(2) > [style="inset: 3300px 0% -3350px; z-index: 1;"] > .fc-event')
        .scrollIntoView()
        .filter(":visible")
        .should("not.exist");
      break;
    case "Jane Doe1":
      cy.get('[style="inset: 3700px 0% -3750px; z-index: 1;"] > .fc-event > .fc-event-title > .event-provider')
        .scrollIntoView()
        .filter(":visible")
        .should("not.exist");
      break;
    case "Jeb Dee":
      cy.get('[style="inset: 3500px 0% -3550px; z-index: 1;"] > .fc-event')
        .scrollIntoView()
        .filter(":visible")
        .should("not.exist");
      break;
    case "Ben Ben":
      cy.get('[style="inset: 3600px 0% -3650px; z-index: 1;"] > .fc-event')
        .scrollIntoView()
        .filter(":visible")
        .should("not.exist");
      break;
    default:
      throw new Error(`Unknown provider block: ${providerblock}`);
  }
});

When("unselect all provider in provider list option", ()=>{
  cy.xpath('.//*[contains(text(),"All")]').last().click();
})

When("click apply button",()=>{
  cy.get('.buttons > .mat-primary').click();
})
Then("the appointment block which provider showed on the calendar should change accordingly",()=>{
  // cy.get('.fc-day-fri > .fc-timegrid-col-frame > :nth-child(2) > [style="inset: 3300px 0% -3350px; z-index: 1;"] > .fc-event')
  // .should('not.be.visible');
})

When("select one {string} in Visit type list option",(visittype)=>{
  cy.xpath('.//*[contains(text(),"'+visittype+'")]').first().click();
})
When("the {string} appointment block which visit type showed on the calendar should change accordingly", (visittype) => {
  switch (visittype) {
    case "Consult":
      cy.get('.fc-day-fri > .fc-timegrid-col-frame > :nth-child(2) > [style="inset: 3300px 0% -3350px; z-index: 1;"] > .fc-event')
        .scrollIntoView().should("be.visible");
      break;
    case "DME supplies":
      cy.get('[style="inset: 3400px 0% -3450px; z-index: 1;"] > .fc-event')
        .scrollIntoView().should("be.visible");
      break;
    case "Follow up visit":
      cy.get('[style="inset: 3600px 0% -3650px; z-index: 1;"] > .fc-event')
        .scrollIntoView().should("be.visible");
      break;
    case "Initial visit":
      cy.get('[style="inset: 3700px 0% -3750px; z-index: 1;"] > .fc-event')
      .scrollIntoView().should("be.visible");
      break;
    case "Medication refill":
      cy.get('[style="inset: 3500px 0% -3550px; z-index: 1;"] > .fc-event')
        .scrollIntoView().should("be.visible");
      break;
    default:
      throw new Error(`Unknown provider block: ${visittype}`);
  }
});
//---------------------------------------------------------------------------------------------------------//
When("select one {string} in Visit status list option",(Visitstatus)=>{
  cy.xpath('.//*[contains(text(),"'+Visitstatus+'")]').first().click();
  cy.wait(3000);
})
When("the {string} appointment block which Visit status showed on the calendar should change accordingly", (Visitstatus) => {
  switch (Visitstatus) {
    case "Ready for billing":
      cy.get('.fc-day-thu > .fc-timegrid-col-frame > :nth-child(2) > [style="inset: 3300px 0% -3350px; z-index: 1;"] > .fc-event')
      .scrollIntoView().should("be.visible");
      break;
    case "Documentation complete":
      cy.get('.fc-day-fri > .fc-timegrid-col-frame > :nth-child(2) > [style="inset: 3300px 0% -3350px; z-index: 1;"] > .fc-event')
        .scrollIntoView().should("be.visible");
      break;
    case "Billing pending":
      cy.get('[style="inset: 3400px 0% -3450px; z-index: 1;"] > .fc-event')
        .scrollIntoView().should("be.visible");
      break;
    case "Billing Complete":
      cy.get('[style="inset: 3600px 0% -3650px; z-index: 1;"] > .fc-event')
        .scrollIntoView().should("be.visible");
      break;
    case "Check-out":
      cy.get('[style="inset: 3600px 0% -3650px; z-index: 1;"] > .fc-event')
      .scrollIntoView().should("be.visible");
      break;
    case "Check in":
      cy.get('.fc-day-fri > .fc-timegrid-col-frame > :nth-child(2) > .fc-timegrid-event-harness > .fc-event').last()
        .scrollIntoView().should("be.visible");
      break;
    default:
      throw new Error(`Unknown provider block: ${Visitstatus}`);
  }
});

//---------------------------------------------------------------------------------------------------------//
When("select one {string} in Visit form list option",(Visitsform)=>{
  cy.xpath('.//*[contains(text(),"'+Visitsform+'")]').first().click();
})
When("the {string} appointment block which Visit form showed on the calendar should change accordingly", (Visitsform) => {
  switch (Visitsform) {
    case "In Office":
      cy.get('.fc-day-fri > .fc-timegrid-col-frame > :nth-child(2) > [style="inset: 3300px 0% -3350px; z-index: 1;"] > .fc-event')
        .scrollIntoView().should("be.visible");
      break;
    case "Virtual Visit":
      cy.get('[style="inset: 3400px 0% -3450px; z-index: 1;"] > .fc-event')
        .scrollIntoView().should("be.visible");
      break;
    default:
      throw new Error(`Unknown provider block: ${Visitsform}`);
  }
});