import angular from 'angular';

function capitalize() {
  return value => {
    value.toLowerCase().replace(/(?:^|\s)[a-z]/g, m => m.toUpperCase());
  }
}

export default angular.module('app.filter.capitalize', [])
  .filter('capitalize', capitalize)
  .name;
