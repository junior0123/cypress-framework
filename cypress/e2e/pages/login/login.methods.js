import { LoginElements } from "./login.elements";
export class LoginMethods {
    static insertUsername(username) {
        LoginElements.textBoxes.username.clear().type(username,{delay:50});
    }
    static insertPassword(password) {
        LoginElements.textBoxes.password.type(password), {delay:50};
    }
    static clickOnLoginButton() {
        LoginElements.buttons.login.click();
    }
    static login(username, password) {
        this.insertUsername(username);
        this.insertPassword(password);
        this.clickOnLoginButton(); 
    }
}