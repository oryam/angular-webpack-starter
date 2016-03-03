import angular from 'angular';

import AppDashboard from './index';

describe('Dashboard layout', function() {
  let $controller;

  beforeEach(angular.mock.module(AppDashboard));

  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it('should have name "Dashboard page"', function() {
    let ctrl = $controller('AppDashboardController');
    expect(ctrl.name).toBe('Dashboard page');
  });
});
