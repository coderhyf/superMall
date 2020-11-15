import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('../views/home/Home');
const Category = () => import('../views/category/Category');
const Cart = () => import('../views/cart/Cart');
const ProFile = () => import('../views/profile/Profile');
const NotFind = () => import('../views/notFind/NotFind');
Vue.use (VueRouter)

const routes = [
  {
    path: '*',
    component: NotFind
  },
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: ProFile
  },
]

const router = new VueRouter ({
  model: 'history',
  routes
})

export default router
