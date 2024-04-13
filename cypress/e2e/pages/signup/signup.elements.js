export class SignupElements {
    static get textBoxes() {
        return {
            get username() {
                return cy.get('input#sign-username',{timeout:2000});
            },
            get password() {
                return cy.get('input#sign-password',{timeout:2000});
            }
        }
    }
    static get buttons() {
        return{
            get close() {
                return cy.contains('button', 'Close').eq(1);
            },
            get signup() {
                return cy.contains('button', 'Sign up');
            }
        }
    }
}