/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-xpath";
import { SecureToken } from "../../UI/Base_Steps";


// Step: Verify GET patient list order a-z
When("GET patient list order by lastname and order asc", () => {
  cy.request({
    method: "GET",
    url:
      "https://officemanagement-api.dev.appsensesolutions.com/api/Patients/overview?PatientSortCriteria=LastName&PageSize=10&PageIndex=1&SortOrder=ASC",
    headers: {
        Authorization: `Bearer ${SecureToken}`, // Include the bearer token in the request headers
      },
    }).as("patientList");
});

Then("should return status code should be 200 and sort a to z", () => {
  cy.get("@patientList").then((response) => {
    expect(response.status).to.equal(200);
    const patients = response.body.data.patients;
    const sortedPatients = patients.slice().sort((a, b) =>
      a.lastName.localeCompare(b.lastName)
    );
    expect(patients).to.deep.equal(sortedPatients);
  });
});

// Step: Verify GET patient list order z-a
When("GET patient list order by lastname and order desc", () => {
  cy.request({
    method: "GET",
    url:
      "https://officemanagement-api.dev.appsensesolutions.com/api/Patients/overview?PatientSortCriteria=LastName&PageSize=10&PageIndex=1&SortOrder=DESC",
    headers: {
        Authorization: `Bearer ${SecureToken}`, // Include the bearer token in the request headers
      },
    }).as("patientList");
});

Then("should return status code should be 200 and sort z to a", () => {
  cy.get("@patientList").then((response) => {
    expect(response.status).to.equal(200);
    const patients = response.body.data.patients;
    const sortedPatients = patients.slice().sort((a, b) =>
      b.lastName.localeCompare(a.lastName)
    );
    expect(patients).to.deep.equal(sortedPatients);
  });
});
