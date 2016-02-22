appLayoutRoute.$inject = ['$stateProvider'];

export default function appLayoutRoute($stateProvider) {
  $stateProvider
    .state('layout', {
      abstract: true,
      url: '',
      template: require('./layout.html'),
      controller: 'AppLayoutController',
      controllerAs: 'vm',
    });
}
