

describe('favorite page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.quotable.io/random', {
      fixture: 'random.json'})
    cy.intercept('GET', 'https://api.quotable.io/quotes?page=1', {
      fixture: 'pageOne.json'})
    cy.visit('http://localhost:3000')
  });

  it('Should render favorite page', () => {
    cy.get('[class*=favorites]').click()
    cy.url('http://localhost:3000/favorites')
    cy.contains('h1', 'zenton')
    cy.contains('h2', 'Favorites')
  })

  it('Should be able to click heart to favorite quote and view that quote on favorite page', () => {
    cy.get('[class*=favorite-button]').first().click()
    cy.get('[class*=favorite-button]').last().click()
    cy.get('[class*=favorites]').click()
    cy.url('http://localhost:3000/favorites')
    cy.contains('div', 'testing testing testing 1 2 3')
    cy.contains('div', "Just be patient. Let the game come to you. Don't rush. Be quick, but don't hurry")
    cy.get('[class*=user-quote]').should('have.length', 2)
  })

  it('Should be able to return to home page', () => {
    cy.get('[class*=favorites]').click()
    cy.url('http://localhost:3000/favorites')
    cy.get('[class*=home]').click()
    cy.url('http://localhost:3000')
    cy.contains('h1', 'zenton')
    cy.contains('h2', 'Home')
  })
})