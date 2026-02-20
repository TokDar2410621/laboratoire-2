describe('Redirection page principale vers page de détails', () => {
  it('redirige vers detailBlog.html en cliquant sur une carte', () => {
    cy.visit('/index.html')
    cy.get('.card a.stretched-link').first().click({force: true})
    cy.url().should('include', 'detailBlog.html?id=')
    cy.get('#publication-titre').should('not.be.empty')
  })

  it('redirige vers index.html en cliquant sur le logo', () => {
    cy.visit('/detailBlog.html?id=1')
    cy.get('.navbar-brand').click()
    cy.url().should('include', 'index.html')
    cy.get('.card').should('have.length.at.least', 7)
  })
})
