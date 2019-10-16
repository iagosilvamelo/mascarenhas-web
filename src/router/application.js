import Dashboard from "@/views/application/Dashboard.vue";
import Agenda    from "@/views/application/Agenda.vue";
import Eventos   from "@/views/application/Eventos.vue";
import Usuarios  from "@/views/application/Usuarios.vue";

import getTodos           from "@/components/application/Pages/Usuarios/Todos.vue";
import getUsuarios        from "@/components/application/Pages/Usuarios/Usuarios.vue";
import getAdministradores from "@/components/application/Pages/Usuarios/Administradores.vue";

export default [
	{
		path: "/",
		component: Dashboard,
	},

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
				component: getTodos,
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
				component: getAdministradores,
				props: true
			}
		]
	},
]