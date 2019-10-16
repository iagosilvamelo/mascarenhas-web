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
				                	<option value="2">Palestrante</option>
				                	<option value="3">Super Administrador</option>
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
					            <div class="input-group input-group-sm">
					            	<input type="text" class="form-control" v-model="people.cep" aria-label="Small" aria-describedby="get-cep">
					                <div class="input-group-append">
										<span class="input-group-text pointer" id="get-cep" @click="get_cep">Buscar</span>
									</div>
					            </div>
				            </div>
				        </div>

				        <div class="col-lg-4">
				             <div class="form-group">
				                <label>UF</label>
				                <select id="tipo" class="form-control form-control-sm" v-model="people.uf">
				                	<option v-for="uf in estados" :value="uf.sigla">{{ uf.sigla }} - {{ uf.nome }}</option>
				                </select>
				            </div>
				        </div>

				        <div class="col-lg-4">
				             <div class="form-group">
				                <label>Município</label>
				                <input type="text" class="form-control form-control-sm" v-model="people.cidade">
				            </div>
				        </div>
				    </div>

				    <div class="row">
				    	<div class="col-lg-4">
				             <div class="form-group">
				                <label>Logradouro</label>
				                <input type="text" class="form-control form-control-sm" v-model="people.endereco">
				            </div>
				        </div>

				        <div class="col-lg-2">
				             <div class="form-group">
				                <label>Número</label>
				                <input type="text" class="form-control form-control-sm" v-model="people.endereco">
				            </div>
				        </div>

				        <div class="col-lg-2">
				             <div class="form-group">
				                <label>Complemento</label>
				                <input type="text" class="form-control form-control-sm" v-model="people.endereco">
				            </div>
				        </div>

				        <div class="col-lg-4">
				             <div class="form-group">
				                <label>Bairro</label>
				                <input type="text" class="form-control form-control-sm" v-model="people.bairro">
				            </div>
				        </div>
				    </div>

				    <div class="row" v-if="action == 'add'">
				    	<div class="col-12">
				    		<hr>
				    	</div>

				        <div class="col-lg-4">
				    		<div class="form-group">
				                <label>Usuário</label>
				                <input type="text" class="form-control form-control-sm" :class="[(user.username) ? '' : incomplete]" v-model="user.username">
				            </div>
				    	</div>

				    	<div class="col-lg-4">
				    		<div class="form-group">
				                <label>Senha</label>
				                <input type="password" class="form-control form-control-sm" :class="[(password.senha) ? '' : incomplete], pwd_verify" v-model="password.senha">
				            </div>
				    	</div>

				    	<div class="col-lg-4">
				    		<div class="form-group">
				                <label>Repetir senha</label>
				                <input type="password" class="form-control form-control-sm" :class="[(password.resenha) ? '' : incomplete], pwd_verify" v-model="password.resenha">
				            </div>
				    	</div>
				    </div>
				</div>

				<input type="hidden" v-model="user.status">

				<div class="modal-footer">
					<button class="btn btn-danger btn-sm"  v-if="action == 'view'" @click="deletar"   data-dismiss="modal">Deletar</button>
					<button class="btn btn-warning btn-sm" v-if="action == 'view'" @click="atualizar" data-dismiss="modal">Atualizar</button>
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

			user: {
				username: "",
				password: "",
				active: 0,
				online: 0
			},

			password: {
				senha: "",
				resenha: ""
			}
		}},

		created() {
			fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
			.then(r => r.json())
			.then(r => this.estados = r)
		},

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
				if ( !this.people.nome || !this.people.nascimento || !this.people.email || !this.people.type || !this.user.username || !this.password.senha || !this.password.resenha ) 
				{
					window.alert("Preencha os campos obrigatórios!")
					this.incomplete = "focus"
				}

				else 
				{
					//
					//	Verifica se as senhas são iguais
					//
					if ( this.password.senha == this.password.resenha ) 
					{
						this.user.password = this.password.senha

						const params = {
							people: this.people,
							user:   this.user
						}

						//	Efetua a requisição
						// const response = await this.POST("User", this.user)
						$("#modal-usuario").modal('hide')

						console.log(params)
					}

					else
					{
						window.alert("Senhas não são iguais!")
						this.pwd_verify = "focus"
					}
				}
			},

			atualizar() {
				console.log(this.user)
			},

			async deletar() {
				const response = this.DELETE('User', this.user.id)
				this.$router.replace({ name: 'Usuarios', params: {get: 'Usuarios'} })
			}
		}
	}
</script>

<style scoped>
</style>
