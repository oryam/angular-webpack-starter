import './menu.scss';

import angular from 'angular';

import template from './menu.html'
import AppMenuService from './menu.service';
import AppMenuController from './menu.controller';

export default angular.module('app.component.menu', [])
  .service('AppMenuService', AppMenuService)
  .controller('AppMenuController', AppMenuController)
  .component('appMenu', {
    template,
    controller: AppMenuController,
    controllerAs: 'vm',
  })
  .name;
