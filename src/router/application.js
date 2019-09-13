import Dashboard from "@/views/application/Dashboard.vue";
import Agenda    from "@/views/application/Agenda.vue";
import Eventos   from "@/views/application/Eventos.vue";
import Usuarios  from "@/views/application/Usuarios.vue";

import getUsuarios from "@/components/application/Usuarios/getUsuarios.vue";

export default [
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