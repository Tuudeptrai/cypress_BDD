import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-xpath";
import { SecureToken } from "../../UI/Base_Steps";

When('GET patient list with last name and first name', () => {
    // Your implementation to send the API request goes here
    // Example Cypress code:
    cy.request({
      method: 'GET',
      url: 'https://officemanagement-api.dev.appsensesolutions.com/api/Patients/overview?PatientSortCriteria=LastName&PageSize=4&PageIndex=1&SortOrder=ASC&SearchValue=Powers JOSEPH',
      headers: {
        Authorization: `Bearer ${SecureToken}`,
      },
    }).as('getPatientList');
  
    // Step to store the API response for later assertions
    cy.get('@getPatientList').then((response) => {
      // Your implementation to store the response goes here
      // Example: cy.wrap(response.body).as('patientListResponse');
    });
  });
When('GET patient list with last name and  first name and patient id', () => {
    // Your implementation to send the API request goes here
    // Example Cypress code:
    cy.request({
      method: 'GET',
      url: 'https://officemanagement-api.dev.appsensesolutions.com/api/Patients/overview?PatientSortCriteria=LastName&PageSize=4&PageIndex=1&SortOrder=ASC&SearchValue=Powers JOSEPH P0000002',
      headers: {
        Authorization: `Bearer ${SecureToken}`,
      },
    }).as('getPatientList');
  
    // Step to store the API response for later assertions
    cy.get('@getPatientList').then((response) => {
      // Your implementation to store the response goes here
      // Example: cy.wrap(response.body).as('patientListResponse');
    });
  });

When('GET patient list with last name and DOB and patient id', () => {
    // Your implementation to send the API request goes here
    // Example Cypress code:
    cy.request({
      method: 'GET',
      url: 'https://officemanagement-api.dev.appsensesolutions.com/api/Patients/overview?PatientSortCriteria=LastName&PageSize=4&PageIndex=1&SortOrder=ASC&SearchValue=Powers 09/10 P0000002',
      headers: {
        Authorization: `Bearer ${SecureToken}`,
      },
    }).as('getPatientList');
  
    // Step to store the API response for later assertions
    cy.get('@getPatientList').then((response) => {
      // Your implementation to store the response goes here
      // Example: cy.wrap(response.body).as('patientListResponse');
    });
  });
When('GET patient list with last name and DOB', () => {
    // Your implementation to send the API request goes here
    // Example Cypress code:
    cy.request({
      method: 'GET',
      url: 'https://officemanagement-api.dev.appsensesolutions.com/api/Patients/overview?PatientSortCriteria=LastName&PageSize=4&PageIndex=1&SortOrder=ASC&SearchValue=Powers 09/10',
      headers: {
        Authorization: `Bearer ${SecureToken}`,
      },
    }).as('getPatientList');
  });
  When('GET patient list with last name', () => {
    // Your implementation to send the API request goes here
    // Example Cypress code:
    cy.request({
      method: 'GET',
      url: 'https://officemanagement-api.dev.appsensesolutions.com/api/Patients/overview?PatientSortCriteria=LastName&PageSize=4&PageIndex=1&SortOrder=ASC&SearchValue=Powers',
      headers: {
        Authorization: `Bearer ${SecureToken}`,
      },
    }).as('getPatientList');
  
    // Step to store the API response for later assertions
    cy.get('@getPatientList').then((response) => {
      // Your implementation to store the response goes here
      // Example: cy.wrap(response.body).as('patientListResponse');
    });
  });
