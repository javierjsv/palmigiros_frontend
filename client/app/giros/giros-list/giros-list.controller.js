(function(){
	'use strict';

	class girosListComponent{
		constructor( girosService,ciudadesService,clientesService){
			this.girosService = girosService;
			this.ciudadesService = ciudadesService;
			this.clientesService = clientesService;

		}

		searchGiro(){
			this.clientesService.searchCliente({documento:this.numDoc}).$promise
			.then(response => {
				console.log("USER",response);
				this.cliente = response;

				this.girosService.getGiros({idClienteReceptor:this.cliente.id}).$promise
				.then(response => {
					console.log("giros",response);
					this.giros = response;

				})
			})
		}

		}


angular.module('palmiGirosApp')
	.component('girosList',{
		templateUrl:"app/giros/giros-list/giros-list.html",
		controller:girosListComponent,
		controllerAs:'vm'
	});

})();
