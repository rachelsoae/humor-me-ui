describe('Favorites Page', () => {

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
    cy.visit('http://localhost:3000/favorites')
  })

  it('Should display favorite posters and their respective images, quotes, and emojis', () => {
    cy.wait('@getQuotes').wait('@getImages').wait('@getPosters').then((interception) => {
      cy.get('.cards-grid').children().should('have.length', 3)
        .get('.cards-grid').children().first().find('.img')
        .get('.cards-grid').children().first().find('.quote')
        .get('.cards-grid').children().first().find('.emojis')
        .get('.cards-grid').children().last().find('.img')
        .get('.cards-grid').children().last().find('.quote')
        .get('.cards-grid').children().last().find('.emojis')
    })
  })

  it('Should display a helpful message if no favorites are saved', () => {
    stubRequest('/posters', 200, 'null').as('getNull')
    cy.wait('@getQuotes').wait('@getImages').wait('@getNull').then((interception) => {
      cy.get('h2').should('have.text', "💛 You haven't saved any favorites yet! 💛")
    })
  })

  it('Should handle 404 errors and navigate the user back to the home page', () => {
    cy.wait('@getQuotes').wait('@getImages').wait('@getPosters').then((interception) => {
      cy.visit('http://localhost:3000/error')
        .get('.error-message').should('have.text', "🤕  Uh-oh... There's been an error  🤕")
        .get('#error-home-button').should('have.text', '😄 go home').click()
        .url().should('eq', 'http://localhost:3000/')
    })
  })

  it('Should handle 500 level errors', () => {
    stubRequest('/quotes', 500, 'quotes').as('dropQuotes')
    stubRequest('/images', 500, 'images').as('dropImages')
    stubRequest('/posters', 500, 'posters').as('dropPosters')
    cy.wait('@dropQuotes').wait('@dropImages').wait('@dropPosters').then((interception) => {
      cy.get('.error-message').should('have.text', "🤕  Uh-oh... There's been an error  🤕")
        .get('#error-home-button').should('have.text', '😄 go home')
    })
  })
})