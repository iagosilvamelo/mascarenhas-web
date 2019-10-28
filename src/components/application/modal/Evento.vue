<template>
	<div class="modal fade" id="modal-usuario">
		<div class="modal-dialog modal-xl">
			<div class="modal-content">
				
				<div class="modal-header">
					<h4 class="modal-title">Evento</h4>
					<button type="button" class="close" data-dismiss="modal">&times;</button>
				</div>

				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<img src="" style="width: 16%; margin-left: 42%;">
						</div>
					</div>

					<div class="row">
				        <div class="col-lg-4">
				            <div class="form-group">
				                <label>Título</label>
				                <input type="text" class="form-control form-control-sm" :class="[(evento.titulo) ? '' : incomplete]" v-model="evento.titulo">
				            </div>
				        </div>

				        <div class="col-lg-4">
				             <div class="form-group">
				                <label>Início</label>
				                <input type="date" class="form-control form-control-sm" :class="[(evento.date_ini) ? '' : incomplete]" v-model="evento.date_ini">
				            </div>
				        </div>

				        <div class="col-lg-4">
				             <div class="form-group">
				                <label>Fim</label>
				                <input type="date" class="form-control form-control-sm" :class="[(evento.date_fim) ? '' : incomplete]" v-model="evento.date_fim">
				            </div>
				        </div>
				    </div>

				    <div class="row">
				    	<div class="col-lg-6">
				             <div class="form-group">
				                <label>Tipo</label>
				                <input type="text" class="form-control form-control-sm" :class="[(evento.tipo) ? '' : incomplete]" v-model="evento.tipo">
				            </div>
				        </div>

				        <div class="col-lg-6">
				             <div class="form-group">
				                <label>Local</label>
				                <input type="text" class="form-control form-control-sm" :class="[(evento.local) ? '' : incomplete]" v-model="evento.local">
				            </div>
				        </div>
				    </div>

				    <div class="row">
				        <div class="col-lg-4">
				            <div class="form-group">
				                <label>Contato</label>
				                <input type="text" class="form-control form-control-sm" :class="[(evento.contato) ? '' : incomplete]" v-model="evento.contato">
				            </div>
				        </div>

				        <div class="col-lg-4">
				             <div class="form-group">
				                <label>Telefone</label>
				                <input type="text" class="form-control form-control-sm" :class="[(evento.telefone) ? '' : incomplete]" v-model="evento.telefone">
				            </div>
				        </div>

				        <div class="col-lg-4">
				             <div class="form-group">
				                <label>Site</label>
				                <input type="text" class="form-control form-control-sm" v-model="evento.site">
				            </div>
				        </div>
				    </div>

				    <div class="row">
				    	<div class="col-12">
				    		<div class="form-group">
				                <label>Programação</label>
				                <textarea class="form-control form-control-sm" v-model="evento.programa"></textarea>
				            </div>
				    	</div>
				    </div>

				    <hr>

				    <div class="row">
				    	<div class="col-lg-4">
				             <div class="form-group">
				                <label>CEP</label>
					            <input type="text" class="form-control form-control-sm" v-model="evento.cep" @keyup.enter="get_cep">
				            </div>
				        </div>
				    </div>

				    <div class="row">
				    	<div class="col-lg-5">
				             <div class="form-group">
				                <label>Logradouro</label>
				                <input type="text" class="form-control form-control-sm" v-model="evento.endereco">
				            </div>
				        </div>

				        <div class="col-lg-3">
				             <div class="form-group">
				                <label>Número</label>
				                <input type="text" class="form-control form-control-sm" v-model="evento.numero">
				            </div>
				        </div>

				        <div class="col-lg-4">
				             <div class="form-group">
				                <label>Complemento</label>
				                <input type="text" class="form-control form-control-sm" v-model="evento.complemento">
				            </div>
				        </div>
				    </div>

				    <div class="row">
				    	<div class="col-lg-5">
				             <div class="form-group">
				                <label>Bairro</label>
				                <input type="text" class="form-control form-control-sm" v-model="evento.bairro">
				            </div>
				        </div>

				        <div class="col-lg-5">
				             <div class="form-group">
				                <label>Município</label>
				                <input type="text" class="form-control form-control-sm" v-model="evento.cidade">
				            </div>
				        </div>

				    	<div class="col-lg-2">
				             <div class="form-group">
				                <label>UF</label>
				                <input type="text" class="form-control form-control-sm" v-model="evento.uf">
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
		name: "modal-evento",
		props: [ 'evento', 'action' ],
		mixins: [api],

		data: () => { return {
			incomplete: false,
			pwd_verify: "",
			estados: {},
			palestrantes: {}
		}},

		created() {
			// this.$loadScript("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js")
			this.get_palestrantes();
		},

		methods: {
			get_cep() {
				const cep = this.evento.cep.replace(/[^0-9]/g,'')

				fetch(`http://viacep.com.br/ws/${cep}/json`)
				.then(r => r.json())
				.then(r => {
					this.evento.endereco = r.logradouro
					this.evento.bairro   = r.bairro
					this.evento.uf       = r.uf
					this.evento.cidade   = r.localidade
				})
			},

			async get_palestrantes() {
				this.palestrantes = await this.GET("People")
			},

			async adicionar() {
				//
				//	Verifica se todos os dados foram preenchidos
				//
				if ( !this.evento.titulo || !this.evento.date_ini || !this.evento.date_fim || !this.evento.tipo || !this.evento.local || !this.evento.contato || !this.evento.telefone ) 
				{
					window.alert("Preencha os campos obrigatórios!")
					this.incomplete = "focus"
				}

				else 
				{
					const evento = await this.POST("Evento", this.evento)
					if ( evento.status == "success") this.$emit("alert", { status: "success", result: "Evento adicionado com sucesso" })
					else window.alert(evento.result)
				}
			},

			async atualizar() {
				//
				//	Verifica se todos os dados foram preenchidos
				//
				if ( !this.evento.titulo || !this.evento.date_ini || !this.evento.date_fim || !this.evento.tipo || !this.evento.local || !this.evento.contato || !this.evento.telefone ) 
				{
					window.alert("Preencha os campos obrigatórios!")
					this.incomplete = "focus"
				}

				else 
				{
					const evento = await this.PUT("Evento", this.evento)
					if ( evento.status == "success") this.$emit("alert", { status: "success", result: "Evento atualizado com sucesso" })
					else window.alert(evento.result)
				}
			},

			async deletar() {
				if ( window.confirm(`Isso irá deletar o usuário ${this.evento.nome} permanentemente.`)) {
					const response = await this.DELETE('Evento', this.evento.id)
					if ( response.status == "success") this.$emit("alert", { status: "success", result: "Evento deletado com sucesso" })
					else window.alert(response.result)
				}
			}
		}
	}
</script>

<style scoped>
</style>
