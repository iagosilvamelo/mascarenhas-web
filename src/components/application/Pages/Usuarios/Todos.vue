<template>
	<div>
		<table class="table table-striped table-sm">
    		<thead align="center">
    			<th>ID</th>
    			<th>Usuário</th>
    			<th>Online</th>
    			<th>Ativo</th>
    			<th></th>
    		</thead>
			
			<transition mode="out-in" name="leftIn">
	    		<tbody v-if="response" align="center">
	    			<tr v-for="(user, index) in response.result" :key="index">
						<td>{{ user.id }}</td>
						<td>{{ user.username }}</td>
						<td>
							<font-awesome-icon v-if="user.online == 1" icon="dot-circle" class="verde" />
							<font-awesome-icon v-else icon="dot-circle" class="vermelho" />
						</td>
						<td>
							<font-awesome-icon v-if="user.active == 1" icon="dot-circle" class="verde" />
							<font-awesome-icon v-else icon="dot-circle" class="vermelho" />
						</td>
						<td><font-awesome-icon icon="eye" class="info pointer" /></td>
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
		props: ["table", "method"],
		mixins: [api],

		async created() {
			this.users = await this.GET("User");
		},
	};
</script>

<style>
	
</style>