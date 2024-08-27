describe('home', () => {
  it('webapp deve estar online', () => {
    cy.visit('/') // Esta vindo do cypress.config.js
    cy.title().should('eq', 'Gerencie suas tarefas com Mark L')
  })
})