When('GET patient list with not exist last name', () => {
    // Your implementation to send the API request goes here
    // Example Cypress code:
    cy.request({
      method: 'GET',
      url: 'https://officemanagement-api.dev.appsensesolutions.com/api/Patients/overview?PatientSortCriteria=LastName&PageSize=4&PageIndex=1&SortOrder=ASC&SearchValue=Pull',
      headers: {
        Authorization: `Bearer ${SecureToken}`,
      },
    }).as('getPatientList');
  
    // Step to store the API response for later assertions
    cy.get('@getPatientList').then((response) => {
      // Your implementation to store the response goes here
      // Example: cy.wrap(response.body).as('patientListResponse');
    });
  });

  When('GET patient list with first name and last name', () => {
    // Your implementation to send the API request goes here
    // Example Cypress code:
    cy.request({
      method: 'GET',
      url: 'https://officemanagement-api.dev.appsensesolutions.com/api/Patients/overview?PatientSortCriteria=LastName&PatientSearchCriteria=FirstName&PageSize=10&PageIndex=1&SortOrder=ASC&SearchValue=JOSEPH%20Powers',
      headers: {
        Authorization: `Bearer ${SecureToken}`,
      },
    }).as('getPatientList');
  });
  When('GET patient list with first name and last name and patient id', () => {
    // Your implementation to send the API request goes here
    // Example Cypress code:
    cy.request({
      method: 'GET',
      url: 'https://officemanagement-api.dev.appsensesolutions.com/api/Patients/overview?PatientSortCriteria=LastName&PatientSearchCriteria=FirstName&PageSize=10&PageIndex=1&SortOrder=ASC&SearchValue=JOSEPH%20Powers%20P0000002',
      headers: {
        Authorization: `Bearer ${SecureToken}`,
      },
    }).as('getPatientList');
  });
  When('GET patient list with first name and DOB and patient id', () => {
    // Your implementation to send the API request goes here
    // Example Cypress code:
    cy.request({
      method: 'GET',
      url: 'https://officemanagement-api.dev.appsensesolutions.com/api/Patients/overview?PatientSortCriteria=LastName&PatientSearchCriteria=FirstName&PageSize=10&PageIndex=1&SortOrder=ASC&SearchValue=JOSEPH%2009%2F10%20P0000002',
      headers: {
        Authorization: `Bearer ${SecureToken}`,
      },
    }).as('getPatientList');
  });
  When('GET patient list with first name and DOB', () => {
    // Your implementation to send the API request goes here
    // Example Cypress code:
    cy.request({
      method: 'GET',
      url: 'https://officemanagement-api.dev.appsensesolutions.com/api/Patients/overview?PatientSortCriteria=LastName&PatientSearchCriteria=FirstName&PageSize=10&PageIndex=1&SortOrder=ASC&SearchValue=JOSEPH%2009%2F10',
      headers: {
        Authorization: `Bearer ${SecureToken}`,
      },
    }).as('getPatientList');
  });
  When('GET patient list with first name', () => {
    // Your implementation to send the API request goes here
    // Example Cypress code:
    cy.request({
      method: 'GET',
      url: 'https://officemanagement-api.dev.appsensesolutions.com/api/Patients/overview?PatientSortCriteria=LastName&PatientSearchCriteria=FirstName&PageSize=10&PageIndex=1&SortOrder=ASC&SearchValue=JOSEPH',
      headers: {
        Authorization: `Bearer ${SecureToken}`,
      },
    }).as('getPatientList');
  });
  When('GET patient list with not exist first name', () => {
    // Your implementation to send the API request goes here
    // Example Cypress code:
    cy.request({
      method: 'GET',
      url: 'https://officemanagement-api.dev.appsensesolutions.com/api/Patients/overview?PatientSortCriteria=LastName&PatientSearchCriteria=FirstName&PageSize=10&PageIndex=1&SortOrder=ASC&SearchValue=Alibaba',
      headers: {
        Authorization: `Bearer ${SecureToken}`,
      },
    }).as('getPatientList');
  });
  When('GET patient list with DOB and last name', () => {
    // Your implementation to send the API request goes here
    // Example Cypress code:
    cy.request({
      method: 'GET',
      url: 'https://officemanagement-api.dev.appsensesolutions.com/api/Patients/overview?PatientSortCriteria=LastName&PatientSearchCriteria=DOB&PageSize=10&PageIndex=1&SortOrder=ASC&SearchValue=09%2F10%20Powers',
      headers: {
        Authorization: `Bearer ${SecureToken}`,
      },
    }).as('getPatientList');
  });
  When('GET patient list with DOB and first name', () => {
    // Your implementation to send the API request goes here
    // Example Cypress code:
    cy.request({
      method: 'GET',
      url: 'https://officemanagement-api.dev.appsensesolutions.com/api/Patients/overview?PatientSortCriteria=LastName&PatientSearchCriteria=DOB&PageSize=10&PageIndex=1&SortOrder=ASC&SearchValue=09%2F10%20JOSEPH',
      headers: {
        Authorization: `Bearer ${SecureToken}`,
      },
    }).as('getPatientList');
  });
  When('GET patient list with DOB and last name and first name', () => {
    // Your implementation to send the API request goes here
    // Example Cypress code:
    cy.request({
      method: 'GET',
      url: 'https://officemanagement-api.dev.appsensesolutions.com/api/Patients/overview?PatientSortCriteria=LastName&PatientSearchCriteria=DOB&PageSize=10&PageIndex=1&SortOrder=ASC&SearchValue=09%2F10%20Powers%20JOSEPH',
      headers: {
        Authorization: `Bearer ${SecureToken}`,
      },
    }).as('getPatientList');
  });
  When('GET patient list with DOB and patient id', () => {
    // Your implementation to send the API request goes here
    // Example Cypress code:
    cy.request({
      method: 'GET',
      url: 'https://officemanagement-api.dev.appsensesolutions.com/api/Patients/overview?PatientSortCriteria=LastName&PatientSearchCriteria=DOB&PageSize=10&PageIndex=1&SortOrder=ASC&SearchValue=09%2F10%20P0000002',
      headers: {
        Authorization: `Bearer ${SecureToken}`,
      },
    }).as('getPatientList');
  });
  When('GET patient list with DOB and cell phone', () => {
    // Your implementation to send the API request goes here
    // Example Cypress code:
    cy.request({
      method: 'GET',
      url: 'https://officemanagement-api.dev.appsensesolutions.com/api/Patients/overview?PatientSortCriteria=LastName&PatientSearchCriteria=DOB&PageSize=10&PageIndex=1&SortOrder=ASC&SearchValue=09%2F10%200987654322',
      headers: {
        Authorization: `Bearer ${SecureToken}`,
      },
    }).as('getPatientList');
  });
  When('GET patient list with patient id and last name', () => {
    // Your implementation to send the API request goes here
    // Example Cypress code:
    cy.request({
      method: 'GET',
      url: 'https://officemanagement-api.dev.appsensesolutions.com/api/Patients/overview?PatientSortCriteria=LastName&PatientSearchCriteria=Id&PageSize=10&PageIndex=1&SortOrder=ASC&SearchValue=P0000002%20Powers',
      headers: {
        Authorization: `Bearer ${SecureToken}`,
      },
    }).as('getPatientList');
  });
  When('GET patient list with patient id and first name', () => {
    // Your implementation to send the API request goes here
    // Example Cypress code:
    cy.request({
      method: 'GET',
      url: 'https://officemanagement-api.dev.appsensesolutions.com/api/Patients/overview?PatientSortCriteria=LastName&PatientSearchCriteria=Id&PageSize=10&PageIndex=1&SortOrder=ASC&SearchValue=P0000002%20JOSEPH',
      headers: {
        Authorization: `Bearer ${SecureToken}`,
      },
    }).as('getPatientList');
  });
  When('GET patient list with patient id and DOB', () => {
    // Your implementation to send the API request goes here
    // Example Cypress code:
    cy.request({
      method: 'GET',
      url: 'https://officemanagement-api.dev.appsensesolutions.com/api/Patients/overview?PatientSortCriteria=LastName&PatientSearchCriteria=Id&PageSize=10&PageIndex=1&SortOrder=ASC&SearchValue=P0000002%2009%2F10',
      headers: {
        Authorization: `Bearer ${SecureToken}`,
      },
    }).as('getPatientList');
  });
  When('GET patient list with patient id and cell phone', () => {
    // Your implementation to send the API request goes here
    // Example Cypress code:
    cy.request({
      method: 'GET',
      url: 'https://officemanagement-api.dev.appsensesolutions.com/api/Patients/overview?PatientSortCriteria=LastName&PatientSearchCriteria=Id&PageSize=10&PageIndex=1&SortOrder=ASC&SearchValue=P0000002%200987654322',
      headers: {
        Authorization: `Bearer ${SecureToken}`,
      },
    }).as('getPatientList');
  });
  When('GET patient list with cell phone and last name', () => {
    // Your implementation to send the API request goes here
    // Example Cypress code:
    cy.request({
      method: 'GET',
      url: 'https://officemanagement-api.dev.appsensesolutions.com/api/Patients/overview?PatientSortCriteria=LastName&PatientSearchCriteria=CellPhone&PageSize=10&PageIndex=1&SortOrder=ASC&SearchValue=0987654322%20Powers',
      headers: {
        Authorization: `Bearer ${SecureToken}`,
      },
    }).as('getPatientList');
  });
  When('GET patient list with cell phone and first name', () => {
    // Your implementation to send the API request goes here
    // Example Cypress code:
    cy.request({
      method: 'GET',
      url: 'https://officemanagement-api.dev.appsensesolutions.com/api/Patients/overview?PatientSortCriteria=LastName&PatientSearchCriteria=CellPhone&PageSize=10&PageIndex=1&SortOrder=ASC&SearchValue=0987654322%20JOSEPH',
      headers: {
        Authorization: `Bearer ${SecureToken}`,
      },
    }).as('getPatientList');
  });
  When('GET patient list with cell phone and DOB', () => {
    // Your implementation to send the API request goes here
    // Example Cypress code:
    cy.request({
      method: 'GET',
      url: 'https://officemanagement-api.dev.appsensesolutions.com/api/Patients/overview?PatientSortCriteria=LastName&PatientSearchCriteria=CellPhone&PageSize=10&PageIndex=1&SortOrder=ASC&SearchValue=0987654322%2009%2F10',
      headers: {
        Authorization: `Bearer ${SecureToken}`,
      },
    }).as('getPatientList');
  });
  When('GET patient list with cell phone and patient id', () => {
    // Your implementation to send the API request goes here
    // Example Cypress code:
    cy.request({
      method: 'GET',
      url: 'https://officemanagement-api.dev.appsensesolutions.com/api/Patients/overview?PatientSortCriteria=LastName&PatientSearchCriteria=CellPhone&PageSize=10&PageIndex=1&SortOrder=ASC&SearchValue=0987654322%20P0000002',
      headers: {
        Authorization: `Bearer ${SecureToken}`,
      },
    }).as('getPatientList');
  });




  Then('should return status code should be 200 and result', () => {
    cy.get('@getPatientList').then((response) => {
        // Assert that the response contains the 'data' property and 'patients' array
        expect(response.body).to.have.property('data');
        expect(response.body.data).to.have.property('patients').and.to.be.an('array');
    
        // Additional specific assertions for the first patient in the array
        const firstPatient = response.body.data.patients[0];
        expect(firstPatient).to.have.property('firstName', "JOSEPH");
        expect(firstPatient).to.have.property('lastName', 'Powers');
        expect(firstPatient).to.have.property('dob', '09/10/1982');
      });
  });
    
  Then('should return status code should be 200 and total patients', () => {
    cy.get('@getPatientList').then((response) => {
        // Assert that the response contains the 'data' property and 'patients' array
        expect(response.body).to.have.property('data');
        expect(response.body.data).to.have.property('patients').and.to.be.an('array');
    
        // Additional specific assertions for the first patient in the array
        const firstPatient = response.body.data.patients[1];
        expect(firstPatient).to.have.property('firstName', "JOSEPH");
        expect(firstPatient).to.have.property('lastName', 'Powers');
        expect(firstPatient).to.have.property('dob', '09/10/1982');
        const lastPatient = response.body.data.patients[0];
        expect(lastPatient).to.have.property('firstName', "Austin");
        expect(lastPatient).to.have.property('lastName', 'Powers');
        expect(lastPatient).to.have.property('dob', '01/01/2001');
      });
  });
  Then('should return status code should be 200 and no patient', () => {
    cy.get('@getPatientList').then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('data');
      expect(response.body.data).to.have.property('patients').to.be.an('array').and.to.have.length(0);
      expect(response.body.data).to.have.property('totalRecords').to.equal(0);
    });
  });