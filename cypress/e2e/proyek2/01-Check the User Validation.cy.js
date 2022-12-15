describe('01-Check the User Validation', () => {

  Cypress.on('uncaught:exception', () => false)

  it('register (ok)', () => {
    cy.visit('http://127.0.0.1/register')

    // form
    cy.get('#name').type('Kelompok 3')
    cy.get('#useremail').type('kelompok3.1@gmail.com')
    cy.get('#password').type('Pa$$w0rd!')
    cy.get('#password_confirmation').type('Pa$$w0rd!')

    // sign up
    cy.get(':nth-child(7) > .btn').click()
  })

  it('register (invalid password)', () => {
    cy.visit('http://127.0.0.1/register')

    // form
    cy.get('#name').type('Kelompok 3')
    cy.get('#useremail').type('kelompok3.2@gmail.com')
    cy.get('#password').type('password')
    cy.get('#password_confirmation').type('password')

    // sign up
    cy.get(':nth-child(7) > .btn').click()

    cy.contains('The password must be at least 8 characters and contain at least one uppercase character, one number, and one special character.')
  })

  it('register (invalid email)', () => {
    cy.visit('http://127.0.0.1/register')

    // form
    cy.get('#name').type('Kelompok 3')
    cy.get('#useremail').type('kelompok3.3')
    cy.get('#password').type('Pa$$w0rd!')
    cy.get('#password_confirmation').type('Pa$$w0rd!')

    // sign up
    cy.get(':nth-child(7) > .btn').click({ force: true })

    cy.contains('The email must be a valid email address.')
  })

  it('register (blank name)', () => {
    cy.visit('http://127.0.0.1/register')

    // form
    cy.get('#name')
    cy.get('#useremail').type('kelompok3.4@gmail.com')
    cy.get('#password').type('Pa$$w0rd!')
    cy.get('#password_confirmation').type('Pa$$w0rd!')

    // sign up
    cy.get(':nth-child(7) > .btn').click()

    cy.contains('The name field is required.')
  })

  it('user validation (ok)', () => {
    cy.visit('http://127.0.0.1/login')

    // form
    cy.get('#email').type('kelompok3.1@gmail.com')
    cy.get('#password-input').type('Pa$$w0rd!')

    // sign in
    cy.get(':nth-child(5) > .btn').click()

    // visit user validation
    cy.visit('http://127.0.0.1/user/validation')

    // form
    cy.get('#user_selfie').selectFile('assets/image/image.jpeg')
    cy.get('#user_card_id').selectFile('assets/image/image.jpeg')

    // sage
    cy.get('.pagination > .btn').click()

    cy.contains('User will verify soon!')
  })

  it('user validation (no selfie)', () => {
    cy.visit('http://127.0.0.1/login')

    // form
    cy.get('#email').type('test@gmail.com')
    cy.get('#password-input').type('password')

    // sign in
    cy.get(':nth-child(5) > .btn').click()

    // visit user validation
    cy.visit('http://127.0.0.1/user/validation')

    // form
    cy.get('#user_card_id').selectFile('assets/image/image.jpeg')

    // sage
    cy.get('.pagination > .btn').click()

    cy.contains('The user selfie field is required.')
  })

  it('user validation (no card id)', () => {
    cy.visit('http://127.0.0.1/login')

    // form
    cy.get('#email').type('test@gmail.com')
    cy.get('#password-input').type('password')

    // sign in
    cy.get(':nth-child(5) > .btn').click()

    // visit user validation
    cy.visit('http://127.0.0.1/user/validation')

    // form
    cy.get('#user_selfie').selectFile('assets/image/image.jpeg')

    // sage
    cy.get('.pagination > .btn').click()

    cy.contains('The user card id field is required.')
  })

})