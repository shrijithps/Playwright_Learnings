import { test, expect, request } from '@playwright/test';
import tags from '../test-data/tags.json'

test.beforeEach("Before Each Block", async ({ page }) => {
    // Mocking the API response for the tags endpoint
    await page.route("**/api/tags", async (route) => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify(tags)
        });
    });

    // Navigate to the webpage that will use these tags
    await page.goto("https://conduit.bondaracademy.com/");

    await page.locator('a').getByText('Sign in').click();
    await page.getByPlaceholder('Email').fill("shrijithps89@gmail.com")
    await page.getByPlaceholder('Password').fill("6067703262pSS!")
    await page.locator("button[type='submit']").click();
    await page.waitForTimeout(3000);
});

test("Validate landingPage", async ({ page }) => {
    // Wait for the navigation to complete and check for the navbar-brand visibility
    await page.waitForSelector('.navbar-brand', { timeout: 5000 });
    const isVisible = await page.locator('.navbar-brand').isVisible();
    expect(isVisible).toBe(true);

    // await page.route('*/**/api/articles*', async route => {
    //     const response = await route.fetch()
    //     const responseBody = await response.json()
    //     responseBody.articles[0].title = "This is a mock test title"
    //     responseBody.articles[0].description = "This is a mock description"

    //     await route.fulfill({
    //         body: JSON.stringify(responseBody)
    //     })
    // })

    // // Logging the tags on the page for verification
    // await page.locator('a').filter({hasText:' Global Feed '}).click();

    // await expect(page.locator('app-article-list h1').first()).toContainText('This is a mock test title')
    // await expect(page.locator('app-article-list p').first()).toContainText('This is a mock description')
});

test("Delete operation", async ({page, request}) => {
    const response = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
        data:{
            user: {email: "shrijithps89@gmail.com", password: "6067703262pSS!"}
        }
    })
    const responseBody = await response.json()
    const accessToken = responseBody.user.token


    const postRequestResponse = await request.post('https://conduit-api.bondaracademy.com/api/articles/', {
        data:{ 
            "article":{"tagList":[],"title":"test article demo for post request24","description":"this is a article description11","body":"write your article11"}
        },
        headers: {
            Authorization: `Token ${accessToken}`
        }   
    })
    const responseBody1 = await response.json()
    // expect(postRequestResponse.status()).toBe(201); // Checking the status correctly

    await page.reload();
    await page.waitForTimeout(2000);

    await page.locator('.preview-link').locator('h1').first().click();
    await page.locator('button', {hasText:' Delete Article '}).first().click();
    await page.locator('li', {hasText:"Home"}).click();
    await page.waitForTimeout(2000);
    await expect(page.locator('h1').first()).not.toContainText('test article demo for post request24')
})


test("Delete operation using api", async ({page, request}) => {
    const response = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
        data:{
            user: {email: "shrijithps89@gmail.com", password: "6067703262pSS!"}
        }
    })
    const responseBody = await response.json()
    const accessToken = responseBody.user.token


    const postRequestResponse = await request.post('https://conduit-api.bondaracademy.com/api/articles/', {
        data:{ 
            "article":{"tagList":[],"title":"test article demo for post request26","description":"this is a article description11","body":"write your article11"}
        },
        headers: {
            Authorization: `Token ${accessToken}`
        }   
    })
    expect(postRequestResponse.status()).toBe(201);


    const postResponse = await postRequestResponse.json()
    const slug = postResponse.article.slug

    const deleteResponse = await request.delete(`https://conduit-api.bondaracademy.com/api/articles/${slug}`, {
        headers: {
            Authorization : `Token ${accessToken}`
        }
    })

    expect(deleteResponse.status()).toBe(204);
    // expect(postRequestResponse.status()).toBe(201); // Checking the status correctly

})

test("intercept api", async({page}) => {
    await page.locator('[href="/editor"]').click();
    await page.getByPlaceholder('Article Title').fill("This is a sample article title1")
    await page.locator('[formcontrolname="description"]').fill("This is a sample description")
    await page.locator('[formcontrolname="body"]').fill("This is a body")
    await page.locator('button', {hasText:'Publish Article'}).click();
    
    const articleResponse = await page.waitForResponse('https://conduit-api.bondaracademy.com/api/articles/')
    const response = await articleResponse.json()
    console.log(response.article.slug)
    await expect(page.locator('h1', {hasText:"This is a sample article title1"})).toBeVisible()

    

    // await page.locator('a', {hasText:"Home"}).click();
    // await page.locator('a', {hasText:"Global Feed"}).isVisible();

})