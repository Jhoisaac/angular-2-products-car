import { ProductosPage } from './app.po';

describe('productos App', () => {
  let page: ProductosPage;

  beforeEach(() => {
    page = new ProductosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
