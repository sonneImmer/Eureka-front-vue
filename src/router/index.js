import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import indexs from '@/components/indexs'
import HelloVue from '../components/HelloVue'
import contractTable from '../components/contractTable'
import test00 from '../components/test00'

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
      path: '/HelloVue',
      name: 'HelloVue',
      component: HelloVue
    },
    {
      path: '/contractTable',
      name: 'contractTable',
      component: contractTable
    },
    {
      path: '/test00',
      name: 'test00',
      component: test00
    }
  ]
})
