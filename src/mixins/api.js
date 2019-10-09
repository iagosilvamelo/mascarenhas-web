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
					'Access-Control-Allow-Origin':'*',
					"Access-Control-Allow-Headers": "Authorization", 
					'Content-Type': 'application/json',
					'Auth': Store.state.api_key
				}
			}
		}
	},

	methods: {
		GET(table, method) {
			this.loading  = true;
			this.response = null;

			localInstance.get(`${table}/${method}`, this.params)
			.then(r => {
				this.response = r.data;
				this.loading  = false;
			});
		},

		async Auth(credentials) {
			this.loading  = true;
			this.response = null;

			const authenticate = await localInstance.post("Auth/Login", credentials).then( r => r.data )

			if ( authenticate.status == "success" ) this.$store.dispatch("login", authenticate );

			this.response = authenticate;
			this.loading  = false;

			return authenticate
		}
	}
}