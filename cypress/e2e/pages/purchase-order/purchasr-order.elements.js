export class PurchaseOrderElements{
    static get buttons() {
        return {
            get okButton() {
                return cy.contains('button', 'OK');
            }
        }
    }
    static get icons() {
        return {
            get greenCheckMark() {
                return cy.get('div.sa-placeholder');
            }
        }
    }
}