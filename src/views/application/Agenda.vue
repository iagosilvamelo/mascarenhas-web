<template>
	<section>
		<div class="d-sm-flex align-items-center justify-content-between mb-4">
	        <h1 class="h3 mb-0 text-gray-800">Agenda</h1>
	    </div>

	    <transition mode="out-in" name="leftIn">
			<div v-if="events.result" class="row">
				<div v-for="evt in events.result" class="col-xl-4 col-lg-6 mb-3">

					<div class="card border-left-primary shadow h-100 py-2">
		                <div class="card-body">
		                    <div class="row no-gutters align-items-center">
		                        <div class="col mr-2">
		                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">{{ evt.titulo }}</div>

										<div class="row no-gutters align-items-center">
		                                    <div class="col">
		                                        <div class="col-12 col-lg-12 col-xl-12">
		                                            <small>Início</small> - <small>{{ evt.date_ini | moment("DD/MM/Y") }}</small>
		                                        </div>
		                                    </div>
		                                </div>

		                                <div class="row no-gutters align-items-center">
		                                    <div class="col">
		                                        <div class="col-12 col-lg-12 col-xl-12">
		                                            <small>Fim</small> - <small>{{ evt.date_fim | moment("DD/MM/Y") }}</small>
		                                        </div>
		                                    </div>
		                                </div>

		                        </div>
		                        <div class="col-auto">
		                            <font-awesome-icon icon="calendar-check" size="lg" class="info" />
		                        </div>
		                    </div>
		                </div>
		            </div>

				</div>
			</div>

			<Loading v-else />
		</transition>
	</section>
</template>

<script>
	import api from "@/mixins/api.js"

	export default {
		name: "agenda",
		mixins: [api],

		data() { return {
			events: { result: null }
		}},

		created() {
			this.get_data()
		},

		computed: {
			hoje() { return this.$moment().format("Y-M-D") }
		},

		methods: {
			async get_data() {
				this.events = null
				this.events = await this.GET("Evento")
			},
		}
	}
</script>

<style>
	
</style>