import './dashboard.scss';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import appLayoutDashboardRoute from './dashboard.route';
import AppLayoutDashboardController from './dashboard.controller';

export default angular.module('app.layout.dashboard', [
  uirouter,
])
  .config(appLayoutDashboardRoute)
  .controller('AppDashboardController', AppLayoutDashboardController)
  .name;
