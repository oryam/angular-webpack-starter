import './hello.scss';

import angular from 'angular';

import template from './hello.html'
import AppHelloController from './hello.controller';

export default angular.module('app.component.hello', [])
  .controller('AppHelloController', AppHelloController)
  .component('appHello', {
    template,
    controller: AppHelloController,
    controllerAs: 'vm',
  })
  .name;
