import angular from 'angular';
import AppHello from './hello';
import AppMenu from './menu'

export default angular.module('app.component', [
  AppHello,
  AppMenu,
])
  .name;