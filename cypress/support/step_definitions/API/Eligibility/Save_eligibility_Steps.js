/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { SecureToken } from "../../UI/Base_Steps";
const baseUrl =
  "https://officemanagement-api.dev.appsensesolutions.com/api/Patients/0c063372-6808-f30b-2df6-73ebc444bd13/eligibility";

  let response;
When("PATCH Eligibility", () => {
    const payload =   [
      {
        "insuranceId": "1",
        "eligibilityStatus": "ACTIVE_COVERAGE",
        "coInsurance": 30,
        "coPayment": 0,
        "timePeriodQualifier": null,
        "deductible": 100,
        "rejectReason": null,
        "benefitInquiryId": "72Amo2AYJ9r1kbWH5kFc"
      }
    ];
  
    cy.request({
      method: "PATCH",
      url: baseUrl,
      headers: {
        Authorization: `Bearer ${SecureToken}`,
      },
      body: payload,
    }).then((res) => {
      response = res;
    });
  });
  
  Then("API should return status code should be 200", () => {
    expect(response.status).to.equal(200);
  });  
When("PATCH Eligibility with wrrong payload", () => {
    const payload = 
      {
        insuranceId: 1,
        eligibilityStatus: "ACTIVE_COVERAGE",
        coInsurance: 30,
        coPayment: null,
        timePeriodQualifier: null,
        deductible: 0,
        rejectReason: null,
        benefitInquiryId: "72Amo2AYJ9r1kbWH5kFc",
      };
  
    cy.request({
      method: "PATCH",
      url: baseUrl,
      headers: {
        Authorization: `Bearer ${SecureToken}`,
      },
      failOnStatusCode: false,
      body: payload,
    }).then((res) => {
      response = res;
    });
  });
  
  Then("API should return status code should be 400", () => {
    expect(response.status).to.equal(400);
  });  