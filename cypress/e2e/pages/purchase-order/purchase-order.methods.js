import { PurchaseOrderElements } from "./purchasr-order.elements";

export class PurchaseOrderMethods{
    static clickOnOkButton() {
        PurchaseOrderElements.buttons.okButton.click();
        PurchaseOrderElements.buttons.okButton.should('not.exist')
    }
    static verifyGreenCheckMarkIsDisplayed() {
        PurchaseOrderElements.icons.greenCheckMark.should("exist");
    }
}