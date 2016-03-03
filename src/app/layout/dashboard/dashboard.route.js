/**
 * @ngInject
 */
export default function appLayoutDashboardRoute($stateProvider) {
  $stateProvider
    .state('dashboard', {
      parent: 'layout',
      url: '/dashboard',
      views: {
        // sidenav: {
        //   template: 'Sidenav...',
        // },
        // toolbar: {
        //   template: 'Toolbar...',
        // },
        content: {
          template: require('./dashboard.html'),
          controller: 'AppDashboardController',
          controllerAs: 'vm',
        },
      },
    });
}
