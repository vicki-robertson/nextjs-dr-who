describe('Contact Page', () => {

    context('desktop resolution', () => {
        beforeEach(() => {
          cy.viewport(1728, 1117)
        })

       

      it('should navigate to the contact page', () => {
     
        cy.visit('http://localhost:3000/')
        cy.wait(1000);

        cy.get('a[href*="/contact/"]').click()
        cy.wait(1000);

        cy.url().should('include', '/contact')
        cy.wait(1000);

        cy.get('h2').contains('Envia tu mensaje al Doctor')
        cy.wait(1000);
      });    
      
      beforeEach(() => {
        cy.visit('http://localhost:3000/contact');
        })

  

  it('Should display the title', () => {
    cy.get('h2').should('have.text', 'Envia tu mensaje al Doctor');
  });

  it('Should render the contact form', () => {
    cy.get('form').should('exist');
  });


  it('Should submit the form successfully and show a success message', () => {
    // Fill in form fields with appropriate data
    cy.get('input[name="name"]').type('Darlik');
    cy.wait(1000);
    cy.get('input[name="email"]').type('darlik@example.com');
    cy.wait(1000);
    cy.get('textarea[name="message"]').type('Exterminate!!!');
    cy.wait(1000);

    // Submit the form
    cy.get('form').submit();
    cy.wait(1000);

    // success message is displayed 
    cy.get('.toast').should('exist');
    cy.wait(1000);
    cy.contains('Geronimo').should('exist');
  });
    });
  });

