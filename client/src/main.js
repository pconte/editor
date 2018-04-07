// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueTreeNavigation from 'vue-tree-navigation'
import VueReact from 'vue-react'
import ReactJsonschemaForm from 'react-jsonschema-form'

Vue.use(VueTreeNavigation)
Vue.use(VueReact)

Vue.react('ReactJsonschemaForm', ReactJsonschemaForm)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
