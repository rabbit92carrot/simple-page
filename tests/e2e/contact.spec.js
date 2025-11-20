import { test, expect } from '@playwright/test';

test.describe('Contact Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('should display contact hero section', async ({ page }) => {
    await expect(page.locator('.contact-title')).toContainText('Connect');
    await expect(page.locator('.contact-subtitle')).toBeVisible();
  });

  test('should display contact information cards', async ({ page }) => {
    const contactCards = page.locator('.contact-info-card');
    await expect(contactCards).toHaveCount(3);

    await expect(page.locator('text=Wonju-si')).toBeVisible();
    await expect(page.locator('text=neodrsales@naver.com')).toBeVisible();
    await expect(page.locator('text=jamber.kr')).toBeVisible();
  });

  test('should display contact form with all fields', async ({ page }) => {
    await expect(page.locator('#name')).toBeVisible();
    await expect(page.locator('#email')).toBeVisible();
    await expect(page.locator('#company')).toBeVisible();
    await expect(page.locator('#phone')).toBeVisible();
    await expect(page.locator('#subject')).toBeVisible();
    await expect(page.locator('#message')).toBeVisible();
  });

  test('should have required fields marked', async ({ page }) => {
    const nameField = page.locator('#name');
    const emailField = page.locator('#email');
    const subjectField = page.locator('#subject');
    const messageField = page.locator('#message');

    await expect(nameField).toHaveAttribute('required', '');
    await expect(emailField).toHaveAttribute('required', '');
    await expect(subjectField).toHaveAttribute('required', '');
    await expect(messageField).toHaveAttribute('required', '');
  });

  test('should be able to fill out contact form', async ({ page }) => {
    await page.fill('#name', 'John Doe');
    await page.fill('#email', 'john@example.com');
    await page.fill('#company', 'Test Company');
    await page.fill('#phone', '+82 10-1234-5678');
    await page.fill('#subject', 'Product Inquiry');
    await page.fill('#message', 'I would like to know more about your products.');

    // Verify values are filled
    await expect(page.locator('#name')).toHaveValue('John Doe');
    await expect(page.locator('#email')).toHaveValue('john@example.com');
    await expect(page.locator('#subject')).toHaveValue('Product Inquiry');
  });

  test('should display business hours', async ({ page }) => {
    await expect(page.locator('text=Business Hours')).toBeVisible();
    await expect(page.locator('text=Monday - Friday')).toBeVisible();
    await expect(page.locator('text=9:00 AM - 6:00 PM KST')).toBeVisible();
  });

  test('should have clickable email link', async ({ page }) => {
    const emailLink = page.locator('a[href="mailto:neodrsales@naver.com"]');
    await expect(emailLink).toBeVisible();
    await expect(emailLink).toHaveAttribute('href', 'mailto:neodrsales@naver.com');
  });
});
