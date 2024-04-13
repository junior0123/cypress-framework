const { CommonPageData } = require("../pages/common-page/common-page.data")
const { CommonPageMethods } = require("../pages/common-page/common-page.methods");
const { LoginData } = require("../pages/login/login.data");
const { LoginMethods } = require("../pages/login/login.methods");
const { SignupMethods } = require("../pages/signup/signup.methods")
const { Logger } = require("../utils/logger")
const username = LoginData.validCredentials.username;
const password = LoginData.validCredentials.password;
describe(CommonPageData.testSuites.login, () => {
    it('Login with valid credentials', () => {

        Logger.stepNumber(1)
        Logger.step("Navigate to home page")
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step("Click on login Option")
        CommonPageMethods.clickOnLoginOption();

        Logger.stepNumber(3)
        Logger.step("Complete mandatory data")
        LoginMethods.login(username, password)
        Logger.verification('Verification that the welcome message is showed')
        CommonPageMethods.verifySignedUser(username)
    });
})