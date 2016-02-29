appLayoutHomeRoute.$inject = ['$stateProvider'];

export default function appLayoutHomeRoute($stateProvider) {
  $stateProvider
    .state('home', {
      parent: 'layout',
      url: '/home',
      views: {
        // sidenav: {
        //   template: 'Sidenav...',
        // },
        // toolbar: {
        //   template: 'Toolbar...',
        // },
        content: {
          template: require('./home.html'),
          controller: 'HomeController',
          controllerAs: 'vm',
        },
      },
    });
}
