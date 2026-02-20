describe('Coding session', () => {
  it('clicks on a link on the cypress example website and makes sure link changed', () => {
    cy.visit('https://example.cypress.io')
    cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul > :nth-child(1) > a')
        .click()
    cy.url().should('include', '/commands/querying')
  })

  it('types into a text field and chains assertions', () => {
    cy.visit('https://example.cypress.io/commands/querying')
    cy.get('#inputName')
        .type("Hello world")
        .should('be.visible')
        .and('have.value', 'Hello world')
  })
})