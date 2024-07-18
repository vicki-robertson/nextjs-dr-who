describe('About Page Tests', () => {
    context('desktop resolution', () => {
        beforeEach(() => {
          cy.viewport(1728, 1117)
        })

        it('should navigate to the about page', () => {
            // Start from the index page
            cy.visit('http://localhost:3000/')
         
            // Find a link with an href attribute containing "about" and click it
            cy.get('a[href*="/doctors/about/"]').click()
         
            // The new url should include "/about"
            cy.url().should('include', '/about')
         
            // The new page should contain an h1 with "Conoce a"
            cy.get('h2').contains('Conoce a')
          });

    beforeEach(() => {
      cy.visit('http://localhost:3000/doctors/about');
      })

      it('Should display the title', () => {
        cy.get('h2').contains('Conoce a'); 
    });

    it('Should display the doctor information paragraph', () => {
        cy.get('p').should('be.visible');
      });
  
    it('Should display the doctor image', () => {
      cy.get('img').should('be.visible');
    });
  
    it('Should navigate to external link on button click', () => {
      cy.get('[href="https://www.doctorwho.tv/"]').click();
      // Assert that the new page has the expected title or content
      cy.title().should('include', 'Doctor');
    });
  });
});
  
    