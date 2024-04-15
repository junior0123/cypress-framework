export class PlaceOrderElements {
    static get textBoxes() {
        return {
            get name() {
                return cy.get('input#name',{timeout:2000});
            },
            get country() {
                return cy.get('input#country',{timeout:2000});
            },
            get city() {
                return cy.get('input#city',{timeout:2000});
            },
            get creditCard() {
                return cy.get('input#card',{timeout:2000});
            },
            get month() {
                return cy.get('input#month',{timeout:2000});
            },
            get year() {
                return cy.get('input#year',{timeout:2000});
            }
        }
    }
    static get buttons() {
        return {
            get close() {
                return cy.get('div[id="orderModal"] button').eq(1);
            },
            get purchase() {
                return cy.contains('button', 'Purchase',{timeout:2000});
            }
        }
    }
}

