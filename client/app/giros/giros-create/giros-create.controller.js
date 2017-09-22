(function(){
	'use strict';

	class girosCreateComponent{
		constructor( girosService,ciudadesService,clientesService){
			this.girosService = girosService;
			this.ciudadesService = ciudadesService;
			this.clientesService = clientesService;
			this.giro = {
				idClienteEmisor:{
					id: null
				},
				idClienteReceptor:{
					id: null
				}
			}

		}

		$onInit(){
				this.ciudadesService.query().$promise
				.then(response => {
					this.ciuEmisor=response;
					this.ciuReceptor=response
				})
				.catch(err => console.log("ERROR"));


		}


		encEmisor(){
			console.log(this.docuEmisor);
			this.clientesService.searchCliente({documento:this.docuEmisor}).$promise
			.then(response => {
				console.log("USER",response);
				this.clienteEmisor = response;
				this.giro.idClienteEmisor.id = this.clienteEmisor.id;
			})
		}

		encReceptor(){
			this.clientesService.searchCliente({documento:this.docuReceptor}).$promise
			.then(response => {
				console.log("USER",response);
				this.clienteReceptor = response;
				this.giro.idClienteReceptor.id = this.clienteReceptor.id;
			})
		}

		createGiro(){
			this.girosService.save(this.giro).$promise
			.then(response => {
				console.log("giro creado",response);
			})
			.catch(err => console.log("ERROR",err));
		}

  }

girosCreateComponent.$inject=['girosService','ciudadesService','clientesService'];
angular.module('palmiGirosApp')
	.component('girosCreate',{
		templateUrl:"app/giros/giros-create/giros-create.html",
		controller:girosCreateComponent,
		controllerAs:'vm'
	});

})();
