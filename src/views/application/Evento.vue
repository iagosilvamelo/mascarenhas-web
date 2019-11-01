<template>
	<div>
		<div class="d-sm-flex align-items-center justify-content-between mb-4">
	        <h1 class="h3 mb-0 text-gray-800">Evento</h1>
	        <button class="btn btn-sm btn-success" @click="add">Adicionar</button>
	    </div>

	    <alert :type="alert.type" :mensagem="alert.msg" />

	    <div class="row">
	        <div class="col-lg-4">
	            <div class="form-group">
	                <label>Título</label>
	                <input type="text" class="form-control form-control-sm" :value="evento.result.titulo"   readonly>
	            </div>
	        </div>

	        <div class="col-lg-4">
	             <div class="form-group">
	                <label>Início</label>
	                <input type="text" class="form-control form-control-sm" :value="evento.result.date_ini | moment('D/M/Y')" readonly>
	            </div>
	        </div>

	        <div class="col-lg-4">
	             <div class="form-group">
	                <label>Fim</label>
	                <input type="text" class="form-control form-control-sm" :value="evento.result.date_fim | moment('D/M/Y')" readonly>
	            </div>
	        </div>
	    </div>

	    <h4>Palestras</h4>
	    <hr>

	    <table class="table table-striped table-sm">
	    	<thead align="center">
	    		<th>ID</th>
	    		<th>Título</th>
	    		<th>Palestrante</th>
	    		<th></th>
	    	</thead>
			
			<transition mode="out-in" name="leftIn">
		    	<tbody v-if="palestras" align="center">
		    		<tr v-for="p in palestras.result">
		    			<td>{{ p.id }}</td>
		    			<td>{{ p.titulo }}</td>
		    			<td>{{ get_palestrante_name(p.palestrante_id) }}</td>
		    			<td><font-awesome-icon icon="eye" class="info pointer" @click="view(p)" /></td>
		    		</tr>
		    	</tbody>
		    	<div v-else><Loading/></div>
		    </transition>
	    </table>

	    <viewSetor :palestra="modal_data" :action="modal_action" @alert="show_alert" />
	</div>
</template>

<script>
	import palestra from "@/components/application/modal/Palestra.vue"
	import alert    from "@/components/alert.vue"
	import api      from "@/mixins/api.js"

	export default {
		name: "view-evento",
		props: ["get"],
		components: { alert, palestra },
		mixins: [api],

		data: () => { return {
			alert: {
				type: "",
				msg: ""
			},

			evento: { status: null, result: {} },
			palestras: null,
			palestrantes: null,
			modal_data: null,
			modal_action: ""
		}},

		created() {
			this.get_event()
			this.get_palestrantes()
			this.get_palestras()
		},

		methods: {
			async get_event() {
				this.evento = await this.GET("Evento", this.$route.params.get )
			},

			async get_palestras() {
				this.palestras = await this.GET("Palestra")
			},

			async get_palestrantes() {
				this.palestrantes = await this.GET("Palestrante")
			},

			get_palestrante_name(payload) {
				for (var i = 0; i <= this.palestrantes.result.length -1; i++) {
					if ( this.palestrantes.result[i].id == payload){
						return this.palestrantes.result[i].nome
					}
				}
			},

			show_alert(payload) {
				this.alert.type = (payload.status == "success") ? "alert-success" : "alert-danger"
				this.alert.msg  = payload.result

				$("#modal-usuario").modal('hide')
				this.$refs.component.get_data()
				$("#app-alert").show()
				setTimeout(() => $("#app-alert").hide(), 3000 )
			}, 

			add() {
				this.modal_data = {}
				this.modal_action = "add"
				$("#modal-usuario").modal()
			},

			show_modal(payload) {
				this.modal_data = payload
				this.modal_action = "view"
				$("#modal-palestra").modal()
			}
		}
	};
</script>

<style>
</style>