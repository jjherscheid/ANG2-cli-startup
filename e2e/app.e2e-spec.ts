import { ANG2CliStartupPage } from './app.po';

describe('ang2-cli-startup App', function() {
  let page: ANG2CliStartupPage;

  beforeEach(() => {
    page = new ANG2CliStartupPage();
  });

  it('should display message saying My App Component', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('My App Component');
  });
});
