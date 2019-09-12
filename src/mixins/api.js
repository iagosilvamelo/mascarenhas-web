import axios from "axios";

const localInstance = axios.create({
	baseURL: "http://172.21.255.206:8011/v1"
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

			const params = {
				header: {
					'Access-Control-Allow-Origin':'*',
					"Access-Control-Allow-Headers": "Authorization", 
					'Content-Type': 'multipart/form-data'
				}
			}

			localInstance.get(`${table}/${method}`, params)
			// axios.get("http://viacep.com.br/ws/94960200/json")
			.then(r => {
				this.response = r.data;
				this.loading  = false;
			});
		}
	}
}