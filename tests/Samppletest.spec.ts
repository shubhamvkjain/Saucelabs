import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/')
  await page.getByPlaceholder('Username').fill('standard_user')
  await page.locator('[data-test="password"]').fill('secret_sauce')
  await page.locator('[data-test="login-button"]').click()
  await page.locator('[data-test="inventory-item-sauce-labs-backpack-img"]')
  await page.locator('[id="add-to-cart-sauce-labs-backpack"]').click()
  await page.locator('.shopping_cart_link').click()
  await page.locator('#checkout').click()

});