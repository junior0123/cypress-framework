import { HomeElements } from "./home.elements";

export class HomeMethods {
    static clickOnPhonesOption() {
        HomeElements.categoriesMenu.phone.click();
    }
    static clickOnLaptopsOption() {
        HomeElements.categoriesMenu.laptops.click();
    }
    static clickOnMonitorsOption() {
        HomeElements.categoriesMenu.monitors.click();
    }
    static clickOnProductLink(productName) {
        HomeElements.getProduct(productName).click();
    }

    static verifyProductDisplayed(productName) {
        HomeElements.getProduct(productName).should('be.visible')
    }
    static verifyHomePageIsShow() {
        cy.url().should('include', 'index.html')
    }
}