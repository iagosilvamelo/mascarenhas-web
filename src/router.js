import Vue    from "vue";
import Router from "vue-router";

//	
//	Import Views
//
import Dashboard from "./views/application/Dashboard.vue";
import Agenda    from "./views/application/Agenda.vue";
import Eventos   from "./views/application/Eventos.vue";
import Usuarios  from "./views/application/Usuarios.vue";

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
			redirect: "/Dashboard"
		},

		// Dashboard
		{
			path: "/Dashboard",
			component: Dashboard
		},

		// Agenda
		{
			path: "/Agenda",
			component: Agenda
		},

		// Eventos
		{
			path: "/Eventos",
			component: Eventos
		},

		// Usuarios
		{
			path: "/Usuarios",
			component: Usuarios,
			props: true,

			// Subrotas em API
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
		}
	]
})
