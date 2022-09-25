
describe('favorite page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/favorite');
      });

    it('Should render favorite page', () => {
        cy.contains('h1', 'zenton')
        cy.contains('h2', 'Favorite')
    })

   it('Should be able to return to home page', () => {
        cy.get('[class*=home]').click()
        cy.contains('h2', 'Home')
   })
})