import { appConfig } from './app.config';

describe('App', function() {

  let SERVICE_BASE;

  beforeEach(angular.mock.module(appConfig));

  beforeEach(angular.mock.inject(function(_SERVICE_BASE_) {
    SERVICE_BASE = _SERVICE_BASE_;
  }));

  it('should have constant \'SERVICE_BASE\'', function() {
    expect(SERVICE_BASE).toBe('http://localhost:3001/');
  });

});