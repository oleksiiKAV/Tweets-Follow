import { test, expect } from '@playwright/experimental-ct-react';
import Home from './Home';

test.use({ viewport: { width: 500, height: 500 } });

test('Verify the text in React Page ', async ({ mount, page }) => {
  const component = await mount(<Home />);
  await expect(component).toContainText('GOIT REACT TECH');
  const logo = await component.locator('img[alt="twitlogo"]').first();
  await expect(logo).toBeVisible();
//   await page.waitForTimeout(9000);
});