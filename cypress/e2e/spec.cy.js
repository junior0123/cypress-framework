const { LoginMethods } = require("./pages/login.methods")

describe('template spec', () => {
  it('passes', () => {
    const username = "juan1234.";
    const password = "juan1234.";
    cy.visit('https://www.demoblaze.com/')
    cy.get('a[data-target="#logInModal"]').click()
    LoginMethods.login(username, password)
    cy.get('a#nameofuser').should('contains.text',username)
    cy.wait(10000)
  })
})