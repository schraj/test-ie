// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'core-js/stable'
// import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify/lib'
//import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
const opts = {}
const vuetify = new Vuetify(opts)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify,
  components: { App },
  template: '<App/>'
})
