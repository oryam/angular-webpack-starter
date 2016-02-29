appRoute.$inject = ['$urlRouterProvider', '$locationProvider'];

function appRoute($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/home');
}

// example of export notation without 'export default...'
export {
  appRoute,
}
