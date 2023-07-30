describe('Random Poster Page', () => {

  const stubRequest = (method, url, code, fixture) => {
    return cy.intercept(method, `https://stretch-api.onrender.com/api/v1${url}`, {
      statusCode: code,
      fixture: fixture
    });
  }

  beforeEach(() => {
    stubRequest('GET', '/quotes', 200, 'quotes').as('getQuotes')
    stubRequest('GET', '/images', 200, 'images').as('getImages')
    stubRequest('GET', '/posters', 200, 'posters').as('getPosters')
    cy.visit('http://localhost:3000')
  })

  it('Should click on wholesome button to generate a wholesome poster', () => {
    cy.wait('@getQuotes').wait('@getImages').wait('@getPosters').then((interception) => {
      cy.get('#wholesome').should('have.text', 'click here!').click()
        .url().should('eq', 'http://localhost:3000/poster/wholesome')
        .get('.frame').find('.img')
        .get('.img').find('.quote')
        .get('.emojis').contains('button', '🥹')
        .get('.poster-buttons').children().first().should('have.text', '🥹 random wholesome')
        .get('.poster-buttons').children().eq(1).should('have.text', '😈 random chaotic')
        .get('.poster-buttons').children().last().should('have.text', '💛 save to favorites')
    })
  })

  it('Should click on chaotic button to generate a chaotic poster', () => {
    cy.wait('@getQuotes').wait('@getImages').wait('@getPosters').then((interception) => {
      cy.get('#chaotic').should('have.text', 'click here!').click()
        .url().should('eq', 'http://localhost:3000/poster/chaotic')
        .get('.frame').find('.img')
        .get('.img').find('.quote')
        .get('.emojis').contains('button', '😈')
        .get('.poster-buttons').children().first().should('have.text', '🥹 random wholesome')
        .get('.poster-buttons').children().eq(1).should('have.text', '😈 random chaotic')
        .get('.poster-buttons').children().last().should('have.text', '💛 save to favorites')
    })
  })

  it('Should randomly generate posters and save favorites', () => {
    stubRequest('POST', '/posters', 201, 'newPoster')
    cy.wait('@getQuotes').wait('@getImages').wait('@getPosters').then((interception) => {
      cy.get('#wholesome').should('have.text', 'click here!').click()
        .url().should('eq', 'http://localhost:3000/poster/wholesome')
        .get('.poster-buttons').children().first().click()
        .get('.frame').find('.img')
        .get('.img').find('.quote')
        .get('.emojis').contains('button', '🥹')
        .get('.poster-buttons').children().eq(1).click()
        .get('.frame').find('.img')
        .get('.img').find('.quote')
        .get('.emojis').contains('button', '😈')
    })
  })
})