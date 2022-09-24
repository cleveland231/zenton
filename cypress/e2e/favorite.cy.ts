describe('favorite page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/favorite');
      });

    it('Should render favorite page', () => {
        cy.contains('zenton')
        cy.contains('Favorite')
    })

   it('Should be able to view favorite quotes', () => {

   })
})