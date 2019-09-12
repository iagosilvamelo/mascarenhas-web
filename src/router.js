import Vue    from "vue";
import Router from "vue-router";

//	
//	Import Views
//
import Login        from "./views/application/Dashboard.vue";
import Dashboard    from "./views/application/Dashboard.vue";
import Bilhetagem   from "./views/application/Bilhetagem.vue";
import MonitorRamal from "./views/application/MonitorRamal.vue";
import Emails       from "./views/application/Emails.vue";
import Auditoria    from "./views/application/Auditoria.vue";
import TesteAPI     from "./views/application/TesteAPI.vue";

//
//	Import Components
//

// Dashboard
import Unidade  from "./components/Dashboard/Unidade.vue";
import Ramais   from "./components/Dashboard/Ramais.vue";
import Graficos from "./components/Dashboard/Graficos.vue";

// API
import getRamais from "./components/API/getRamais.vue";

Vue.use(Router);

//
//	Router
//
export default new Router({
	mode: "history", // Trabalha sem inserir o '#' na URL
	base: "/", // Seta a URL base para rodar o aplicativo

	// Seta as rotas e subrotas
	routes: [
		// Toda rota não registrada, redireciona para Dashboard
		{
			path: "*",
			redirect: "/Dashboard"
		},

		// Login
		{
			path: "/Login",
			component: Auditoria
		},

		// Dashboard
		{
			path: "/Dashboard",
			component: Dashboard
		},

		// Agenda
		{
			path: "/Agenda",
			component: Bilhetagem
		},

		// Eventos
		{
			path: "/Eventos",
			component: Emails
		},

		// Usuarios
		{
			path: "/Usuarios",
			component: TesteAPI,
			props: true,

			// Subrotas em API
			children: [
				{
					name: "getRamais",
					path: ":get",
					component: getRamais,
					props: true
				}
			]
		}
	]
})
