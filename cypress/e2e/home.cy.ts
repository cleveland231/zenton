describe('home page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
      });

    it('Should render home page', () => {
        cy.contains('zenton')
        cy.contains('Home')
    })

   it('Should be able to write quote', () => {

   })

   it('Should be able to click heart to favorite quote', () => {

   })

   it('Should render a error message if user visits invalid URL', () => {
    cy.visit('http://localhost:3000/example')
      .contains('This Path Does Not Exist!')
  })
})