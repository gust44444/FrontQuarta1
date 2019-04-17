import { FrontquartaPage } from './app.po';

describe('frontquarta App', () => {
  let page: FrontquartaPage;

  beforeEach(() => {
    page = new FrontquartaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
