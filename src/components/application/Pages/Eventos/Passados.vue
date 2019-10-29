<template>
	<div>
		<table class="table table-striped table-sm">
    		<thead align="center">
    			<th>ID</th>
    			<th>Título</th>
    			<th>Tipo</th>
    			<th>Início</th>
    			<th>Fim</th>
    			<th></th>
    		</thead>
			
			<transition mode="out-in" name="leftIn">
	    		<tbody v-if="eventos" align="center">
	    			<tr v-for="(event, index) in eventos.result" :key="index" v-if="event.date_ini < hoje">
						<td>{{ event.id }}</td>
						<td>{{ event.titulo }}</td>
						<td>{{ event.tipo }}</td>
						<td>{{ event.date_ini | moment("D/M/Y") }}</td>
						<td>{{ event.date_fim | moment("D/M/Y") }}</td>
						<td><font-awesome-icon icon="eye" class="info pointer" @click="view(event)" /></td>
					</tr>

	    		</tbody>
	    		<div v-else><Loading/></div>
	    	</transition>
    	</table>
	</div>
</template>

<script>
	import api     from "@/mixins/api.js";
	import replace from "@/mixins/replace.js";

	export default {
		name: "passados",
		mixins: [api, replace],

		data() { return {
			eventos: null
		}},

		created() {
			this.get_data()
		},

		computed: {
			hoje() { return this.$moment().format("Y-M-D") }
		},

		methods: {
			async get_data() {
				this.eventos = null
				this.eventos = await this.GET("Evento")
			},

			view(event) { 
				this.$emit("modal", event)
			},
		}
	};
</script>

<style>
	
</style>