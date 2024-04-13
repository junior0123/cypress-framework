export class CommonPageElements {
    static get topMenu() {
        return {
            get Home() {
                return cy.get('li.active a');
            },
            get contact() {
                return cy.get('a[data-target="#exampleModal"]');
            },
            get aboutUs() {
                return cy.get('a[data-target="#videoModal"]');
            },
            get cart() {
                return cy.contains('a', 'Cart');
            },
            get login() {
                return cy.get('a[data-target="#logInModal"]');
            },
            get signup() {
                return cy.contains('a', 'Sign up');
            }


        }
    }
}