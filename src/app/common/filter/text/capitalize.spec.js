import angular from 'angular';

import capitalize from './capitalize.filter';

describe('capitalize filter', function() {
  let $filter;

  beforeEach(angular.mock.module(capitalize));

  beforeEach(angular.mock.inject(function(_$filter_) {
    $filter = _$filter_;
  }));

  it('should tranform "hello world" into "Hello World"', function() {
    let fl = $filter('capitalize');
    expect(fl('hello world')).toBe('Hello World');
  });
});