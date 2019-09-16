import Index   from "@/views/site/index.vue";
import App     from "@/views/application/index.vue";

import app_routes  from './application.js'
import site_routes from './site.js'

import Eventos from "@/views/site/Eventos.vue";
import Home   from "@/views/site/home.vue";

export default [
	// Toda rota não registrada, redireciona para Index
	{
		path: "*",
		redirect: "/"
	},

	// Site
	{
		path: "/",
		component: Index,
		children: site_routes
	},

	// App
	{
		path: "/App",
		component: Index,
		props: true,
		children: app_routes,
		beforeEnter: (to, from, next) => {
			
		},
	},
]