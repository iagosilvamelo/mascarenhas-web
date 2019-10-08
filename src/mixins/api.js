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

		Auth(credentials) {
			this.loading  = true;
			this.response = null;

			const params = {
				"username" : credentials.username,
				"password" : credentials.password
			}

			localInstance.post("Auth/Login", params)
			.then(r => {
				this.response = r.data;
				this.loading  = false;

				this.$store.dispatch("login", r.data)
			});
		}
	}
}