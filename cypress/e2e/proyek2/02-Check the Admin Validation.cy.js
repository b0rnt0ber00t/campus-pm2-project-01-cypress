describe('02-Check the Admin Validation', () => {

  Cypress.on('uncaught:exception', () => false)

  it('sign in (ok)', () => {
    cy.visit('http://127.0.0.1/login')

    // form
    cy.get('#email').type('superadmin@gmail.com')
    cy.get('#password-input').type('password')

    // sign in
    cy.get(':nth-child(5) > .btn').click()
  })

  it('sign in (invalid password)', () => {
    cy.visit('http://127.0.0.1/login')

    // form
    cy.get('#email').type('superadmin@gmail.com')
    cy.get('#password-input').type('password123')

    // sign in
    cy.get(':nth-child(5) > .btn').click()

    cy.contains('These credentials do not match our records.')
  })

  it('sign in (invalid username)', () => {
    cy.visit('http://127.0.0.1/login')

    // form
    cy.get('#email').type('superadmin1@gmail.com')
    cy.get('#password-input').type('password')

    // sign in
    cy.get(':nth-child(5) > .btn').click()

    cy.contains('These credentials do not match our records.')
  })

  it('sign in (invalid username / password)', () => {
    cy.visit('http://127.0.0.1/login')

    // form
    cy.get('#email').type('blankusername@gmail.com')
    cy.get('#password-input').type('password123')

    // sign in
    cy.get(':nth-child(5) > .btn').click()

    cy.contains('These credentials do not match our records.')
  })

  it('user validation (prepare user 1)', () => {
    // user 1
    cy.visit('http://127.0.0.1/register')

    // form
    cy.get('#name').type('Kelompok 3')
    cy.get('#useremail').type('user1@gmail.com')
    cy.get('#password').type('Pa$$w0rd!')
    cy.get('#password_confirmation').type('Pa$$w0rd!')

    // sign up
    cy.get(':nth-child(7) > .btn').click()

    // visit user validation
    cy.visit('http://127.0.0.1/user/validation')

    // form
    cy.get('#user_selfie').selectFile('assets/image/image.jpeg')
    cy.get('#user_card_id').selectFile('assets/image/image.jpeg')

    // sage
    cy.get('.pagination > .btn').click()
  })

  it('user validation (prepare user 2)', () => {
    // user 2
    cy.visit('http://127.0.0.1/register')

    // form
    cy.get('#name').type('Kelompok 3')
    cy.get('#useremail').type('user2@gmail.com')
    cy.get('#password').type('Pa$$w0rd!')
    cy.get('#password_confirmation').type('Pa$$w0rd!')

    // sign up
    cy.get(':nth-child(7) > .btn').click()

    // visit user validation
    cy.visit('http://127.0.0.1/user/validation')

    // form
    cy.get('#user_selfie').selectFile('assets/image/image.jpeg')
    cy.get('#user_card_id').selectFile('assets/image/image.jpeg')

    // sage
    cy.get('.pagination > .btn').click()
  })

  it('user validation (prepare user 3)', () => {
    // user 3
    cy.visit('http://127.0.0.1/register')

    // form
    cy.get('#name').type('Kelompok 3')
    cy.get('#useremail').type('user3@gmail.com')
    cy.get('#password').type('Pa$$w0rd!')
    cy.get('#password_confirmation').type('Pa$$w0rd!')

    // sign up
    cy.get(':nth-child(7) > .btn').click()

    // visit user validation
    cy.visit('http://127.0.0.1/user/validation')

    // form
    cy.get('#user_selfie').selectFile('assets/image/image.jpeg')
    cy.get('#user_card_id').selectFile('assets/image/image.jpeg')

    // sage
    cy.get('.pagination > .btn').click()
  })

  it('user validation (valid)', () => {
    cy.visit('http://127.0.0.1/login')

    // form
    cy.get('#email').type('superadmin@gmail.com')
    cy.get('#password-input').type('password')

    // sign in
    cy.get(':nth-child(5) > .btn').click()

    // user validation
    cy.visit('http://127.0.0.1/user/validation')

    cy.get(':nth-child(1) > :nth-child(5) > .btn-soft-primary').click({ force: true })

    cy.contains('User has been verified successfully!')
  })

  it('user validation (invalid card id)', () => {
    cy.visit('http://127.0.0.1/login')

    // form
    cy.get('#email').type('superadmin@gmail.com')
    cy.get('#password-input').type('password')

    // sign in
    cy.get(':nth-child(5) > .btn').click()

    // user validation
    cy.visit('http://127.0.0.1/user/validation')

    cy.get(':nth-child(2) > :nth-child(5) > .btn-soft-danger').click({ force: true })

    cy.contains('User has been deleted successfully!')
  })

  it('user validation (invalid selfie)', () => {
    cy.visit('http://127.0.0.1/login')

    // form
    cy.get('#email').type('superadmin@gmail.com')
    cy.get('#password-input').type('password')

    // sign in
    cy.get(':nth-child(5) > .btn').click()

    // user validation
    cy.visit('http://127.0.0.1/user/validation')

    cy.get(':nth-child(2) > :nth-child(5) > .btn-soft-danger').click({ force: true })

    cy.contains('User has been deleted successfully!')
  })

  it('user validation (invalid selfie / card id)', () => {
    cy.visit('http://127.0.0.1/login')

    // form
    cy.get('#email').type('superadmin@gmail.com')
    cy.get('#password-input').type('password')

    // sign in
    cy.get(':nth-child(5) > .btn').click()

    // user validation
    cy.visit('http://127.0.0.1/user/validation')

    cy.get(':nth-child(2) > :nth-child(5) > .btn-soft-danger').click({ force: true })

    cy.contains('User has been deleted successfully!')
  })

})