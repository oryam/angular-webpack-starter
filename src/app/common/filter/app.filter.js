import angular from 'angular';

import AppCapitalize from './text/capitalize.filter';

export default angular.module('app.filter', [
  AppCapitalize,
])
  .name;