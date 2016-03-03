import './home.scss';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import appLayoutHomeRoute from './home.route';
import AppLayoutHomeController from './home.controller';
import appHello from '../../component/hello';

export default angular.module('app.layout.home', [
  uirouter,
  appHello,
])
  .config(appLayoutHomeRoute)
  .controller('AppHomeController', AppLayoutHomeController)
  .name;
