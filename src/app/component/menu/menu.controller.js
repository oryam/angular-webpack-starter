export default class AppMenuController {
  /**
   * @ngInject
   */
  constructor($state, $mdToast, AppMenuService) {
    this.$state = $state;
    this.$mdToast = $mdToast;
    this.menuService = AppMenuService;
    this.name = 'AppMenu component';
    this.menu = [];
    this.loadMenu();
  }

  loadMenu() {
    this.menuService.values().then(values => this.menu = values);
  }

  goto(item) {
    if (item && item.state) {
      this.$state.go(item.state);
    } else {
      this.$mdToast.show(
        this.$mdToast.simple()
          .textContent('Error: page not available!')
          .position('bottom right')
          .hideDelay(3000)
        );
    }
  }
}
