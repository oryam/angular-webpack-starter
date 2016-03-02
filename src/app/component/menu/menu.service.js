export default class AppMenuService {
  constructor($http, SERVICE_BASE) {
    this.$http = $http;
    this.root = SERVICE_BASE;
  }

  values() {
    let base = this.root;
    return this.$http.get(base + 'menu').then(function (response) {
      return response.data;
    });
  }
}

AppMenuService.$inject = ['$http', 'SERVICE_BASE'];
