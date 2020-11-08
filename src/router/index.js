/*
  路由模块
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

// import Msite from '../pages/Msite/Msite'
// import Order from '../pages/Order/Order'
// import Profile from '../pages/Profile/Profile'
// import Search from '../pages/Search/Search'
//路由组件懒加载，可以进行路由拆分，打成多个包
const Msite = () => import('../pages/Msite/Msite')
const Order = () => import('../pages/Order/Order')
const Profile = () => import('../pages/Profile/Profile')
const Search = () => import('../pages/Search/Search')


import Login from "../pages/Login/Login";
import Shop from "../pages/Shop/Shop";
import ShopFood from "../pages/Shop/ShopFood/ShopFood";
import ShopRating from "../pages/Shop/ShopRating/ShopRating";
import ShopInfo from "../pages/Shop/ShopInfo/ShopInfo";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/msite',
      meta: {
        showFooter: true
      }
    },
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        showFooter: false
      }
    },
    {
      path: '/shop',
      component: Shop,
      children:[
        {
          path: '/shop/food',
          component: ShopFood
        },
        {
          path: '/shop/rating',
          component: ShopRating
        },
        {
          path: '/shop/info',
          component: ShopInfo
        },
        {
          path: '',
          redirect: '/shop/food'
        }
      ],
      meta: {
        showFooter: false
      }
    }
    ]
})
