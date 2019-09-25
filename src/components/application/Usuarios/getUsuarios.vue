<template>
	<div>
		<table class="table table-striped table-sm">
    		<thead align="center">
    			<th>ID</th>
    			<th>Internal Code</th>
    			<th>Nome</th>
    			<th>Telefone</th>
    			<th>Ramal</th>
    			<th>Start</th>
    			<th>End</th>
    		</thead>

    		<tbody v-if="response" align="center">
    			<tr v-for="(ramal, index) in response" :key="index">
					<td>{{ ramal.ID }}</td>
					<td>{{ ramal.INTERNAL_CODE }}</td>
					<td>{{ ramal.NAME }}</td>
					<td>{{ ramal.PHONE_NUMBER }}</td>
					<td>{{ ramal.EXTENSION }}</td>
					<td>{{ ramal.START_TIME }}</td>
					<td>{{ ramal.END_TIME }}</td>
				</tr>

    		</tbody>
    		<div v-else><Loading/></div>
    	</table>
	</div>
</template>

<script>
	import api     from "@/mixins/api.js";
	import replace from "@/mixins/replace.js";

	export default {
		props: ["table", "method"],
		mixins: [api],

		created() {
			this.GET("Ramal","All");
		},
	};
</script>

<style>
	
</style>