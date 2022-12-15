describe('05-Check the Infrastructure(User)', () => {

  Cypress.on('uncaught:exception', () => false)

  it('infrastructure', () => {
    cy.visit('http://127.0.0.1/login')

    // form
    cy.get('#email').type('user@gmail.com')
    cy.get('#password-input').type('password')

    // sign in
    cy.get(':nth-child(5) > .btn').click()

    // infra
    cy.visit('http://127.0.0.1/infrastructure')

    cy.get(':nth-child(1) > .card > .card-footer > .card-link').click({ force: true })
  })
})