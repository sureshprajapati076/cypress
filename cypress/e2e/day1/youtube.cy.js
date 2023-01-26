describe('template spec', () => {
  it('passes', () => {
    cy.visit("https://youtube.com")
    // cy.title().should('eq','youtube')
    cy.log('HELLO WORLD')
    cy.log("=======>"+cy.title())
  })
})