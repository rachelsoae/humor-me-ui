describe('Create Page', () => {
  beforeEach(() => {
    cy.loadData();
    cy.visit('http://localhost:3000/')
  })

  it('Should display a form to create a custom poster', () => {
    cy.wait('@getQuotes').wait('@getImages').wait('@getPosters').then((interception) => {
      cy.get('[href="/create"]').click()
        .get('#form-page').contains('h2', 'make your own quote!')
        .get('form').contains('label', '1. select your quote type')
        .get('.form-button').first().should('have.text', '🥹 wholesome')
        .get('.form-button').eq(1).should('have.text', '😈 chaotic')
        .get('form').contains('label', '2. add your image url')
        .get('input[type="text"]').first().should('have.attr', 'placeholder', 'insert image link here')
        .get('form').contains('label', '3. create your quote')
        .get('input[type="text"]').last().should('have.attr', 'placeholder', 'insert quote here')
        .get('input[type="submit"]').should('have.attr', 'value', '✏️ create')
    })
  })

  it('Should submit a poster based on user input', () => {
    cy.stubRequest('POST', '/posters', 201, 'newPoster').as('submitPoster')
    cy.wait('@getQuotes').wait('@getImages').wait('@getPosters').then((interception) => {
      cy.get('[href="/create"]').click()
        .get('.form-button').first().click()
        .get('input[type="text"]').first().type('https://upload.wikimedia.org/wikipedia/commons/9/9a/Below_Golden_Gate_Bridge.jpeg')
        .get('input[type="text"]').last().type('Example Quote')
        .get('input[type="submit"]').click()
        .url().should('eq', 'http://localhost:3000/poster/wholesome')
        .get('.quote').should('have.text', 'Example Quote')
        .get('.emojis').contains('button', '🥹')
    })
  })
}) 