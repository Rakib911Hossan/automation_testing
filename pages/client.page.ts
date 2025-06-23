import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";
import  testdata  from "../fixtures/testdata.json"; 

export class ClientPage extends BasePage {
  readonly clientMenu: Locator;
  readonly addClientButton: Locator;
  readonly fullNameInput: Locator;
  readonly phoneInput: Locator;
  readonly emailInput: Locator;
  readonly nationalIdInput: Locator;
  readonly serviceDatePicker: Locator;
  readonly routerDropdown: Locator;
  readonly packageDropdown: Locator;
  readonly connectionTypeDropdown: Locator;
  readonly kamDropdown: Locator;
  readonly autoDueDropdown: Locator;
  readonly smsNotificationDropdown: Locator;
  readonly subscriptionDropdown: Locator;
  readonly accountServiceDropdown: Locator;
  readonly autoRechargeDropdown: Locator;
  readonly saveClientButton: Locator;
  readonly confirmButton: Locator;

  constructor(page: Page) {
    super(page);
    this.clientMenu = page.getByRole('link', { name: 'Client', exact: true });
    this.addClientButton = page.getByRole('button', { name: 'Add Client' });
    this.fullNameInput = page.locator('input[name="fullName"]');
    this.phoneInput = page.locator('input[name="phone"]');
    this.emailInput = page.locator('input[name="email"]');
    this.nationalIdInput = page.locator('input[name="nationalId"]');
    this.serviceDatePicker = page.locator('div').filter({ hasText: /^Service Start Datetime\*$/ }).getByRole('img');
    this.routerDropdown = page.locator('div').filter({ hasText: /^Router\*Select \.\.\.$/ }).locator('div').nth(4);
    this.packageDropdown = page.locator('div').filter({ hasText: /^Package\*Select \.\.\.$/ }).locator('div').nth(4);
    this.connectionTypeDropdown = page.locator('div').filter({ hasText: /^Connection Type\*Select \.\.\.$/ }).locator('div').nth(4);
    this.kamDropdown = page.locator('div').filter({ hasText: /^Key Account Manager \(KAM\)\*Select \.\.\.$/ }).locator('div').nth(4);
    this.autoDueDropdown = page.locator('div').filter({ hasText: /^Auto Due Allowed\*Select \.\.\.$/ }).locator('div').nth(4);
    this.smsNotificationDropdown = page.locator('div').filter({ hasText: /^Enable SMS Notification\*Select \.\.\.$/ }).locator('div').nth(4);
    this.subscriptionDropdown = page.locator('div').filter({ hasText: /^Subscription\*Select \.\.\.$/ }).locator('div').nth(2);
    this.accountServiceDropdown = page.locator('div').filter({ hasText: /^Account Service\*Select \.\.\.$/ }).locator('div').nth(4);
    this.autoRechargeDropdown = page.locator('div').filter({ hasText: /^Auto Recharge\*Select \.\.\.$/ }).locator('span').nth(1);
    this.saveClientButton = page.getByRole('button', { name: 'Save Client' });
    this.confirmButton = page.getByRole('button', { name: 'OK' });
  }

//   async navigateToClientPage() {
//   await this.page.goto('http://192.168.1.125:31767/client');
// }


  async addClient(data: {
    fullName: string,
    phone: string,
    email: string,
    nationalId: string
  }) {
    await this.addClientButton.click();
    await this.fullNameInput.fill(data.fullName);
    await this.phoneInput.fill(data.phone);
    await this.emailInput.fill(data.email);
    await this.nationalIdInput.fill(data.nationalId);

    await this.serviceDatePicker.click();
    await this.page.getByText('24').click(); // You may parameterize this
    await this.page.getByRole('button', { name: '14:' }).click();
    await this.page.locator('#serviceStart').click();
    await this.page.getByRole('button', { name: ':10' }).click();

    await this.routerDropdown.click();
    await this.page.getByText('15Mya_liveTest').click();

    await this.packageDropdown.click();
    await this.page.getByText('10Mbps_test_15May').click();

    await this.connectionTypeDropdown.click();
    await this.page.getByText('PPPoE').click();

    await this.kamDropdown.click();
    await this.page.locator('.shadow-xl > div:nth-child(2) > span').click();

    await this.autoDueDropdown.click();
    await this.page.getByText('Yes').click();

    await this.smsNotificationDropdown.click();
    await this.page.getByText('No', { exact: true }).click();

    await this.page.locator('div:nth-child(19) > div:nth-child(2) > div > .position-relative > .select-wrap').click();
    await this.page.locator('div').filter({ hasText: /^Select \.\.\.YesNo$/ }).locator('div').nth(2).click();

    await this.subscriptionDropdown.click();
    await this.page.locator('div').filter({ hasText: /^Enable$/ }).click();

    await this.accountServiceDropdown.click();
    await this.page.locator('div').filter({ hasText: /^Valid$/ }).click();

    await this.autoRechargeDropdown.click();
    await this.page.locator('div').filter({ hasText: /^Block$/ }).click();

    await this.saveClientButton.click();
    await this.confirmButton.click();
  }
}
