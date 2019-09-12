import Vue    from 'vue'
import App    from './App.vue'
import router from './router.js'
import store  from './vuex/store.js'

import faIcon  from './assets/font-awesome.js'
import Loading from './components/loading.vue'

//	COMPONENTES GLOBAIS
Vue.component('Loading', Loading)

Vue.config.productionTip = false

new Vue({
	router, store, render: h => h(App),
}).$mount('#LiGa')
