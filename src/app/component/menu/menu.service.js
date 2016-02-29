export default class AppMenuService {
  constructor($http, SERVICE_BASE) {
    this.$http = $http;
    this.root = SERVICE_BASE;
  }

  values() {
    return this.$http.get(this.root + 'menu').then(function (response) {
      console.log('root:', this.root, 'return:', response);
      return response.data;
    });
  }
}

AppMenuService.$inject = ['$http', 'SERVICE_BASE'];
