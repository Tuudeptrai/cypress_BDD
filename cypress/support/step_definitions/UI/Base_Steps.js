/// <reference types="cypress"/>
import { Given ,When ,Then, Before} from"@badeball/cypress-cucumber-preprocessor";

Before({tags:"@smoke"},()=>{
    cy.log("Excute before each step")
})

When(`I wait for {int} seconds`,(seconds)=>{
    cy.wait(seconds *1000);
})

export let SecureToken ="";
Given("get tocken",()=>{
  
  cy.request({
    method: 'POST',
    url: 'https://auth.dev.appsensesolutions.com/api/Login',
    body: {
      email: 'benzach.fire@gmail.com',
      password: 'new2pass',
      returnSecureToken: true,
      opaqueId: 1514516058
    }
  }).then((response) => {
    // Validate the response status code
    expect(response.status).to.eq(200);
    SecureToken = response.body.idToken;
    // Log the response body
    cy.log(JSON.stringify(response.body));
  });
});