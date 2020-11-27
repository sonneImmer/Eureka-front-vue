import Vue from 'vue'
import Router from 'vue-router'

// const ServiceMarket = () =>import('../components/ServiceMarket')
// const contractTable =() =>import('../components/elements/contractTable')
import ServiceMarket from '../components/ServiceMarket'
import contractTable from '../components/elements/contractTable'

// const admin =() =>import('../components/Admin/admin')
// const draft =() =>import('../components/Contract/draft')
import admin from '../components/Admin/admin'
import draft from '../components/Contract/draft'

// const details1 = () =>import('../components/Details/details1')
// const details2 = () =>import('../components/Details/details2')
// const details3 = () =>import('../components/Details/details3')
// const details4 = () =>import('../components/Details/details4')
// const detailsDraft = () =>import('../components/Details/detailsDraft')
// const allDetails = () =>import('../components/Details/all_details')
// const elementTest =() =>import('../components/elements/elementTest')
import details1 from '../components/Details/details1'
import details2 from '../components/Details/details2'
import details3 from '../components/Details/details3'
import details4 from '../components/Details/details4'
import detailsDraft from '../components/Details/detailsDraft'
import allDetails from '../components/Details/all_details'
import elementTest from '../components/elements/elementTest'

// const demo = ()=>import('../components/Details/demo')
// const submitStatus = ()=>import('../components/Contract/Status/status')
// const HelloWorld =()=>import('../components/HelloWorld')
// const servicesquire =()=>import('../components/Details/servicesquire')
import demo from '../components/Details/demo'
import submitStatus from '../components/Contract/Status/status'
import serviceAdmin from "../components/Admin/serviceAdmin";
// import HelloWorld from '../components/HelloWorld'
import servicesquire from "../components/Details/servicesquire";
import biaoji from "../components/Test/biaoji"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'serviceMarket',
      component: ServiceMarket,
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

      path: '/serviceAdmin',
      name: 'serviceAdmin',
      component: serviceAdmin

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
      path: '/details3',
      name: 'details3',
      component: details3,
      props: true,
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
      path: '/detailsDraft',
      name: 'detailsDraft',
      component: detailsDraft,
      meta: {
        title: 'detailsDraft'
      }
    },
    {
      path: '/draft',
      name: 'draft',
      component: draft,
      meta: {
        title: 'draft'
      }
    },
    {
      path: '/submitStatus',
      name: 'submitStatus',
      component: submitStatus,
      meta: {
        title: 'submitStatus'
      }
    },
    {
      path: '/elementTest',
      name: 'elementTest',
      component: elementTest
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path:'/services',
      component: servicesquire
    },
    {
      path:'/biaoji',
      component: biaoji
    }
  ],
  mode:'history'
})
// const router=new VueRouter({
//   routes,
//   //把这个网页加载从hash变成history模式
//   mode:'history',
//   linkActiveClass:'active'
// })
// //3.将Router对象传到实例中
// export default router
