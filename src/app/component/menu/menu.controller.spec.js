import angular from 'angular';
import uirouter from 'angular-ui-router';
import material from 'angular-material';

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

  beforeEach(angular.mock.module(uirouter));
  beforeEach(angular.mock.module(material));
  beforeEach(angular.mock.module(AppMenu));

  beforeEach(angular.mock.inject(function (_$controller_) {
    $controller = _$controller_;
  }));

  it('name is initialized to "AppMenu component"', function () {
    let ctrl = $controller('AppMenuController');
    expect(ctrl.name).toBe('AppMenu component');
  });

});
