describe('Check the Report (User)', () => {

  Cypress.on('uncaught:exception', () => false)

  it('report (create)', () => {
    cy.visit('http://127.0.0.1/login')

    // form
    cy.get('#email').type('user@gmail.com')
    cy.get('#password-input').type('password')

    // sign in
    cy.get(':nth-child(5) > .btn').click()

    // report
    cy.visit('http://127.0.0.1/report')

    // add
    cy.get('.flex-shrink-0 > .btn').click({ force: true })

    // form
    cy.get(':nth-child(1) > #title').type('report title 1')
    cy.get(':nth-child(2) > #description').type('report description 1')

    cy.get('#modal-form-add-report > .modal-dialog > .modal-content > form > .modal-footer > .btn-primary').click({ force: true })

    cy.contains('Report has been created successfully! ')
  })

  it('report (update)', () => {
    cy.visit('http://127.0.0.1/login')

    // form
    cy.get('#email').type('user@gmail.com')
    cy.get('#password-input').type('password')

    // sign in
    cy.get(':nth-child(5) > .btn').click()

    // report
    cy.visit('http://127.0.0.1/report')

    // edit
    cy.get(':nth-child(1) > :nth-child(8) > .dropdown > #dropdownMenuLink').click({ force: true })
    cy.get(':nth-child(1) > :nth-child(8) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()

    cy.get('.modal-dialog > .modal-content > form > .modal-body > :nth-child(2) > #title').first().type(' update')
    cy.get('.modal-dialog > .modal-content > form > .modal-body > :nth-child(3) > #description').first().type(' update')

    // save
    cy.get('.modal-dialog > .modal-content > form > .modal-footer > .btn-primary').first().click({ force: true })

    cy.contains('Report has been updated successfully!')
  })

  it('report (delete)', () => {
    cy.visit('http://127.0.0.1/login')

    // form
    cy.get('#email').type('user@gmail.com')
    cy.get('#password-input').type('password')

    // sign in
    cy.get(':nth-child(5) > .btn').click()

    // report
    cy.visit('http://127.0.0.1/report')

    // edit
    cy.get(':nth-child(1) > :nth-child(8) > .dropdown > #dropdownMenuLink').click({ force: true })
    cy.get(':nth-child(1) > :nth-child(8) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()

    cy.contains('you do not have access to this route!')
  })
})