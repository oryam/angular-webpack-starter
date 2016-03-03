/**
 * @ngInject
 */
export default class AppLayoutController {
  constructor($mdSidenav) {
    this.name = 'Layout';
    this.$mdSidenav = $mdSidenav;
  }

  toggleSidenav(id) {
    this.$mdSidenav(id).toggle();
  }
}
