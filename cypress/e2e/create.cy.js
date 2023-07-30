describe('Create Page', () => {
  beforeEach(() => {
    cy.stubRequest('GET', '/quotes', 200, 'quotes').as('getQuotes')
    cy.stubRequest('GET', '/images', 200, 'images').as('getImages')
    cy.stubRequest('GET', '/posters', 200, 'posters').as('getPosters')
    // cy.intercept('POST', 'http://localhost:3000/api/v1/posters', {image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80', quote: 'Example Quote', type: 'wholesome'}).as('postFavorite');
    cy.visit('http://localhost:3000/create')
  })

  it('Should display a form to create a custom poster', () => {
    cy.wait('@getQuotes').wait('@getImages').wait('@getPosters').then((interception) => {
      cy.get('#form-page').contains('h2', 'make your own quote!')
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
      cy.get('.form-button').first().click()
        .get('input[type="text"]').first().type('https://upload.wikimedia.org/wikipedia/commons/9/9a/Below_Golden_Gate_Bridge.jpeg')
        .get('input[type="text"]').last().type('Example Quote')
        .get('input[type="submit"]').click()
        .url().should('eq', 'http://localhost:3000/poster/wholesome')
        .get('.quote').should('have.text', 'Example Quote')
        .get('.emojis').contains('button', '🥹')
    })
  })
}) 