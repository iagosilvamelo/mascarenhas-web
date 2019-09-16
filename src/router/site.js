import Eventos from "@/views/site/Eventos.vue";
import Home    from "@/views/site/home.vue";
import App     from "@/views/application/index.vue";

import app_routes  from './application.js'

export default [
	{
		path: "Home",
		component: Home,
	},

	{
		path: "Eventos",
		component: Eventos,
	},

	// App
	{
		path: "/App",
		component: App,
		props: true,
		children: app_routes,
		beforeEnter: (to, from, next) => {
			next();
		},
	},
]