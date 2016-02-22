import angular from 'angular';

function AppTextCapitalize() {
  return value => value.toLowerCase().replace(/(?:^|\s)[a-z]/g, m => m.toUpperCase());
}

export default angular.module('app.filter.capitalize', [])
  .filter('capitalize', AppTextCapitalize)
  .name;
