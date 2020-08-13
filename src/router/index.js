import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import HelloVue from '../components/HelloVue'
import contractTable from '../components/elements/contractTable'

import admin from '../components/Admin/admin'
import draft from '../components/Contract/draft'

import details1 from '../components/Details/details1'
import details2 from '../components/Details/details2'
import details3 from '../components/Details/details3'
import details4 from '../components/Details/details4'
import allDetails from '../components/Details/all_details'

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
      component: admin,
      meta: {
        title: 'admin'
      }
    },
    {
      path: '/details3',
      name: 'details3',
      component: details3,
      props: true,
      meta: {
        title: 'Details'
      }
    },
    {
      path: '/details1',
      name: 'details1',
      component: details1,
      meta: {
        title: 'Details'
      }
    },
    {
      path: '/details2',
      name: 'details2',
      component: details2,
      meta: {
        title: 'Details'
      }
    },
    {
      path: '/details4',
      name: 'details4',
      component: details4,
      meta: {
        title: 'Details'
      }
    },
    {
      path: '/details',
      name: 'details',
      component: allDetails,
      meta: {
        title: 'Details'
      }
    },
    {
      path: '/draft',
      name: 'draft',
      component: draft,
      meta: {
        title: 'draft'
      }
    }
  ]
})
