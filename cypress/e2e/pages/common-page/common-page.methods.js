import { CommonPageData } from "./common-page.data";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageMethods {
    static navigateToDemoBlaze() {
        cy.clearCookies();
        cy.visit(CommonPageData.url);
    }
    static clickOnHomeOption() {
        CommonPageElements.topMenu.Home.click();

    }
    static clickOnContactOption() {
        CommonPageElements.topMenu.contact.click();

    }
    static clickOnAboutUsOption() {
        CommonPageElements.topMenu.aboutUs.click();

    }
    static clickOnCartOption() {
        CommonPageElements.topMenu.cart.click();

    }
    static clickOnLoginOption() {
        CommonPageElements.topMenu.login.click();

    }
    static clickOnSignupOption() {
        CommonPageElements.topMenu.signup.click();

    }
    static verifyAlert(expectedMessage) {
        cy.on("window:alert", (str) => {
            expect(str).to.equal(expectedMessage)
        });
    }
    static generateStringRandom(length = 10) {

        let resultado = '';
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < length; i++) {
            resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }

        return resultado;
    }
    static verifySignedUser(username) {
        CommonPageElements.signedUser.should("have.text",`Welcome ${username}`)
    }
}