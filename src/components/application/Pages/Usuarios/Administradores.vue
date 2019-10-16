<template>
	<div>
		<table class="table table-striped table-sm">
    		<thead align="center">
    			<th>ID</th>
    			<th>username</th>
    			<th>people_id</th>
    			<th>online</th>
    			<th>active</th>
    		</thead>

    		<tbody v-if="response" align="center">
    			<tr v-for="(user, index) in response.result" :key="index">
					<td>{{ user.id }}</td>
					<td>{{ user.username }}</td>
					<td>{{ user.people_id }}</td>
					<td>{{ user.online }}</td>
					<td>{{ user.active }}</td>
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

		async created() {
			this.users = await this.GET("User", "/");
		},
	};
</script>

<style>
	
</style>