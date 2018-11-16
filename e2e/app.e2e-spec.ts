import { MeatAppPage } from './app.po';

describe('meat-app App', () => {
  let page: MeatAppPage;

  beforeEach(() => {
    page = new MeatAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to mt!');
  });
});
