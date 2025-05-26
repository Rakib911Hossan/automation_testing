import { Page, Locator } from "@playwright/test";

export abstract class BasePage {
    readonly page: Page;
  
    constructor(page: Page) {
      this.page = page;
    }
  
    async waitForLoadState(state: 'load' | 'domcontentloaded' | 'networkidle' = 'networkidle') {
      await this.page.waitForLoadState(state);
    }
  }