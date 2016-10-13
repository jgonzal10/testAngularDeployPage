import { JogoAPage } from './app.po';

describe('jogo-a App', function() {
  let page: JogoAPage;

  beforeEach(() => {
    page = new JogoAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
