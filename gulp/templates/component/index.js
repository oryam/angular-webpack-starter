import './<%= name %>.scss';

import angular from 'angular';

import template from './<%= name %>.html'
import <%= upperPrefix %><%= upperName %>Controller from './<%= name %>.controller';

export default angular.module('<%= prefix %>.component.<%= name %>', [])
  .controller('<%= upperPrefix %><%= upperName %>Controller', <%= upperPrefix %><%= upperName %>Controller)
  .component('<%= prefix %><%= upperName %>', {
    template,
    controller: <%= upperPrefix %><%= upperName %>Controller,
    controllerAs: 'vm',
  })
  .name;
