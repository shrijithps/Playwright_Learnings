import {test, expect} from '@playwright/test'

test("automationtestingsignin", async({page}) => {
    await page.goto("https://www.automationexercise.com/")
    await page.locator('[alt="Website for automation practice"]').isVisible();
    await page.locator(':text-is("Signup / Login")').click();
    
    await page.locator(':text-is("New User Signup!")').click();
    await page.getByPlaceholder('Name').fill('testuser89');
    await page.locator('[type="email"]').fill("testuser89+01@test.com");
    await page.locator(":text('Signup')").click();

    await page.locator(":text('Enter Account Information')").isVisible();

    await page.locator('[data-qa="title"]').locator("#id_gender1").check();

    //assertions
    await expect(page.locator("#name")).toHaveValue('testuser89');
    await expect(page.locator('[data-qa="email"]')).toHaveValue('testuser89+01@test.com');

    await page.locator("[type='password']").pressSequentially("testuser");

    //selecting day
    await page.locator("[data-qa='days']").selectOption('1')
    //selecting month
    await page.locator("#months").selectOption('January')
    //selcting year
    await page.locator('#years').selectOption('1998')

    //scrolling
    await page.locator(':text("Address Information")').scrollIntoViewIfNeeded();

    //entering first name
    await page.locator('[name="first_name"]').fill('test')

    //entering last name
    await page.locator('#last_name').fill("last name")

    //entering address
    await page.locator('[data-qa="address"]').fill('address')

    //selecting country
    await page.locator('[name="country"]').selectOption('India')

    //selecting state
    await page.locator('[id="state"]').fill('karnataka')

    //selecting city
    await page.locator('#city').fill('bengaluru')

    //selecting zipcode
    await page.locator('#zipcode').fill('560076')

    //entering mobile number
    await page.locator('name="mobile_number"]').fill("987654321")

})