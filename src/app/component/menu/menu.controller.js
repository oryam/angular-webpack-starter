export default class AppMenuController {
  constructor(AppMenuService) {
    this.menuService = AppMenuService;
    this.name = 'AppMenu component';
    this.menu = [];
    this.loadMenu();
  }

  loadMenu() {
    this.menuService.values().then(values => this.menu = values);
  }
}

AppMenuController.$inject = ['AppMenuService'];
