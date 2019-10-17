<template>
	<div>
		<div class="d-sm-flex align-items-center justify-content-between mb-4">
	        <h1 class="h3 mb-0 text-gray-800">Usuários</h1>
	        <button class="btn btn-sm btn-success" data-toggle="modal" data-target="#modal-usuario">Cadastrar</button>
	    </div>

	    <alert :type="alert.type" :mensagem="alert.msg" />

		<ul class="nav nav-tabs" role="tablist" style="margin-bottom: 5px;">
	        <li class="nav-item">
	        	<router-link :to="{name: 'getAll', params: {get: 'Todos'} }" class="nav-link active" data-toggle="tab">Totos</router-link>
	        </li>

	        <li class="nav-item">
	        	<router-link :to="{name: 'getUsers', params: {get: 'Usuarios'} }" class="nav-link" data-toggle="tab">Usuarios</router-link>
	        </li>

	        <li class="nav-item">
	        	<router-link :to="{name: 'getAdmins', params: {get: 'Administradores'} }" class="nav-link" data-toggle="tab">Administradores</router-link>
	        </li>
	    </ul>

	    <div class="row">
	        <div class="col-12">
	            <div class="tab-content">
	            	<transition mode="out-in" name="leftIn">
						<router-view :key="get"></router-view>
					</transition>
	            </div>
	        </div>
	    </div>

	    <usuarioModal :people="{}" :action="'add'" @alert="show_alert" />
	</div>
</template>

<script>
	import usuarioModal from "@/components/application/modal/Usuario.vue"
	import alert        from "@/components/alert.vue"

	export default {
		name: "view-usuarios",
		props: ["get"],
		components: { usuarioModal, alert },

		beforeRouteUpdate(to, from, next) {
			next();
		},

		data: () => { return {
			alert: {
				type: "",
				msg: ""
			}
		}},

		methods: {
			show_alert(payload) {
				this.alert.type = (payload.status == "success") ? "alert-success" : "alert-danger"
				this.alert.msg  = payload.result

				$("#modal-usuario").modal('hide')
				this.$children[4].get_data()
				$("#app-alert").show()
				setTimeout(() => $("#app-alert").hide(), 3000 )
			}
		}
	};
</script>

<style>
</style>