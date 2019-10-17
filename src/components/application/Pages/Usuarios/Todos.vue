<template>
	<div>
		<table class="table table-striped table-sm">
    		<thead align="center">
    			<th>ID</th>
    			<th>Nome</th>
    			<th>Tipo</th>
    			<th>Email</th>
    			<th></th>
    		</thead>
			
			<transition mode="out-in" name="leftIn">
	    		<tbody v-if="users" align="center">
	    			<tr v-for="(user, index) in users.result" :key="index">
						<td>{{ user.id }}</td>
						<td>{{ user.nome }}</td>
						<td>
							<span v-if="user.type == 1">Usuário</span>
							<span v-if="user.type == 2">Administrador</span>
							<span v-if="user.type == 3">Root</span>
						</td>
						<td>{{ user.email }}</td>
						<td><font-awesome-icon icon="eye" class="info pointer" @click="view(user)" /></td>
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
		name: "component-todos",
		mixins: [api],

		data() { return {
			users: null
		}},

		created() {
			this.get_data()
			// console.log(this)
		},

		methods: {
			async get_data() {
				this.users = null
				this.users = await this.GET("People")
			},

			view(user) { 
				this.$emit("modal", user)
			},
		}
	};
</script>

<style>
	
</style>