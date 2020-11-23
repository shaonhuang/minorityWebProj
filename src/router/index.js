import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import PagesDetails from '../views/Detail.vue'
import CulturalAndCreativePage from '../views/CulturalAndCreativePage.vue'
import ShoppingPage from '../views/ShoppingPage.vue' 
import GoodsDetails from '../components/GoodsDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path:'/detail',
    name:'Detail',
    component:PagesDetails
  },
  {
    path:'/culturalandcreative',
    name:'CulturalAndCreativePage',
    component:CulturalAndCreativePage
  },
  {
    path:'/shoppingpage',
    name:'ShoppingPage',
    component:ShoppingPage
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/goodsdetails',
    name: 'GoodsDetails',
    component: GoodsDetails,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
