export default class AppMenuController {
  /**
   * @ngInject
   */
  constructor($state, $mdToast, AppMenu) {
    this.$state = $state;
    this.$mdToast = $mdToast;
    this.name = 'AppMenu component';
    this.menu = AppMenu.items;
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
