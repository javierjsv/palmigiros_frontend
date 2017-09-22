(function () {
  'use strict';
  angular.module('palmiGirosApp')
  .factory('girosService', girosService);
  girosService.inject =["$resource","API"];
  function girosService($resource, API) {
    return $resource(API+"/api/giros/:id",{
      id:'@id'

    },{
      getGiros:{
        url:API+'/api/giros/findGiro',
        method:'GET',
        isArray:true
      }


    });



  }
})();
