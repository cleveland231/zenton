
describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');

    cy.intercept('GET', 'https://api.quotable.io/random', {
      "_id": "CPhGOJeapNYZ",
      "content": "testing testing testing 1 2 3",
      "author": "Sister beretta",
      "tags": [
        "famous-quotes"
      ],
      "authorSlug": "sister-beretta",
      "length": 24,
      "dateAdded": "2020-09-09",
      "dateModified": "2020-09-09"
    })
  });

  it('Should render home page', () => {
    cy.contains('h1', 'zenton')
    cy.contains('h2', 'Home')
  })

  it('Should be able to write quote', () => {
    cy.get('textarea[name="quote"]')
      .type('you only live once')
    cy.get('[class*=quote-button]').click()
    cy.contains('div', 'you only live once')
  })

  it('Should be able to click heart to favorite quote', () => {
    cy.get('[class*=favorite-button]').first().click()
    cy.get('[class*=favorites]').click()
    cy.contains('div', 'testing testing testing 1 2 3')
  })

  it('Should render a error message if user visits invalid URL', () => {
    cy.visit('http://localhost:3000/example')
      .contains('This Path Does Not Exist!')
  })
})