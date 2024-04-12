import { PurchaseOrderElements } from "./purchasr-order.elements";

export class PurchaseOrderMethods{
    static clickOnOkButton() {
        PurchaseOrderElements.buttons.okButton.click();
    }
    static verifyGreenCheckMarkIsDisplayed() {
        PurchaseOrderElements.icons.greenCheckMark.should("exist");
    }
}