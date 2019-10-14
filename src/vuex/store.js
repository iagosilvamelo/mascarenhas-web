import Vue    from "vue";
import Vuex   from "vuex";
import router from '@/router/index.js'
// import Api    from '@mixins/api.js'

Vue.use(Vuex);

export default new Vuex.Store({
	/**
	*	STATE
	*
	*	Responsável por armazenar os dados globais do sistema.
	*	Estes dados podem ser acessados e alterados de qualquer
	*	view ou componente de forma independente.
	*/
	state: {
		user: {
			id: null,
			nome: null,
			type: null,
			endereco: null,
			numero: null,
			complemento: null,
			bairro: null,
			uf: null,
			cep: null,
			email: null,
			fone: null,
			celular: null,
			nascimento: null,
			created_at: null,
			updated_at: null
		},

		api_key: null,
		auth: false
	},

	/**
	*	MUTATIONS
	*	
	*	Responsável por efetuar as alterações no state.
	*	Todo tipo de alteração ao state deve ser feito apenas via mutation.
	*/
	mutations: {
		CHANGE_USER(state, payload) {
			state.user = payload;
		},

		CHANGE_VIEW(state, payload) {
			state.view = payload;
		},

		CHANGE_AUTH(state, payload) {
			state.auth = payload;
		},

		CHANGE_API_KEY(state, payload) {
			state.api_key = payload;
		}
	},

	/**
	*	ACTION
	*	
	*	Responsável criar lógicas maiores e executar mutations.
	*	Todo tipo de alteração ao state deve ser feito apenas via mutation.
	*/
	actions: {
		login(context, payload) {
			context.commit("CHANGE_API_KEY", payload.api_key);
			context.commit("CHANGE_USER", payload.user);
			context.commit("CHANGE_AUTH", true);
			router.push('/App');
		},

		logof(context, payload) {
			context.commit("CHANGE_API_KEY", null);
			context.commit("CHANGE_USER", payload);
			context.commit("CHANGE_AUTH", false);
			router.push('/Home');
		}
	}
});