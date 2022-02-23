import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.filter('firstToUpper', function(str) {
	return str.charAt(0).toUpperCase() + str.slice(1)
})

Vue.filter('valueInReal', function(value) {
	return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
})

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
