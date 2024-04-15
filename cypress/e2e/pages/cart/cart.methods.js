import { CommonPageMethods } from "../common-page/common-page.methods";
import { LoginMethods } from "../login/login.methods";
import { CartElements } from "./cart.elements";

export class CartMethods{
    static clickOnDeleteLink(productName) {
        CartElements.links.delete(productName).click();
    }

    static verifyProductAdded(productName) {
        CartElements.links.delete(productName).should('be.visible')
    }
    static verifyCartPageIsShow() {
        cy.url().should('include', 'cart.html')
    }

    static clickOnPlaceOrderButton() {
        CartElements.buttons.placeOrder.click()
    }

    static deleteProducts() {
        cy.get('a[onclick*="deleteItem"').each(link=> {
            link.click()
            cy.wait(1000)
        })
    }

    static emptyCart(username, password) {
        CommonPageMethods.navigateToDemoBlaze()
        CommonPageMethods.logout()
        CommonPageMethods.clickOnLoginOption()
        LoginMethods.login(username, password)
        CommonPageMethods.clickOnHomeOption()
        CommonPageMethods.clickOnCartOption()
        this.deleteProducts();
    }
}