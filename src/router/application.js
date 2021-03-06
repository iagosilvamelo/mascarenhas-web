import Dashboard from "@/views/application/Dashboard.vue";
import Agenda    from "@/views/application/Agenda.vue";
import Eventos   from "@/views/application/Eventos.vue";
import Evento    from "@/views/application/Evento.vue";
import Usuarios  from "@/views/application/Usuarios.vue";

import getTodos           from "@/components/application/Pages/Usuarios/Todos.vue";
import getRoot            from "@/components/application/Pages/Usuarios/Root.vue";
import getUsuarios        from "@/components/application/Pages/Usuarios/Usuarios.vue";
import getAdministradores from "@/components/application/Pages/Usuarios/Administradores.vue";

import nextEvent from "@/components/application/Pages/Eventos/Proximos.vue";
import oldEvent  from "@/components/application/Pages/Eventos/Passados.vue";

export default [
	{
		path: "/",
		component: Agenda,
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
		props: true,

		children: [
			{
				name: "nextEvent",
				path: ":get",
				component: nextEvent,
				props: true
			},

			{
				name: "oldEvent",
				path: ":get",
				component: oldEvent,
				props: true
			}
		]
	},

	{
		name: "Evento",
		path: "Evento/:get",
		component: Evento,
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
				name: "getRoot",
				path: ":get",
				component: getRoot,
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