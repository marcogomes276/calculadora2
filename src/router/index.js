import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Calc2 from '@/components/Calc2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/calc2',
      name: 'Calc2',
      component: Calc2
    }
  ]
})
