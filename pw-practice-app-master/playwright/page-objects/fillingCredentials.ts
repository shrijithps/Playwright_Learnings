import { Locator, Page } from "@playwright/test";

export class FillingCredentials{

    readonly page : Page

    constructor(page : Page){
        this.page = page
    }

    /**
     * 
     * @param email This is a email field
     * @param password This is a password field
     */
    async fillEmailAndPassword(email: string, password: string){
        const Email = this. page.locator('nb-card', {hasText:"Using the Grid"}).getByRole('textbox', {name:'Email'});
        const Password = this.page.locator('nb-card', {hasText: "Using the Grid"}).locator("[id='inputPassword2']")
        await this.page.getByTitle('Forms').click();
        await this.page.getByTitle('Form Layouts').click()
        await Email.fill(email)
        await Password.fill(password)
    }
}