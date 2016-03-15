export default function AppMenu() {
  var items = [];

  return {
    items,
    addMenu,
  };

  function addMenu(menu) {
    menu.map(item => items.push(item));
    return this;
  }

}