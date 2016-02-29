import './menu.scss';

import angular from 'angular';

import template from './menu.html'
import AppMenuController from './menu.controller';

export default angular.module('app.component.menu', [])
  .controller('AppMenuController', AppMenuController)
  .component('appMenu', {
    template,
    controller: AppMenuController,
    controllerAs: 'vm',
  })
  .name;
