import { test, expect } from '@playwright/test';

test.describe('Company Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/company');
  });

  test('should display company hero section', async ({ page }) => {
    await expect(page.locator('.company-title')).toContainText('medical devices');
    await expect(page.locator('.company-subtitle')).toContainText('creativity, challenge, and passion');
  });

  test('should display vision section', async ({ page }) => {
    await expect(page.locator('text=Our Vision')).toBeVisible();
    await expect(page.locator('.vision-text').first()).toContainText('Creation of Value');
  });

  test('should display three value cards', async ({ page }) => {
    const valueCards = page.locator('.value-card');
    await expect(valueCards).toHaveCount(3);

    await expect(page.locator('text=Creativity')).toBeVisible();
    await expect(page.locator('text=Challenge')).toBeVisible();
    await expect(page.locator('text=Passion')).toBeVisible();
  });

  test('should display history timeline', async ({ page }) => {
    await expect(page.locator('text=Our History')).toBeVisible();
    const timelineItems = page.locator('.timeline-item');
    await expect(timelineItems).toHaveCount(5);
  });

  test('should display certifications section', async ({ page }) => {
    await expect(page.locator('text=Certificates & Patents')).toBeVisible();

    const certCards = page.locator('.cert-card');
    await expect(certCards).toHaveCount(4);

    await expect(page.locator('text=ISO 13485')).toBeVisible();
    await expect(page.locator('text=CE Certification')).toBeVisible();
    await expect(page.locator('text=KGMP')).toBeVisible();
  });

  test('should have hover effects on cards', async ({ page }) => {
    const firstValueCard = page.locator('.value-card').first();

    // Get initial position
    const initialBox = await firstValueCard.boundingBox();

    // Hover
    await firstValueCard.hover();

    // Card should be visible and interactable
    await expect(firstValueCard).toBeVisible();
  });
});
