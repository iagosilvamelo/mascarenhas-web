import Vue    from 'vue'
import App    from './App.vue'
import router from './router/index.js'
import store  from './vuex/store.js'
import LoadScript from 'vue-plugin-load-script';


import faIcon  from './assets/font-awesome.js'
import Loading from './components/loading.vue'

//	COMPONENTES GLOBAIS
Vue.component('Loading', Loading)

Vue.use(LoadScript)
Vue.use(require('vue-moment'))

Vue.config.productionTip = false

Vue.loadScript("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js")

new Vue({
	router, store, render: h => h(App),
}).$mount('#Application')
