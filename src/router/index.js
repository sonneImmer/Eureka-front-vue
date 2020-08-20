import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import HelloVue from '../components/HelloVue'
import contractTable from '../components/elements/contractTable'
import admin from '../components/Admin/admin'
import details1 from '../components/Details/details1'
import details3 from '../components/Details/details3'
import demo from '../components/Details/demo'
import test from '../components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'HelloVue',
      component: HelloVue
    },
    {
      path: '/contractTable',
      name: 'contractTable',
      component: contractTable
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/details/3',
      name: 'details3',
      component: details3,
      props: true
    },
    {
      path: '/details1',
      name: 'details1',
      component: details1
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
