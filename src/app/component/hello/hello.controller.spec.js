import angular from 'angular';

import hello from './index';

describe('AppHelloController component', function() {
  let $controller;

  beforeEach(angular.mock.module(hello));

  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it('name is initialized to "hello component"', function() {
    let ctrl = $controller('AppHelloController');
    expect(ctrl.name).toBe('hello component');
  });
});
