import angular from 'angular';

import home from './index';

describe('Home layout', function() {
  let $controller;

  beforeEach(angular.mock.module(home));

  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it('should have name "Home page"', function() {
    let ctrl = $controller('AppHomeController');
    expect(ctrl.name).toBe('Home page');
  });
});
