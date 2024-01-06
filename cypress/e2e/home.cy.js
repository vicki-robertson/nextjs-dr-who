describe('Navigation', () => {

    context('desktop resolution', () => {
        beforeEach(() => {
          // run these tests as if in an desktop
          // browser 
          cy.viewport(1728, 1117)
        })

    beforeEach(() => {
          cy.visit('http://localhost:3000/');
          })

    it('should contain an h1 with the title The Giggle', () => {
      cy.get('h1').contains('The Giggle')
    })

    it('should find a button', () => {
      cy.get('button').contains('Ver ahora')
    })

    it('Should display a carousel image', () => {
      cy.get('img').should('be.visible');
    })
  })
})