<template>
	<div class="modal fade" id="modal-usuario">
		<div class="modal-dialog modal-xl">
			<div class="modal-content">
				
				<div class="modal-header">
					<h4 class="modal-title">Usuário</h4>
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
				                <label>Nome</label>
				                <input type="text" class="form-control form-control-sm" :class="[(people.nome) ? '' : incomplete]" v-model="people.nome">
				            </div>
				        </div>

				        <div class="col-lg-4">
				             <div class="form-group">
				                <label>Nascimento</label>
				                <input type="date" class="form-control form-control-sm" :class="[(people.nascimento) ? '' : incomplete]" v-model="people.nascimento">
				            </div>
				        </div>

				        <div class="col-lg-4">
				            <div class="form-group">
				                <label>Tipo</label>
				                <select id="tipo" class="form-control form-control-sm" :class="[(people.type) ? '' : incomplete]" v-model="people.type">
				                	<option value="0" disabled>Tipo de usuário</option>
				                	<option value="1">Usuário</option>
				                	<option value="2">Administrador</option>
				                	<option value="3">Root</option>
				                </select>
				            </div>
				        </div>
				    </div>

				    <div class="row">
				    	<div class="col-lg-4">
				             <div class="form-group">
				                <label>Email</label>
				                <input type="text" class="form-control form-control-sm" :class="[(people.email) ? '' : incomplete]" v-model="people.email">
				            </div>
				        </div>

				    	<div class="col-lg-4">
				             <div class="form-group">
				                <label>Telefone celular</label>
				                <input type="text" class="form-control form-control-sm" v-model="people.celular">
				            </div>
				        </div>

				    	<div class="col-lg-4">
				             <div class="form-group">
				                <label>Telefone fixo</label>
				                <input type="text" class="form-control form-control-sm" v-model="people.fone">
				            </div>
				        </div>
				    </div>

				    <hr>

				    <div class="row">
				    	<div class="col-lg-4">
				             <div class="form-group">
				                <label>CEP</label>
					            <input type="text" class="form-control form-control-sm" v-model="people.cep" @keyup.enter="get_cep">
				            </div>
				        </div>
				    </div>

				    <div class="row">
				    	<div class="col-lg-5">
				             <div class="form-group">
				                <label>Logradouro</label>
				                <input type="text" class="form-control form-control-sm" v-model="people.endereco">
				            </div>
				        </div>

				        <div class="col-lg-3">
				             <div class="form-group">
				                <label>Número</label>
				                <input type="text" class="form-control form-control-sm" v-model="people.endereco">
				            </div>
				        </div>

				        <div class="col-lg-4">
				             <div class="form-group">
				                <label>Complemento</label>
				                <input type="text" class="form-control form-control-sm" v-model="people.endereco">
				            </div>
				        </div>
				    </div>

				    <div class="row">
				    	<div class="col-lg-5">
				             <div class="form-group">
				                <label>Bairro</label>
				                <input type="text" class="form-control form-control-sm" v-model="people.bairro">
				            </div>
				        </div>

				        <div class="col-lg-5">
				             <div class="form-group">
				                <label>Município</label>
				                <input type="text" class="form-control form-control-sm" v-model="people.cidade">
				            </div>
				        </div>

				    	<div class="col-lg-2">
				             <div class="form-group">
				                <label>UF</label>
				                <input type="text" class="form-control form-control-sm" v-model="people.uf">
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
	import api   from "@/mixins/api.js"

	export default {
		name: "modal-usuario",
		props: [ 'people', 'action' ],
		mixins: [api],

		data: () => { return {
			incomplete: false,
			pwd_verify: "",
			estados: {},
		}},

		methods: {
			get_cep() {
				const cep = this.people.cep.replace(/[^0-9]/g,'')

				fetch(`http://viacep.com.br/ws/${cep}/json`)
				.then(r => r.json())
				.then(r => {
					this.people.endereco = r.logradouro
					this.people.bairro   = r.bairro
					this.people.uf       = r.uf
					this.people.cidade   = r.localidade
				})
			},

			async adicionar() {
				//
				//	Verifica se todos os dados foram preenchidos
				//
				if ( !this.people.nome || !this.people.nascimento || !this.people.email || !this.people.type ) 
				{
					window.alert("Preencha os campos obrigatórios!")
					this.incomplete = "focus"
				}

				else 
				{
					const people = await this.POST("People", this.people)
					if ( people.status == "success") this.$emit("alert", { status: "success", result: "Usuario adicionado com sucesso" })
					else window.alert(people.result)
				}
			},

			async atualizar() {
				//
				//	Verifica se todos os dados foram preenchidos
				//
				if ( !this.people.nome || !this.people.nascimento || !this.people.email || !this.people.type ) 
				{
					window.alert("Preencha os campos obrigatórios!")
					this.incomplete = "focus"
				}

				else 
				{
					const people = await this.PUT("People", this.people)
					if ( people.status == "success") this.$emit("alert", { status: "success", result: "Usuario atualizado com sucesso" })
					else window.alert(people.result)
				}
			},

			async deletar() {
				if ( window.confirm(`Isso irá deletar o usuário ${this.people.nome} permanentemente.`)) {
					const response = await this.DELETE('People', this.people.id)
					if ( response.status == "success") this.$emit("alert", { status: "success", result: "Usuario deletado com sucesso" })
					else window.alert(response.result)
				}
			}
		}
	}
</script>

<style scoped>
</style>
