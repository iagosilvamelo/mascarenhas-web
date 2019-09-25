import Site  from "@/views/site/index.vue";
import App   from "@/views/application/index.vue";
import Login from "@/views/application/Login.vue";
import Store from "@/vuex/store.js";

import app_routes  from './application.js'
import site_routes from './site.js'

export default [
	// Toda rota não registrada, redireciona para Index
	{
		path: "*",
		redirect: "/"
	},

	{
		path: "/",
		redirect: "/Home"
	},

	{
		path: "/Login",
		component: Login,
	},

	// Site
	{
		path: "/",
		component: Site,
		children: site_routes
	},

	// App
	{
		path: "/App",
		component: App,
		props: true,
		children: app_routes,
		beforeEnter: (to, from, next) => {
			if ( Store.state.auth === true ) next();
			else next("/Login")

		},
	},
]