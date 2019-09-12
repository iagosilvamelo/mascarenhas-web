import Vue          from 'vue'
import App          from './App.vue'
import router       from './router.js'
import LoadScript   from 'vue-plugin-load-script';
import store		from './vuex/store.js';

import faIcon  from './assets/font-awesome.js'
import Loading from './components/loading.vue';

//	COMPONENTES GLOBAIS
Vue.component('Loading', Loading);

Vue.config.productionTip = false;

Vue.use(LoadScript);
// Vue.loadScript("./assets/js/jQuery-3-4-1.min.js");
// Vue.loadScript("./assets/js/sb-admin-2.min.js");

new Vue({
	router, store, render: h => h(App),
}).$mount('#LiGa')
