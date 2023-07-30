describe('Home Page', () => {

  const stubRequest = (url, code, fixture) => {
    return cy.intercept('GET', `https://stretch-api.onrender.com/api/v1${url}`, {
      statusCode: code,
      fixture: fixture
    });
  }

  beforeEach(() => {
    stubRequest('/quotes', 200, 'quotes').as('getQuotes')
    stubRequest('/images', 200, 'images').as('getImages')
    stubRequest('/posters', 200, 'posters').as('getPosters')
    cy.visit('http://localhost:3000')
  })

  it.only('Should display title and buttons to generate, view favorites, and create posters', () => {
    cy.wait('@getQuotes').wait('@getImages').wait('@getPosters').then((interception) => {
      cy.get('.navbar').contains('h1', 'humor me')
        .get('.nav-buttons').children().should('have.length', 3)
        .get('.nav-buttons').children().first().should('have.text', '😄 generate')
        .get('.nav-buttons').children().eq(1).should('have.text', '💛 favorites')
        .get('.nav-buttons').children().last().should('have.text', '✏️ create')
    })
  })


})