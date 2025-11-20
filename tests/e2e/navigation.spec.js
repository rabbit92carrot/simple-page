import { test, expect } from '@playwright/test';

test.describe('Navigation Tests', () => {
  test('should navigate to home page by clicking logo', async ({ page }) => {
    await page.goto('/company');
    await page.click('.navbar-logo');
    await expect(page).toHaveURL('/');
    await expect(page.locator('.hero-title')).toBeVisible();
  });

  test('should navigate between pages using navbar', async ({ page }) => {
    await page.goto('/');

    // Navigate to Company page
    await page.click('text=Company');
    await expect(page).toHaveURL('/company');
    await expect(page.locator('.company-title')).toContainText('medical devices');

    // Navigate to PR page
    await page.click('text=PR');
    await expect(page).toHaveURL('/pr');
    await expect(page.locator('.pr-title')).toBeVisible();

    // Navigate to Contact page
    await page.click('text=Contact');
    await expect(page).toHaveURL('/contact');
    await expect(page.locator('.contact-title')).toBeVisible();

    // Navigate back to home
    await page.click('text=Products');
    await expect(page).toHaveURL('/');
    await expect(page.locator('.hero-title')).toBeVisible();
  });

  test('should navigate to contact page via Contact Us button', async ({ page }) => {
    await page.goto('/');
    await page.click('.btn-contact');
    await expect(page).toHaveURL('/contact');
    await expect(page.locator('.contact-form')).toBeVisible();
  });

  test('should scroll to top when changing pages', async ({ page }) => {
    await page.goto('/');

    // Scroll down
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Navigate to another page
    await page.click('text=Company');
    await expect(page).toHaveURL('/company');

    // Check if scrolled to top
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBe(0);
  });
});
