
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import App from './App.vue'

Vue.use(Vuetify, {
  iconfont: 'md'
})
Vue.use(Vuex);
Vue.use(VueRouter)

Vue.config.productionTip = false

// const Contacts = { template: '<div>foo</div>' }
// const Settings = { template: '<div>bar</div>' }

// const routes = [
//   { path: '/Contacts', component: Contacts },
//   { path: '/Settings', component: Settings }
// ]
// const router = new VueRouter({
//   routes: routes
// })

new Vue({
  render: h => h(App),
  
}).$mount('#app')
