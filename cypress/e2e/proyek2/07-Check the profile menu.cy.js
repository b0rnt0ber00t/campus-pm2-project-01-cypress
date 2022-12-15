describe('07-Check the profile menu', () => {

  Cypress.on('uncaught:exception', () => false)

  it('profile', () => {
    cy.visit('http://127.0.0.1/login')

    // form
    cy.get('#email').type('superadmin@gmail.com')
    cy.get('#password-input').type('password')

    // sign in
    cy.get(':nth-child(5) > .btn').click()

    cy.get('#page-header-user-dropdown > .rounded-circle').click()

    cy.get('[href="http://127.0.0.1/user/profile"] > span').click()

    cy.contains('Super Admin')
    cy.contains('superadmin@gmail.com')
  })

  it('logout', () => {
    cy.visit('http://127.0.0.1/login')

    // form
    cy.get('#email').type('superadmin@gmail.com')
    cy.get('#password-input').type('password')

    // sign in
    cy.get(':nth-child(5) > .btn').click()

    cy.get('#page-header-user-dropdown > .rounded-circle').click()

    cy.get('.dropdown-item.text-danger > span').click()

    cy.contains('Sign in to continue to Velzon.')
  })
})