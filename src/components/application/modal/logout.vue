<template>
	<div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">

			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Sair</h5>
					<button class="close" type="button" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">×</span>
					</button>
				</div>

				<div class="modal-body">Deseja realmente sair do sistema?</div>

				<div class="modal-footer">
					<button class="btn btn-sm btn-danger"  data-dismiss="modal">Cancelar</button>
					<button class="btn btn-sm btn-success" data-dismiss="modal" @click="logof">Sair</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import api from '@/mixins/api.js'

	export default {
		mixins: [api],

   		methods: {
      		async logof() {
        		const result = await this.Logoff()
        		if ( result.status == "error" ) window.alert(result.result)
      		}
    	}
	}
</script>

<style scoped>
</style>
