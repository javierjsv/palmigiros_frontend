(function() {
    'use strict';

    angular.module('palmiGirosApp')
      .config(config);

    config.inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('giros-create', {
                url: '/giros-create',
                template: '<giros-create></giros-create>'
              })
            .state('giros-list',{
                url:'/giros-list',
                template: '<giros-list></giros-list>'
            })

    }

})();
