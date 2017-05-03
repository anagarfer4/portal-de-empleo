import { TrabajoFinalPage } from './app.po';

describe('trabajo-final App', () => {
  let page: TrabajoFinalPage;

  beforeEach(() => {
    page = new TrabajoFinalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
