const { CommonPageData } = require("../pages/common-page/common-page.data")
const { CommonPageMethods } = require("../pages/common-page/common-page.methods");
const { LoginData } = require("../pages/login/login.data");
const { LoginMethods } = require("../pages/login/login.methods");
const { SignupMethods } = require("../pages/signup/signup.methods")
const { Logger } = require("../utils/logger")
const { HomeMethods } = require("../pages/home/home.methods");
const { ProductDetailsMethods } = require("../pages/product-details/product-details.methods");
const { CartMethods } = require("../pages/cart/cart.methods");
const { PlaceOrderMethods } = require("../pages/place-order/place-order.methods");
const { PlaceOrderData } = require("../pages/place-order/place-order.data");
const { PurchaseOrderMethods } = require("../pages/purchase-order/purchase-order.methods");
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
    it('Add product to cart', () => {

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
        Logger.step("Select monitors category")
        HomeMethods.clickOnMonitorsOption()
       
        Logger.stepNumber(6)
        Logger.step("Click on specific product")
        HomeMethods.clickOnProductLink("Apple monitor 24")

        Logger.stepNumber(7)
        Logger.step("Verify that the product pase is displayed")
        ProductDetailsMethods.verifyProductDetailsPageIsDisplayed()

        Logger.stepNumber(8)
        Logger.step("Click on add to cart")
        ProductDetailsMethods.clickOnAddToCartButton()

        Logger.stepNumber(9)
        Logger.step("verificar confirmation message is displayed")
        ProductDetailsMethods.verifyProductAddedMessage()
        CommonPageMethods.clickOnCartOption()
        CartMethods.verifyProductAdded("Apple monitor 24")
    });

    it('Make a purchase', () => {

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
        Logger.step("Select monitors category")
        HomeMethods.clickOnMonitorsOption()
       
        Logger.stepNumber(6)
        Logger.step("Click on specific product")
        HomeMethods.clickOnProductLink("Apple monitor 24")

        Logger.stepNumber(7)
        Logger.step("Verify that the product pase is displayed")
        ProductDetailsMethods.verifyProductDetailsPageIsDisplayed()

        Logger.stepNumber(8)
        Logger.step("Click on add to cart")
        ProductDetailsMethods.clickOnAddToCartButton()

        Logger.stepNumber(9)
        Logger.step("verificar confirmation message is displayed")
        ProductDetailsMethods.verifyProductAddedMessage()
        Logger.step("Click on Cart option")
        CommonPageMethods.clickOnCartOption()

        Logger.step("Verify that the page Cart is showed")
        CartMethods.verifyCartPageIsShow()
        CartMethods.verifyProductAdded("Apple monitor 24")

        Logger.stepNumber(10)
        Logger.step("Click on Place order button")
        CartMethods.clickOnPlaceOrderButton()

        Logger.stepNumber(11)
        Logger.step("insert information")
        PlaceOrderMethods.insertOrdenInformation(PlaceOrderData.testData)
     
        Logger.stepNumber(12)
        Logger.step("Click on Purchase button")
        PlaceOrderMethods.clickOnPurchaseButton()
        
        Logger.stepNumber(13)
        Logger.step("Click on ok button")
        PurchaseOrderMethods.verifyGreenCheckMarkIsDisplayed()
        PurchaseOrderMethods.clickOnOkButton()
        HomeMethods.verifyHomePageIsShow()


    });
})