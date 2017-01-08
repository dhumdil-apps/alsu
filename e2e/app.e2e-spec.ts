import { AlsuUmbPage } from './app.po';

describe('alsu-umb App', function() {
  let page: AlsuUmbPage;

  beforeEach(() => {
    page = new AlsuUmbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
