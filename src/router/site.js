import Eventos from "@/views/site/Eventos.vue";
import Home   from "@/views/site/home.vue";

export default [
	{
		path: "/",
		redirect: "/Home",
	},

	{
		path: "Home",
		component: Home,
	},

	{
		path: "Eventos",
		component: Eventos,
	},
]