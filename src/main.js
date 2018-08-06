// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import { routes } from "./routes";

Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition
    }
    if(to.hash) {
      return { selector: to.hash }
    }
    return {x:0, y:0}
  }
})

Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
