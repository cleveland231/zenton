

describe('home page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.quotable.io/random', {
      fixture: 'random.json'})
    cy.intercept('GET', 'https://api.quotable.io/quotes?page=1', {
      fixture: 'pageOne.json'})
    cy.visit('http://localhost:3000')
  });

  it('Should render home page', () => {
    cy.contains('h1', 'zenton')
    cy.contains('h2', 'Home')
  })

  it('Should render correct amount of quotes on page load (a random quote and page of quotes from api)', () => {
    cy.get('[class*=user-quote]').should('have.length', 21)
    cy.contains('div', 'testing testing testing 1 2 3')
    cy.contains('div', "I've missed more than 90000000000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.")
  })

  it('Should be able to write quote', () => {
    cy.get('textarea[name="quote"]')
      .type('you only live once')
    cy.get('[class*=quote-button]').click()
    cy.contains('div', 'you only live once')
    cy.get('[class*=user-quote]').should('have.length', 22)
  })

  it('Should be able to click heart to favorite quote', () => {
    cy.get('[class*=favorite-button]').first().click()
    cy.get('[class*=favorites]').click()
    cy.contains('div', 'testing testing testing 1 2 3')
    cy.contains('div', 'Sister beretta')
  })

  it('Should render a error message if user visits invalid URL', () => {
    cy.visit('http://localhost:3000/example')
      .contains('This Path Does Not Exist!')
  })
})