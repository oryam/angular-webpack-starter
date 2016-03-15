/**
 * @ngInject
 */
export default function appLayoutRoute($stateProvider) {
  $stateProvider
    .state('layout', {
      abstract: true,
      url: '',
      template: require('./layout.html'),
      controller: 'AppLayoutController',
      controllerAs: 'vm',
      resolve: {
        menu,
      },
    });
}

/**
 * @ngInject
 */
function menu(AppMenuService, AppMenu, MENU_DATA) {
  return AppMenuService.values()
    .then(values => AppMenu.addMenu(values))
    .catch(response => AppMenu.addMenu(MENU_DATA));
}
