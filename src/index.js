import angular from 'angular';
import uirouter from 'angular-ui-router';

import appRoute from './app/app.config';
import appLayout from './app/layout';
import appComponent from './app/component/component';

angular.module('app', [
  uirouter,
  appLayout,
  appComponent,
])
  .config(appRoute);
