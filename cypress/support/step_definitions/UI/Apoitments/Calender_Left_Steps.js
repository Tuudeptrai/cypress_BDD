/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let mon_bf = "";
let mon_af = "";
let date_txt_bf = "";
let date_txt_af = "";
const currentDate = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "short",
  day: "2-digit",
});

When("I select the Day date format", () => {
  // Implement the logic to select the Day date format
  cy.get("#mat-button-toggle-1-button").click();
});

Then(
  "the large calendar on the right should display a single column and spanning ninety six rows",
  () => {
    // Implement the logic to verify the display of the large calendar in Day format
    for (let i = 1; i <= 96; i++) {
      cy.get(`:nth-child(${i}) > .fc-timegrid-slot-lane`)
        .scrollIntoView()
        .should("be.visible");
    }
  }
);


Then(
  "the large calendar on the right should display seven columns from Monday to Sunday and ninety six rows",
  () => {
    // Implement the logic to verify the display of the large calendar in Week format
    cy.get("thead > tr > .fc-day-mon > :nth-child(1)").should("be.visible");
    cy.get("thead > tr > .fc-day-tue > :nth-child(1)").should("be.visible");
    cy.get("thead > tr > .fc-day-wed > :nth-child(1)").should("be.visible");
    cy.get("thead > tr > .fc-day-thu > :nth-child(1)").should("be.visible");
    cy.get("thead > tr > .fc-day-fri > :nth-child(1)").should("be.visible");
    cy.get("thead > tr > .fc-day-sat > :nth-child(1)").should("be.visible");
    cy.get("thead > tr > .fc-day-sun > :nth-child(1)").should("be.visible");
    for (let i = 1; i <= 96; i++) {
      cy.get(`:nth-child(${i}) > .fc-timegrid-slot-lane`)
        .scrollIntoView()
        .should("be.visible");
    }
  }
);

// When("I select the Month date format", () => {
//   // Implement the logic to select the Month date format
//   cy.get("#mat-button-toggle-3-button").click();
// });

Then(
  "the large calendar on the right should display seven columns from Monday to Sunday and six rows for dates",
  () => {
    // Implement the logic to verify the display of the large calendar in Month format
    cy.get(
      ":nth-child(1) > .fc-day-mon > .fc-daygrid-day-frame > .fc-daygrid-day-top"
    ).should("be.visible");
    cy.get("thead > tr > .fc-day-tue > .fc-scrollgrid-sync-inner").should(
      "be.visible"
    );
    cy.get("thead > tr > .fc-day-wed > .fc-scrollgrid-sync-inner").should(
      "be.visible"
    );
    cy.get("thead > tr > .fc-day-thu > .fc-scrollgrid-sync-inner").should(
      "be.visible"
    );
    cy.get("thead > tr > .fc-day-fri > .fc-scrollgrid-sync-inner").should(
      "be.visible"
    );
    cy.get("thead > tr > .fc-day-sat > .fc-scrollgrid-sync-inner").should(
      "be.visible"
    );
    cy.get("thead > tr > .fc-day-sun > .fc-scrollgrid-sync-inner").should(
      "be.visible"
    );
    for (let i = 1; i <= 6; i++) {
      cy.get(`:nth-child(${i}) > .fc-day-mon > .fc-daygrid-day-frame`)
        .scrollIntoView()
        .should("be.visible");
    }
  }
);

When("I click the Next button in the small calendar on the left", () => {
  cy.get("#mat-button-toggle-3-button").click();

  cy.get(
    ":nth-child(1) > .fc-day-mon > .fc-daygrid-day-frame > .fc-daygrid-day-top"
  )
    .invoke("text")
    .then((text) => {
      mon_bf = text;
    });

  cy.get(".tui-calendar-btn-next-month").click();
});

Then(
  "the large calendar on the right should switch to the next month and the month text should change accordingly",
  () => {
    cy.get(
      ":nth-child(1) > .fc-day-mon > .fc-daygrid-day-frame > .fc-daygrid-day-top"
    )
      .invoke("text")
      .then((text) => {
        mon_af = text;
        expect(mon_af).not.to.equal(mon_bf);
      });
  }
);

