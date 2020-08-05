import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import indexs from '@/components/indexs'
import apiTest from '../components/apiTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/indexs',
      name: 'indexs',
      component: indexs
    },
    {
      path: '/apiTest',
      name: 'apiTest',
      component: apiTest
    }
  ]
})
