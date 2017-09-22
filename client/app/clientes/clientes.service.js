(function () {
  'use strict';
  angular.module('palmiGirosApp')
  .factory('clientesService', clientesService);
  clientesService.inject =["$resource","API"];
  function clientesService($resource, API) {
    return $resource(API+"/api/ciudades/:id",{
      id:'@id'

    },{
      searchCliente:{
        url:API+'/api/clientes/find',
        method:'GET',
      }


    });



  }
})();
