import { PlaceOrderElements } from "./place-order.elements";

export class PlaceOrderMethods {
    static insertName(name) {
        PlaceOrderElements.textBoxes.name.invoke('val', name);
    }
    static insertCountry(country) {
        PlaceOrderElements.textBoxes.name.invoke('val', country);
    }
    static insertCity(city) {
        PlaceOrderElements.textBoxes.name.invoke('val', city);
    }
    static insertCreditCard(creditCard) {
        PlaceOrderElements.textBoxes.name.invoke('val', creditCard);
    }
    static insertMonth(month) {
        PlaceOrderElements.textBoxes.name.invoke('val', month);
    }
    static insertYear(year) {
        PlaceOrderElements.textBoxes.name.invoke('val', year);
    }
    static clickOnCloseButton(){
        PlaceOrderElements.buttons.close.click();
    }
    static clickOnPurchaseButton() {
        PlaceOrderElements.buttons.purchase.click();
    }
}