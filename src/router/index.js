import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import PagesDetails from '../views/Detail.vue'
import CulturalAndCreativePage from '../views/CulturalAndCreativePage.vue'
import ShoppingPage from '../views/ShoppingPage.vue' 
import GoodsDetails from '../components/GoodsDetails.vue'
import Passage from '../components/Passage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,

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
    path: '/goodsdetails/:id',
    name: 'GoodsDetails',
    component: GoodsDetails,
  },
  {
    path: '/passage/childPic',
    name: '/passage/childPic',
    component: Passage,
  },
  {
    path: '/passage/wovenClothes',
    name: '/passage/wovenClothes',
    component: Passage,
  },
  {
    path: '/passage/sittingTogetherAndSinging',
    name: '/passage/sittingTogetherAndSinging',
    component: Passage,
  },
  {
    path: '/passage/drinkWine',
    name: '/passage/drinkWine',
    component: Passage,
  },
  {
    path: '/passage/underUmbrellaPic',
    name: '/passage/underUmbrellaPic',
    component: Passage,
  },
  {
    path: '/passage/funeral',
    name: '/passage/funeral',
    component: Passage,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
