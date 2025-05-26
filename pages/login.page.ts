import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";
import  testdata  from "../fixtures/testdata.json"; // Adjust the import path as necessary
export class LoginPage extends BasePage {
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    constructor(page: Page) {
        super(page);
        this.username = page.getByRole('textbox', { name: 'User name' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Sign in' });
    }

async navigate() {
        await this.page.goto(testdata.validuser.baseurl); // Replace with your actual login URL
        
    }

    async login(username: string, password: string) {
     
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}