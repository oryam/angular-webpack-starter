appRoute.$inject = ['$urlRouterProvider', '$locationProvider'];

export default function appRoute($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/home');
}
