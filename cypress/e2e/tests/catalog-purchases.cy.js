const { CommonPageData } = require("../pages/common-page/common-page.data")
const { CommonPageMethods } = require("../pages/common-page/common-page.methods");
const { LoginData } = require("../pages/login/login.data");
const { LoginMethods } = require("../pages/login/login.methods");
const { SignupMethods } = require("../pages/signup/signup.methods")
const { Logger } = require("../utils/logger")
const { HomeMethods } = require("../pages/home/home.methods");
const username = LoginData.validCredentials.username;
const password = LoginData.validCredentials.password;
const invalidUsername = LoginData.invalidCredentials.username;
const invalidPassword = LoginData.invalidCredentials.password;


describe(CommonPageData.testSuites.catalogAndPurchase, () => {
    it('Navigation by categories', () => {

        Logger.stepNumber(1)
        Logger.step("Navigate to DemoBlaze page")
        CommonPageMethods.navigateToDemoBlaze();

        Logger.subStep("Click on Login Option")
        Logger.stepNumber(2)
        Logger.step("Click on login Option")
        CommonPageMethods.clickOnLoginOption();

        Logger.stepNumber(3)
        Logger.step("Complete mandatory data")
        LoginMethods.login(username, password)
        Logger.verification('Verification that the welcome message is showed')
        CommonPageMethods.verifySignedUser(username)

        Logger.stepNumber(4)
        Logger.step("Navigate to Home Page")
        CommonPageMethods.clickOnHomeOption()

        Logger.stepNumber(5)
        Logger.step("Select laptops category")
        HomeMethods.clickOnMonitorsOption()
        Logger.verification("Verify that apple monitor is displayed to the user")
        HomeMethods.verifyProductDisplayed('Apple monitor 24')
        Logger.verification("Verify that AsusMonitor is displayed to the user")
        HomeMethods.verifyProductDisplayed('ASUS Full HD')
        
        
    });
})