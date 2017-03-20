import { UserAppNgPage } from './app.po';

describe('user-app-ng App', function() {
  let page: UserAppNgPage;

  beforeEach(() => {
    page = new UserAppNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
