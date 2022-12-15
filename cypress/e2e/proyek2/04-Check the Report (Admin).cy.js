describe('04-Check the Report (Admin)', () => {

  Cypress.on('uncaught:exception', () => false)

  it('report (edit)', () => {
    cy.visit('http://127.0.0.1/login')

    // form
    cy.get('#email').type('superadmin@gmail.com')
    cy.get('#password-input').type('password')

    // sign in
    cy.get(':nth-child(5) > .btn').click()

    // report
    cy.visit('http://127.0.0.1/report')

    // menu
    cy.get(':nth-child(1) > :nth-child(8) > .dropdown > #dropdownMenuLink > .fas').click({ force: true })
    cy.get(':nth-child(1) > :nth-child(8) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click({ force: true })

    cy.get('.modal-dialog > .modal-content > form > .modal-body > :nth-child(2) > #select-status').first().select(2)

    // update
    cy.get('.modal-dialog > .modal-content > form > .modal-footer > .btn-primary').first().click()

    cy.contains('Report has been updated successfully!')
  })

  it('report (delete)', () => {
    cy.visit('http://127.0.0.1/login')

    // form
    cy.get('#email').type('superadmin@gmail.com')
    cy.get('#password-input').type('password')

    // sign in
    cy.get(':nth-child(5) > .btn').click()

    // report
    cy.visit('http://127.0.0.1/report')

    // menu
    cy.get(':nth-child(1) > :nth-child(8) > .dropdown > #dropdownMenuLink > .fas').click({ force: true })
    cy.get(':nth-child(1) > :nth-child(8) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click({ force: true })

    cy.contains('Report has been deleted successfully!')
  })

})