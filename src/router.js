import routers from './routers'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const route = new Router({
  mode: 'history',
  base: 'pratwo',
  routes: [
    ...routers,
    {
      path: '/hello',
      component: () => import('./views/hello/index')
    }
  ]
})
console.log(route)

export default route