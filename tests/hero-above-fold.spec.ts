/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Test: Hero section is fully visible above the fold on iPhone SE (375×667px)
 *
 * Acceptance criteria:
 * - All hero section content (badge, h1, paragraph, CTA buttons) must be
 *   visible within the 667px viewport height without scrolling.
 * - No overflow/clipping that hides content.
 */
import { test, expect } from '@playwright/test';

const IPHONE_SE = { width: 375, height: 667 };
// Navbar is fixed at h-20 = 80px
const NAVBAR_HEIGHT = 80;

test.describe('Hero section — above the fold on iPhone SE (375×667)', () => {
  test.use({ viewport: IPHONE_SE });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('hero section bottom edge is within viewport', async ({ page }) => {
    const heroSection = page.locator('section').first();
    const box = await heroSection.boundingBox();

    expect(box).not.toBeNull();
    // The bottom of the hero section must fit within the viewport height (accounting for fixed navbar)
    expect(box!.y + box!.height).toBeLessThanOrEqual(IPHONE_SE.height - NAVBAR_HEIGHT);
  });

  test('badge/tagline pill is visible above the fold', async ({ page }) => {
    // The "#1 Pickleball Platform" badge
    const badge = page.getByText('#1 Pickleball Platform in HCMC');
    const box = await badge.boundingBox();

    expect(box).not.toBeNull();
    // Bottom edge must be within viewport
    expect(box!.y + box!.height).toBeLessThanOrEqual(IPHONE_SE.height);
  });

  test('h1 heading is fully visible above the fold', async ({ page }) => {
    const heading = page.locator('h1').first();
    const box = await heading.boundingBox();

    expect(box).not.toBeNull();
    expect(box!.y + box!.height).toBeLessThanOrEqual(IPHONE_SE.height);
  });

  test('hero paragraph is fully visible above the fold', async ({ page }) => {
    const para = page.locator('section').first().locator('p').first();
    const box = await para.boundingBox();

    expect(box).not.toBeNull();
    expect(box!.y + box!.height).toBeLessThanOrEqual(IPHONE_SE.height);
  });

  test('CTA buttons are fully visible above the fold', async ({ page }) => {
    const primaryBtn = page.getByRole('button', { name: /Mở app ngay/i });
    const secondaryBtn = page.getByRole('button', { name: /Tìm hiểu thêm/i });

    const primaryBox = await primaryBtn.boundingBox();
    const secondaryBox = await secondaryBtn.boundingBox();

    expect(primaryBox).not.toBeNull();
    expect(secondaryBox).not.toBeNull();

    // Both buttons must fit in viewport
    expect(primaryBox!.y + primaryBox!.height).toBeLessThanOrEqual(IPHONE_SE.height);
    expect(secondaryBox!.y + secondaryBox!.height).toBeLessThanOrEqual(IPHONE_SE.height);
  });
});
