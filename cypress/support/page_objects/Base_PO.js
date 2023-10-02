/// <reference types="cypress"/>

class Base_PO{

    navigate(path){
        cy.visit(Cypress.env('url')+path);
        cy.viewport(1920, 1080);
    }
    getPageTitle(){
        return cy.title();
    }

}
export default Base_PO;