appLayoutHomeRoute.$inject = ['$stateProvider'];

export default function appLayoutHomeRoute($stateProvider) {
  $stateProvider
    .state('home', {
      parent: 'layout',
      url: '/home',
      views: {
        main: {
          template: require('./home.html'),
          controller: 'HomeController',
          controllerAs: 'vm',
        },
      },
    });
}
