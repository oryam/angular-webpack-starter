describe('App', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have a title', () => {
    let subject = browser.getTitle();
    let result = 'Demo Application';
    expect(subject).toEqual(result);
  });

  it('should have <header>', () => {
    let subject = element(by.css('header')).isPresent();
    let result = true;
    expect(subject).toEqual(result);
  });

  it('should have <main>', () => {
    let subject = element(by.css('main')).isPresent();
    let result = true;
    expect(subject).toEqual(result);
  });

  it('should have <footer>', () => {
    let subject = element(by.css('footer')).getText();
    let result = 'Layout Footer';
    expect(subject).toEqual(result);
  });

});
