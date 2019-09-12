import Vue    from "vue";
import Router from "vue-router";

//	
//	Import Views
//
import Login        from "./views/Dashboard.vue";
import Dashboard    from "./views/Dashboard.vue";
import Bilhetagem   from "./views/Bilhetagem.vue";
import MonitorRamal from "./views/MonitorRamal.vue";
import Emails       from "./views/Emails.vue";
import Auditoria    from "./views/Auditoria.vue";
import TesteAPI     from "./views/TesteAPI.vue";

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
			component: Dashboard,
			props: true,

			// Subrotas em Dashboard
			children: [
				{
					name: "dsbUnidade",
					path: ":unidade",
					component: Unidade,
					props: true,

					// Subrotas para cada unidade
					children: [
						{
							name: "dsbGraficos",
							path: "Graficos",
							component: Graficos,
							props: true,
						},

						{
							name: "dsbRamais",
							path: "Ramais",
							component: Ramais,
							props: true,
						}
					]
				}
			]
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
