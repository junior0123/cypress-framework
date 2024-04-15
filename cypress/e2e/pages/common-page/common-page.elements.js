export class CommonPageElements {
    static get topMenu() {
        return {
            get Home() {
                return cy.get('li.active a');
            },
            get contact() {
                return cy.get('a[data-target="#exampleModal"]',{timeout:2000});
            },
            get aboutUs() {
                return cy.get('a[data-target="#videoModal"]',{timeout:2000});
            },
            get cart() {
                return cy.contains('a', 'Cart',{timeout:2000});
            },
            get login() {
                return cy.get('a[data-target="#logInModal"]',{timeout:2000});
            },
            get signup() {
                return cy.contains('a', 'Sign up',{timeout:2000});
            }
        }
    }
    static get signedUser() {
        return cy.get("a#nameofuser");
    }
}