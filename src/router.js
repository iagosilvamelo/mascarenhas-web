import Vue    from "vue";
import Router from "vue-router";

//	
//	Import Views
//
import Dashboard from "./views/application/Dashboard.vue";
import Agenda    from "./views/application/Agenda.vue";
import Eventos   from "./views/Eventos.vue";
import Usuarios  from "./views/application/Usuarios.vue";

import App  from "./views/application/index.vue";

//
//	Import Components
//

// API
import getUsuarios from "./components/application/Usuarios/getUsuarios.vue";

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
			redirect: "/"
		},

		// Dashboard
		{
			path: "/",
			component: Eventos
		},

		// App
		{
			path: "/App",
			component: App,
			props: true,

			// Subrotas em API
			children: [
				{
					name: "Dashboard",
					path: "Dashboard",
					component: Dashboard,
				},

				{
					name: "Agenda",
					path: "Agenda",
					component: Agenda,
				},

				{
					name: "Eventos",
					path: "Eventos",
					component: Eventos,
				},

				{
					name: "Usuarios",
					path: "Usuarios",
					component: Usuarios,
					props: true,

					children: [
						{
							name: "getAll",
							path: ":get",
							component: getUsuarios,
							props: true
						},

						{
							name: "getUsers",
							path: ":get",
							component: getUsuarios,
							props: true
						},

						{
							name: "getAdmins",
							path: ":get",
							component: getUsuarios,
							props: true
						}
					]
				},
			]
		},
	]
})
