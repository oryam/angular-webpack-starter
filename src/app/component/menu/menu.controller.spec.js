import angular from 'angular';

import AppMenu from './index';

describe('AppMenuController component', function() {
  let $controller;

  beforeEach(angular.mock.module(AppMenu));

  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it('name is initialized to "AppMenu component"', function() {
    let ctrl = $controller('AppMenuController');
    expect(ctrl.name).toBe('AppMenu component');
  });
});
