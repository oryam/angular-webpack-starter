import './layout.scss';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import appLayoutRoute from './layout.route';
import AppLayoutController from './layout.controller';

import appLayoutHome from './home';

export default angular.module('app.layout', [
  uirouter,
  appLayoutHome,
])
  .config(appLayoutRoute)
  .controller('AppLayoutController', AppLayoutController)
  .name;
