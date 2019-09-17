import Vue    from "vue";
import Vuex   from "vuex";
import router from '@/router/index.js'

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
			id: 1,
			name: "Iago Melo",
			fold: 3,
			email: "iago.melo@dad.eng.br",
			img: "https://iagosilvamelo.github.io/iagosilvamelo/img/profile.jpg"
		},

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
			
			if ( payload.email === 'masca@renhas.com' && payload.senha === '12345678') {
				context.commit("CHANGE_AUTH", true);
				router.push('/App');
			}
		},

		logof(context, payload) {
			context.commit("CHANGE_AUTH", false);
			router.push('/Home');
		}
	}
});