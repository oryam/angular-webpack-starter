import './layout.scss';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import appLayoutRoute from './layout.route';
import AppLayoutController from './layout.controller';

import appLayoutHome from './home';
import appLayoutDashboard from './dashboard';
import appComponent from '../component/app.component';

export default angular.module('app.layout', [
  uirouter,
  appLayoutHome,
  appLayoutDashboard,
  appComponent,
])
  .config(appLayoutRoute)
  .controller('AppLayoutController', AppLayoutController)
  .name;
