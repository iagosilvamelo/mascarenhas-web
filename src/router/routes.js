import Eventos from "@/views/Eventos.vue";
import App     from "@/views/application/index.vue";

import application from './application.js'

export default [
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
		children: application
	},
]