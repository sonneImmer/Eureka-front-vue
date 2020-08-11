import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import HelloVue from '../components/HelloVue'
import contractTable from '../components/elements/contractTable'
import admin from '../components/Admin/admin'
import details from '../components/Details/details'
import details1 from '../components/Details/details1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/draft/:number',
      name: 'draft',
      component: details,
      props: true
    },
    {
      path: '/details1',
      name: 'details1',
      component: details1
    }
  ]
})
