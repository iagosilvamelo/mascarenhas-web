<template>
	<div class="modal fade" id="modal-palestra">
		<div class="modal-dialog modal-xl">
			<div class="modal-content">
				
				<div class="modal-header">
					<h4 class="modal-title">Palestra</h4>
					<button type="button" class="close" data-dismiss="modal">&times;</button>
				</div>

				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<img src="" style="width: 16%; margin-left: 42%;">
						</div>
					</div>

					<div class="row">
				        <div class="col-lg-6">
				            <div class="form-group">
				                <label>Título</label>
				                <input type="text" class="form-control form-control-sm" :class="[(palestra.titulo) ? '' : incomplete]" v-model="palestra.titulo">
				            </div>
				        </div>

				        <div class="col-lg-6">
				             <div class="form-group">
				                <label>Palestrante</label>
				                <select class="form-control form-control-sm" :class="[(palestra.palestrante_id) ? '' : incomplete]" v-model="palestra.palestrante_id">
				                	<option v-for="p in palestrantes.result" :value="p.id">{{ p.nome }}</option>
				                </select>
				            </div>
				        </div>
				    </div>

				    <div class="row">
				    	<div class="col-12">
				    		<div class="form-group">
				                <label>Programação</label>
				                <textarea class="form-control form-control-sm" v-model="palestra.programa"></textarea>
				            </div>
				    	</div>
				    </div>
				</div>

				<div class="modal-footer">
					<button class="btn btn-danger btn-sm"  v-if="action == 'view'" @click="deletar">Deletar</button>
					<button class="btn btn-warning btn-sm" v-if="action == 'view'" @click="atualizar">Atualizar</button>
					<button class="btn btn-success btn-sm" v-if="action == 'add'"  @click="adicionar">Cadastrar</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import api from "@/mixins/api.js"

	export default {
		name: "modal-palestra",
		props: [ 'palestra', 'action' ],
		mixins: [api],

		data: () => { return {
			incomplete: false,
			palestrantes: { result: null, status: null }
		}},

		created() {
			this.get_palestrantes();
		},

		methods: {
			async get_palestrantes() {
				this.palestrantes = await this.GET("Palestrante")
			},

			async adicionar() {
				//
				//	Verifica se todos os dados foram preenchidos
				//
				if ( !this.palestra.titulo || !this.palestra.date_ini || !this.palestra.date_fim || !this.palestra.tipo || !this.palestra.local || !this.palestra.contato || !this.palestra.telefone ) 
				{
					window.alert("Preencha os campos obrigatórios!")
					this.incomplete = "focus"
				}

				else 
				{
					const palestra = await this.POST("palestra", this.palestra)
					if ( palestra.status == "success") this.$emit("alert", { status: "success", result: "palestra adicionado com sucesso" })
					else window.alert(palestra.result)
				}
			},

			async atualizar() {
				//
				//	Verifica se todos os dados foram preenchidos
				//
				if ( !this.palestra.titulo || !this.palestra.date_ini || !this.palestra.date_fim || !this.palestra.tipo || !this.palestra.local || !this.palestra.contato || !this.palestra.telefone ) 
				{
					window.alert("Preencha os campos obrigatórios!")
					this.incomplete = "focus"
				}

				else 
				{
					const palestra = await this.PUT("Palestra", this.palestra)
					if ( palestra.status == "success") this.$emit("alert", { status: "success", result: "Palestra atualizado com sucesso" })
					else window.alert(palestra.result)
				}
			},

			async deletar() {
				if ( window.confirm(`Isso irá deletar o usuário ${this.palestra.nome} permanentemente.`)) {
					const response = await this.DELETE('Palestra', this.palestra.id)
					if ( response.status == "success") this.$emit("alert", { status: "success", result: "Palestra deletado com sucesso" })
					else window.alert(response.result)
				}
			}
		}
	}
</script>

<style scoped>
</style>
