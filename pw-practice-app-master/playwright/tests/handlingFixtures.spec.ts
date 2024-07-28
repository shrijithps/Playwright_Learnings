import {expect} from '@playwright/test'
import {test} from '../test-options';
import { NavigationPage } from '../page-objects/navigationpage';

test("POM", async({page}) => {
    const navigationpage = new NavigationPage(page);
    await navigationpage.datePicker();
})
