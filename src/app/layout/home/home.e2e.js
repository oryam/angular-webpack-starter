describe('Home', () => {

  beforeEach(() => {
    browser.get('/home');
  });

  it('should use <app-hello/> component', () => {
    let subject = element(by.css('.app-home app-hello')).isPresent();
    let result = true;
    expect(subject).toEqual(result);
  });

});
