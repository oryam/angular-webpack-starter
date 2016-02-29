export default class AppMenuController {
  constructor() {
    this.name = 'AppMenu component';
    this.menus = this.getMenus();
  }

  getMenus() {
    // TODO create a provider
    return [
      {
        "id": "1",
        "name": "home",
        "label": "MOCK Home page",
        "url": "/home",
        "open": "same"
      },
      {
        "id": "2",
        "name": "dashboard",
        "label": "MOCK Dashboard page",
        "url": "/dashboard",
        "open": "same"
      },
      {
        "id": "3",
        "name": "settings",
        "label": "MOCK Settings page",
        "url": "/settings",
        "open": "modal"
      },
      {
        "id": "4",
        "name": "extranet",
        "label": "MOCK Extranet page",
        "url": "http://google.fr",
        "open": "window"
      }
    ];
  }
}
