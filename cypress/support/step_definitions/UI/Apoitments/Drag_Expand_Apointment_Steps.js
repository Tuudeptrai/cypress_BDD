/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-xpath";

let time_bf = "";
let time_af = "";

When("drag appointment", () => {
  // Scroll to the .fc-event element
  cy.get(".fc-event").first()
    .scrollIntoView()
    .then(() => {
      // Perform long press on the .fc-event element
      cy.get(".fc-event").first()
        .trigger("mousedown", { button: 0 })
        .trigger("touchstart", { button: 0 })
        .wait(1000); // Adjust the duration of the long press as needed

      // Perform drag and drop down 100px
      cy.get("body")
        .trigger("mousemove", { clientY: 100 })
        .trigger("touchmove", { clientY: 100 });

      // Release the mouse/touch to drop the element
      cy.get("body")
        .trigger("mouseup", { button: 0 })
        .trigger("touchend", { button: 0 });
    });

});
When("expand appointment", () => {
  cy.get('.fc-timegrid-event-harness:nth-child(5) > .fc-event').scrollIntoView()
    .trigger('mousedown', 'bottom').trigger("touchstart", 'bottom')
    .wait(5000);
    // Perform drag and drop down 100px
    cy.get("body")
    .trigger("mousemove", { clientY: 100 })
    .trigger("touchmove", { clientY: 100 });

  // Release the mouse/touch to drop the element
  cy.get("body")
    .trigger("mouseup", { button: 0 })
    .trigger("touchend", { button: 0 });
});



Then("the alert {string} should be displayed", (alertMessage) => {
  cy.contains(alertMessage).should("exist");
});