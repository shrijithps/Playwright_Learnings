import {expect, test} from '@playwright/test'
import { NavigationPage } from '../page-objects/navigationpage';

test("POM", async({page}) => {
    const navigationpage = new NavigationPage(page);
    await page.goto('http://localhost:4200');
    await navigationpage.formLayoutsPage();
    await navigationpage.datePicker();
})