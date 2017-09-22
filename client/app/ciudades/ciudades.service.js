(function () {
  'use strict';
  angular.module('palmiGirosApp')
  .factory('ciudadesService', ciudadesService);
  ciudadesService.inject =["$resource","API"];
  function ciudadesService($resource, API) {
    return $resource(API+"/api/ciudades/:id",{
      id:'@id'

    },{
      getCiudades:{
        url:API+'/api/ciudades',
        method:'GET',
        isArray:true
      },

      updateCiudades:{
        url:API+'/api/ciudades/actualizarConDepartamentos/:id',
        method:'PUT',
        params : {id : "@id"}

      }


    });



  }
})();
