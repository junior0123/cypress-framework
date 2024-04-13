const { CommonPageData } = require("../pages/common-page/common-page.data")
const { CommonPageMethods } = require("../pages/common-page/common-page.methods")
const { SignupMethods } = require("../pages/signup/signup.methods")
const { Logger } = require("../utils/logger")

describe('Register and authentication', ()=>{
    it(CommonPageData.testSuites.registerAndAuthentication,()=> {
const username = "Juan1234..";
const password = "Juan1234..";

        Logger.stepNumber(1)
        Logger.step("Navigate to home page")
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step("Click on signup Option")
        CommonPageMethods.clickOnSignupOption();

        Logger.stepNumber(3)
        Logger.step("Complete mandatory data")
        SignupMethods.insertUsername(username);
        SignupMethods.insertPassword(password);

        Logger.stepNumber(4)
        Logger.step("Click on Signup button")
        SignupMethods.clickOnSignupButton();
        Logger.verification('Verification that the message is showed ')
        SignupMethods.verifySignupSuccesfulMessageIsDisplayed()
    })
})