When("I click the Prev button in the small calendar on the left", () => {
  // Implement the logic to click the Prev button in the small calendar
  cy.get("#mat-button-toggle-3-button").click();

  cy.get(
    ":nth-child(1) > .fc-day-mon > .fc-daygrid-day-frame > .fc-daygrid-day-top"
  )
    .invoke("text")
    .then((text) => {
      mon_bf = text;
    });

  cy.get(".tui-calendar-btn-prev-month").click();
});

Then(
  "the large calendar on the right should switch to the previous month and the month text should change accordingly",
  () => {
    // Implement the logic to verify the navigation to the previous month
    cy.get(
      ":nth-child(1) > .fc-day-mon > .fc-daygrid-day-frame > .fc-daygrid-day-top"
    )
      .invoke("text")
      .then((text) => {
        mon_af = text;
        expect(mon_af).not.to.equal(mon_bf);
      });
  }
);

When("I click the Today link in the small calendar on the left", () => {
  // Implement the logic to click the Today link in the small calendar
  cy.get(".today").click();
  cy.get(".tui-calendar-title")
    .invoke("text")
    .then((text) => {
      date_txt_bf = text;
    });
  cy.get(".tui-calendar-btn-prev-month").click();
  cy.get(".tui-calendar-btn-prev-month").click();
});

Then("the large calendar on the right should switch to today date", () => {
  // Implement the logic to verify the navigation to today's date
  cy.get(".today").click();
  cy.get(".tui-calendar-title")
    .invoke("text")
    .then((text) => {
      date_txt_af = text;
      expect(date_txt_af).equal(date_txt_bf);
      cy.wrap(date_txt_af).should('eq', currentDate);
    });
  //check if data text is today
  // Get the current date
  
});

When("with the Month date format selected", () => {
  // Implement the logic to click a specific date in the small calendar with Month format selected
  cy.get("#mat-button-toggle-3-button").click();
  cy.get(".tui-calendar-title")
  .invoke("text")
  .then((text) => {
    date_txt_bf = text;
  });
});

When("I click a specific date in the small calendar on the left", () => {
  // Implement the logic to click a specific date in the small calendar 
  cy.get(".tui-calendar-btn-prev-month").click();
  cy.get(':nth-child(3) > .tui-calendar-sat').click();
  
});

Then(
  "the date in the large calendar on the right should change accordingly",
  () => {
    // Implement the logic to verify the change in date on the large calendar
    cy.get(".tui-calendar-title")
    .invoke("text")
    .then((text) => {
      date_txt_af = text;
      expect(date_txt_af).not.to.equal(date_txt_bf);
    });
  }
);

When("with the Week date format selected", () => {
  // Implement the logic to click a specific date in the small calendar with Week format selected
  cy.get("#mat-button-toggle-2-button").click();
  cy.get('thead > tr > .fc-day-mon > :nth-child(1)')
  .invoke("text")
  .then((text) => {
    date_txt_bf = text;
  });
});

Then(
  "the date in the large calendar on the right should change accordingly, and the large calendar should navigate to the corresponding week",
  () => {
    // Implement the logic to verify the change in date and navigation to the corresponding week
    cy.get('thead > tr > .fc-day-mon > :nth-child(1)')
    .invoke("text")
    .then((text) => {
      date_txt_af = text;
      expect(date_txt_af).not.to.equal(date_txt_bf);
    });
  }
);

When("with the Day date format selected", () => {
  // Implement the logic to click a specific date in the small calendar with Day format selected
  cy.get("#mat-button-toggle-1-button").click();
  cy.get(".tui-calendar-title")
  .invoke("text")
  .then((text) => {
    date_txt_bf = text;
  });
});

Then(
  "the date in the large calendar on the right should change accordingly, and the large calendar should navigate to the corresponding day",
  () => {
    // Implement the logic to verify the change in date and navigation to the corresponding day
    cy.get(".tui-calendar-title")
    .invoke("text")
    .then((text) => {
      date_txt_af = text;
      expect(date_txt_af).not.to.equal(date_txt_bf);
    });
  }
);
