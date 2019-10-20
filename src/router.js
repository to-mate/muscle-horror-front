import Vue from 'vue'
import Router from 'vue-router'
import store from 'store'

Vue.use(Router)

function loadView (view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/result/:id',
      name: 'result',
      component: loadView('Result'),
      props: route => ({id: Number(route.params.id)})
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: loadView('Ranking')
    },
    {
      path: '/graph',
      name: 'graph',
      component: loadView('Graph')
    }
  ]
})
