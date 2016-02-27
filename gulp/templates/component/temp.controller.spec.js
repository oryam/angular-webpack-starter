import angular from 'angular';

import <%= upperPrefix %><%= upperName %> from './index';

describe('<%= upperPrefix %><%= upperName %>Controller component', function() {
  let $controller;

  beforeEach(angular.mock.module(<%= upperPrefix %><%= upperName %>));

  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it('name is initialized to "<%= upperPrefix %><%= upperName %> component"', function() {
    let ctrl = $controller('<%= upperPrefix %><%= upperName %>Controller');
    expect(ctrl.name).toBe('<%= upperPrefix %><%= upperName %> component');
  });
});
