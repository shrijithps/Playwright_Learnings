import {expect, test} from '@playwright/test'

test("autoWaitTest", async({page}) =>{
    await page.goto("http://localhost:4200/pages/iot-dashboard")
    const tempCircle = await page.locator("[tabtitle='Temperature'] ngx-temperature-dragger circle")
    await tempCircle.evaluate(node => {
        node.setAttribute('cx', '232.63098833543773')
        node.setAttribute('cy', '232.6309883354377')
    })
    await tempCircle.click()
})