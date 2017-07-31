import { VAngularPage } from './app.po';

describe('v-angular App', () => {
  let page: VAngularPage;

  beforeEach(() => {
    page = new VAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
