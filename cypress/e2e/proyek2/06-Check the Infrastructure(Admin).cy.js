describe('06-Check the Infrastructure(Admin)', () => {

  Cypress.on('uncaught:exception', () => false)

  it('infrastructure (create)', () => {
    cy.visit('http://127.0.0.1/login')

    // form
    cy.get('#email').type('superadmin@gmail.com')
    cy.get('#password-input').type('password')

    // sign in
    cy.get(':nth-child(5) > .btn').click()

    // infra
    cy.visit('http://127.0.0.1/infrastructure')

    cy.get('.flex-shrink-0 > .btn').click({ force: true })

    // form
    cy.get('#thumbnail').selectFile('assets/image/image.jpeg')
    cy.get('#title').type('infrastructure title 1')
    cy.get('#body').type('infrastructure body 1')

    // save
    cy.get('.modal-footer > .btn-primary').click({ force: true })

    cy.contains('Infrastructure has been created successfully! ')
  })

  it('infrastructure (except thumbnail)', () => {
    cy.visit('http://127.0.0.1/login')

    // form
    cy.get('#email').type('superadmin@gmail.com')
    cy.get('#password-input').type('password')

    // sign in
    cy.get(':nth-child(5) > .btn').click()

    // infra
    cy.visit('http://127.0.0.1/infrastructure')

    cy.get('.flex-shrink-0 > .btn').click({ force: true })

    // form
    // cy.get('#thumbnail').selectFile('assets/image/image.jpeg')
    cy.get('#title').type('infrastructure title 2')
    cy.get('#body').type('infrastructure body 2')

    // save
    cy.get('.modal-footer > .btn-primary').click({ force: true })

    cy.contains('The thumbnail field is required.')
  })

  it('infrastructure (except title)', () => {
    cy.visit('http://127.0.0.1/login')

    // form
    cy.get('#email').type('superadmin@gmail.com')
    cy.get('#password-input').type('password')

    // sign in
    cy.get(':nth-child(5) > .btn').click()

    // infra
    cy.visit('http://127.0.0.1/infrastructure')

    cy.get('.flex-shrink-0 > .btn').click({ force: true })

    // form
    cy.get('#thumbnail').selectFile('assets/image/image.jpeg')
    // cy.get('#title').type('infrastructure title 2')
    cy.get('#body').type('infrastructure body 2')

    // save
    cy.get('.modal-footer > .btn-primary').click({ force: true })

    cy.contains('The title field is required.')
  })

  it('infrastructure (except content)', () => {
    cy.visit('http://127.0.0.1/login')

    // form
    cy.get('#email').type('superadmin@gmail.com')
    cy.get('#password-input').type('password')

    // sign in
    cy.get(':nth-child(5) > .btn').click()

    // infra
    cy.visit('http://127.0.0.1/infrastructure')

    cy.get('.flex-shrink-0 > .btn').click({ force: true })

    // form
    cy.get('#thumbnail').selectFile('assets/image/image.jpeg')
    cy.get('#title').type('infrastructure title 2')
    // cy.get('#body').type('infrastructure body 2')

    // save
    cy.get('.modal-footer > .btn-primary').click({ force: true })

    cy.contains('The body field is required.')
  })

  it('infrastructure (edit)', () => {
    // avoid 429 too many request
    cy.wait(10000)

    cy.visit('http://127.0.0.1/login')

    // form
    cy.get('#email').type('superadmin@gmail.com')
    cy.get('#password-input').type('password')

    // sign in
    cy.get(':nth-child(5) > .btn').click()

    // infra
    cy.visit('http://127.0.0.1/infrastructure')

    // menu
    cy.get(':nth-child(1) > :nth-child(5) > .dropdown > #dropdownMenuLink > .fas').click({ force: true })
    cy.get(':nth-child(1) > :nth-child(5) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click({ force: true })

    cy.get('.modal-footer > .btn-primary').click()

    cy.contains('Infrastructure has been updated successfully!')
  })

  it('infrastructure (excep thumbnain)', () => {
    cy.visit('http://127.0.0.1/login')

    // form
    cy.get('#email').type('superadmin@gmail.com')
    cy.get('#password-input').type('password')

    // sign in
    cy.get(':nth-child(5) > .btn').click()

    // infra
    cy.visit('http://127.0.0.1/infrastructure')

    // menu
    cy.get(':nth-child(1) > :nth-child(5) > .dropdown > #dropdownMenuLink > .fas').click({ force: true })
    cy.get(':nth-child(1) > :nth-child(5) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click({ force: true })

    // cy.get('#thumbnail').selectFile('assets/image/image.jpeg')
    cy.get('#title').type(' update')
    cy.get('#body').type(' update')

    cy.get('.modal-footer > .btn-primary').click()

    cy.contains('Infrastructure has been updated successfully!')
  })

  it('infrastructure (excep title)', () => {
    cy.visit('http://127.0.0.1/login')

    // form
    cy.get('#email').type('superadmin@gmail.com')
    cy.get('#password-input').type('password')

    // sign in
    cy.get(':nth-child(5) > .btn').click()

    // infra
    cy.visit('http://127.0.0.1/infrastructure')

    // menu
    cy.get(':nth-child(1) > :nth-child(5) > .dropdown > #dropdownMenuLink > .fas').click({ force: true })
    cy.get(':nth-child(1) > :nth-child(5) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click({ force: true })

    cy.get('#thumbnail').selectFile('assets/image/image.jpeg', { force: true })
    cy.get('#title').clear()
    cy.get('#body').type(' update')

    cy.get('.modal-footer > .btn-primary').click()

    cy.contains('The title field is required.')
  })

  it('infrastructure (excep content)', () => {
    cy.visit('http://127.0.0.1/login')

    // form
    cy.get('#email').type('superadmin@gmail.com')
    cy.get('#password-input').type('password')

    // sign in
    cy.get(':nth-child(5) > .btn').click()

    // infra
    cy.visit('http://127.0.0.1/infrastructure')

    // menu
    cy.get(':nth-child(1) > :nth-child(5) > .dropdown > #dropdownMenuLink > .fas').click({ force: true })
    cy.get(':nth-child(1) > :nth-child(5) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click({ force: true })

    cy.get('#thumbnail').selectFile('assets/image/image.jpeg', { force: true })
    cy.get('#title').type(' update')
    cy.get('#body').clear()

    cy.get('.modal-footer > .btn-primary').click()

    cy.contains('The body field is required.')
  })
})