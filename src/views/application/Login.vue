<template>
	<div class="container-fluid">
		<div class="row no-gutter">
			<div class="d-none d-md-flex col-md-4 col-lg-8 bg-image" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/img/login.jpg') + ')' }"></div>

			<div class="col-md-8 col-lg-4">
				<div class="login d-flex align-items-center py-5">
					<div class="container">
						<div class="row">
							<div class="col-md-9 col-lg-8 mx-auto">

								<h3 class="login-heading mb-4">Bem vindo!</h3>

                <div class="alert alert-danger" :class="alert" role="alert">{{ erro }}</div>

									<div class="form-label-group">
										<input type="text" id="inputUser" v-model="params.username" class="form-control" placeholder="Usuário" required autofocus>
										<label for="inputUser">Usuário</label>
									</div>

									<div class="form-label-group">
										<input type="password" id="inputPassword" v-model="params.password" class="form-control" placeholder="Password" required>
										<label for="inputPassword">Password</label>
									</div>

									<button class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit" @click="login">Entrar</button>

									<div class="d-flex justify-content-between">
										<a class="small" href="#">Cadastrar</a>
										<a class="small" href="#">Esqueceu sua senha?</a>
									</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  import api from '@/mixins/api.js'

	export default {
		data() {
			return {
        alert: "hidden",
        erro: "",

				params: {
					username: "",
					password: ""
				}
			}
		},

    mixins: [api],

		methods: {
			async login() { 
        const result = await this.Auth(this.params)

        if ( result.status == "error" ) {
          this.erro  = result.result
          this.alert = "show"

          setTimeout(() => {
            this.alert = "hidden"
            this.erro  = ""
          }, 5000);
        }
      }
		}
	}
</script>

<style>
:root {
  --input-padding-x: 1.5rem;
  --input-padding-y: 0.75rem;
}

.login,
.image {
  min-height: 100vh;
}

.bg-image {
  background-size: cover;
  background-position: center;
}

.login-heading {
  font-weight: 300;
}

.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
  border-radius: 2rem;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group>input,
.form-label-group>label {
  padding: var(--input-padding-y) var(--input-padding-x);
  height: auto;
  border-radius: 2rem;
}

.form-label-group>label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0;
  /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  cursor: text;
  /* Match the input under the label */
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: all .1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
  padding-bottom: calc(var(--input-padding-y) / 3);
}

.form-label-group input:not(:placeholder-shown)~label {
  padding-top: calc(var(--input-padding-y) / 3);
  padding-bottom: calc(var(--input-padding-y) / 3);
  font-size: 12px;
  color: #777;
}

/* Fallback for Edge
-------------------------------------------------- */

@supports (-ms-ime-align: auto) {
  .form-label-group>label {
    display: none;
  }
  .form-label-group input::-ms-input-placeholder {
    color: #777;
  }
}

/* Fallback for IE
-------------------------------------------------- */

@media all and (-ms-high-contrast: none),
(-ms-high-contrast: active) {
  .form-label-group>label {
    display: none;
  }
  .form-label-group input:-ms-input-placeholder {
    color: #777;
  }
}
</style>