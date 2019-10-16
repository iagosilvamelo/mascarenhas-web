import axios from "axios"
import Store from "@/vuex/store.js"

const localInstance = axios.create({
	baseURL: "http://localhost:8011/api",
});

export default {
	data() {
		return {
			api_key: null,
			loading:  true,
			response: null,

			params: {
				headers: {
					'Auth': Store.state.api_key
				}
			}
		}
	},

	methods: {
		GET(table, foo = "") {
			this.loading  = true;
			this.response = null;

			localInstance.get(`${table}/${foo}`, this.params)
			.then(r => {
				this.response = r.data;
				this.loading  = false;
			});
		},

		async POST(table, data) {
			const response = await localInstance.post(table, data, this.params).then(r => r.data);
			return response.result
		},

		async DELETE(table, id) {
			const response = await localInstance.delete(`${table}/${id}`, this.params, {}).then(r => r.data);
			return response.result
		},

		async Auth(credentials) {
			const authenticate = await localInstance.post("Auth/Login", credentials).then( r => r.data )

			if ( authenticate.status == "success" ) this.$store.dispatch("login", authenticate );
			return authenticate
		},

		async Logoff() {
			const result = await localInstance.post("Auth/Logof", {api_token: Store.state.api_key}).then( r => r.data )
			const user = {id:null,nome:null,type:null,endereco:null,numero:null,complemento:null,bairro:null,uf:null,cep:null,email:null,fone:null,celular:null,nascimento:null,created_at:null,updated_at:null
		}
			if ( result.status == "success" ) this.$store.dispatch("logof", user );
			return result
		}
	}
}