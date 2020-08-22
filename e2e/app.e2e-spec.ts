import { MaterialAngularPage } from './app.po';

describe('material-dashboard-angular App', () => {
  let page: MaterialAngularPage;

  beforeEach(() => {
    page = new MaterialAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
