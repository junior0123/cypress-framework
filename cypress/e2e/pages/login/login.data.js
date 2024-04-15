export class LoginData {
    static get invalidCredentials() {
        return {
            username: 'abc',
            password: 'abc'
        }
    }

    static get validCredentials() {
        return {
            username: 'juan1234.',
            password: 'juan1234.'
        }
    }
}