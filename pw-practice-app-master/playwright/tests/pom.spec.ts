import {expect, test} from '@playwright/test'
import { NavigationPage } from '../page-objects/navigationpage';

test("POM", async({page}) => {
    const navigationpage = new NavigationPage(page);
    await page.goto('/');
    await navigationpage.formLayoutsPage();
    await navigationpage.datePicker();
})