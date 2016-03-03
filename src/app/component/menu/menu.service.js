export default class AppMenuService {
  /**
   * @ngInject
   */
  constructor($http, SERVICE_BASE) {
    this.$http = $http;
    this.root = SERVICE_BASE;
  }

  values() {
    let base = this.root;
    return this.$http.get(`${base}menu`).then(function (response) {
      return response.data;
    });
  }
}
