// cypress/integration/doctors_card_spec.js

describe('DoctorsCard Component Tests', () => {
    
    context('desktop resolution', () => {
        beforeEach(() => {
          cy.viewport(1728, 1117)
        })
    
    beforeEach(() => {
      cy.visit('http://localhost:3000/doctors');
    });
  
    it('Should render the DoctorsCard component', () => {
      cy.get('h3').should('exist');
      cy.get('h4').should('exist');
      cy.get('p').should('exist');
      cy.get('button').should('exist');
    });
  })
})