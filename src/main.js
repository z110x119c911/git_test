import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import bootstrap from 'bootstrap'
import jQuery from 'jquery'
Vue.config.productionTip = false
window.$ = window.jQuery = jQuery
Vue.use(VueAxios, axios)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')