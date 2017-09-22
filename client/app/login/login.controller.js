'use strict';

(function(){

class LoginComponent {
  constructor(AuthService) {
    this.AuthService = AuthService;
  }
  login(){
    this.AuthService.login(this.usuario)
  }
}

angular.module('palmiGirosApp')
  .component('login', {
    templateUrl: 'app/login/login.html',
    controller: LoginComponent,
    controllerAs: 'vm'
  });

})();
