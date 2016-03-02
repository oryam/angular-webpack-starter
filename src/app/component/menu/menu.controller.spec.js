import angular from 'angular';

import AppMenu from './index';

describe('AppMenuController component', function () {
  let $controller;

  beforeEach(angular.mock.module(function ($provide) {
    $provide.service('SERVICE_BASE', function serviceBase() {
      return 'http://localhost/';
    });

    $provide.service('AppMenuService', function menuService() {
      // TODO method
    });
  }));

  beforeEach(angular.mock.module(AppMenu));

  beforeEach(angular.mock.inject(function (_$controller_) {
    $controller = _$controller_;
  }));

  it('name is initialized to "AppMenu component"', function () {
    let ctrl = $controller('AppMenuController');
    expect(ctrl.name).toBe('AppMenu component');
  });
  
  // TODO add test on service call
});
