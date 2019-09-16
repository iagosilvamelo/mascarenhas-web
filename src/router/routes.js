import Index   from "@/views/site/index.vue";
import App     from "@/views/application/index.vue";

import app_routes  from './application.js'
import site_routes from './site.js'

export default [
	// Toda rota não registrada, redireciona para Index
	{
		path: "*",
		redirect: "/"
	},

	// Dashboard
	{
		path: "/",
		component: Index,
		children: site_routes
	},

	// App
	{
		path: "/App",
		component: App,
		props: true,
		children: app_routes,
		beforeEnter: (to, from, next) => {
			
		},
	},
]