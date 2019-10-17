<template>
	<div>
		<div class="d-sm-flex align-items-center justify-content-between mb-4">
	        <h1 class="h3 mb-0 text-gray-800">Eventos</h1>
	        <button class="btn btn-sm btn-success" @click="new_user">Cadastrar</button>
	    </div>

	    <alert :type="alert.type" :mensagem="alert.msg" />

		<ul class="nav nav-tabs" role="tablist" style="margin-bottom: 5px;">
	        <li class="nav-item">
	        	<router-link :to="{name: 'nextEvent', params: {get: 'Proximos'} }" class="nav-link active" data-toggle="tab">Próximos</router-link>
	        </li>

	        <li class="nav-item">
	        	<router-link :to="{name: 'oldEvent', params: {get: 'Passados'} }" class="nav-link" data-toggle="tab">Anteriores</router-link>
	        </li>
	    </ul>

	    <div class="row">
	        <div class="col-12">
	            <div class="tab-content">
	            	<transition mode="out-in" name="leftIn">
						<router-view :key="get" @modal="show_modal" ref="component"></router-view>
					</transition>
	            </div>
	        </div>
	    </div>

	    <eventoModal :people="people" :action="modal_action" @alert="show_alert" />
	</div>
</template>

<script>
	import eventoModal from "@/components/application/modal/Evento.vue"
	import alert       from "@/components/alert.vue"

	export default {
		name: "view-usuarios",
		props: ["get"],
		components: { eventoModal, alert },

		beforeRouteUpdate(to, from, next) {
			next();
		},

		data: () => { return {
			alert: {
				type: "",
				msg: ""
			},

			people: {},
			modal_action: ""
		}},

		methods: {
			show_alert(payload) {
				this.alert.type = (payload.status == "success") ? "alert-success" : "alert-danger"
				this.alert.msg  = payload.result

				$("#modal-usuario").modal('hide')
				this.$refs.component.get_data()
				$("#app-alert").show()
				setTimeout(() => $("#app-alert").hide(), 3000 )
			}, 

			new_user() {
				this.people = {}
				this.modal_action = "add"
				$("#modal-usuario").modal()
			},

			show_modal(payload) {
				this.people = payload
				this.modal_action = "view"
				$("#modal-usuario").modal()
			}
		}
	};
</script>

<style>
</style>