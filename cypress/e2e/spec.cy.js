const { CommonPageData } = require("./pages/common-page/common-page.data")
const { CommonPageElements } = require("./pages/common-page/common-page.elements")
const { HomeMethods } = require("./pages/home/home.methods")
const { LoginMethods } = require("./pages/login/login.methods")
const { Logger } = require("./utils/logger")

describe('template spec', () => {
  it('passes', () => {
    const user = "juan1234."
    const password = "juan1234."
    Logger.stepNumber(1)
    Logger.step('Navigate to demoblaze page')
    cy.visit(CommonPageData.url)

    Logger.stepNumber(2)
    Logger.step("Click on Login link")
    CommonPageElements.topMenu.login.click()

    Logger.stepNumber(3)
    Logger.step(`Login with credentials: "${user}/${password}"`)
    LoginMethods.login(user, password)
    Logger.verification(`The Home Page should show "welcome ${user}  "`)
    cy.get('a#nameofuser').should('contain.text', user)

  })
})