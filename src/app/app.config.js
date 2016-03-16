
const appConfig = angular.module('app.config', [])
  .constant('SERVICE_BASE', process.env.ROOT_SERVICE)
  .name;

/**
 * @ngInject
 */
function appRoute($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/home');
}

// example of export notation without 'export default...'
export {
appRoute,
appConfig,
}
