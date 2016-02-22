import angular from 'angular';
import uirouter from 'angular-ui-router';

import appRoute from './app/app.config';
import appLayout from './app/layout';
import appComponent from './app/component/app.component';
import appFilter from './app/common/filter/app.filter';

angular.module('app', [
  uirouter,
  appLayout,
  appComponent,
  appFilter,
])
  .config(appRoute);
