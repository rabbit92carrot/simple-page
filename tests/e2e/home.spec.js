import { test, expect } from '@playwright/test';

test.describe('Home Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display hero section with correct content', async ({ page }) => {
    await expect(page.locator('.hero-title')).toContainText('Innovate Medical Device');
    await expect(page.locator('.hero-subtitle')).toContainText('Creation of Value');
    await expect(page.locator('.hero-description')).toContainText('NEO Dr. INC.');
  });

  test('should display CTA buttons', async ({ page }) => {
    await expect(page.locator('.btn-primary')).toContainText('Explore Products');
    await expect(page.locator('.btn-secondary')).toContainText('Contact Us');
  });

  test('should display three product cards', async ({ page }) => {
    const productCards = page.locator('.feature-card');
    await expect(productCards).toHaveCount(3);

    // Check each product
    await expect(page.locator('text=AcuPro')).toBeVisible();
    await expect(page.locator('text=AcuSta')).toBeVisible();
    await expect(page.locator('text=JAMBER')).toBeVisible();
  });

  test('should display company logos', async ({ page }) => {
    const logos = page.locator('.company-logo');
    await expect(logos).toHaveCount(3);
  });

  test('should have working CTA buttons', async ({ page }) => {
    // Click Contact Us button
    await page.locator('.btn-secondary').click();
    await expect(page).toHaveURL('/contact');
  });
});
