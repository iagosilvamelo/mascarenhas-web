import axios from "axios";

const localInstance = axios.create({
	baseURL: "http://localhost:8011/api",

	header: {
		'Access-Control-Allow-Origin':'*',
		"Access-Control-Allow-Headers": "Authorization", 
		'Content-Type': 'application/json'
	}
});

export default {
	data() {
		return {
			loading:  true,
			response: null
		}
	},

	methods: {
		GET(table, method) {
			this.loading  = true;
			this.response = null;

			localInstance.get(`${table}/${method}`)
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