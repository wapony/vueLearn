import Vue from 'vue'
import Router from 'vue-router'

//解决vue-router重复点击报错问题（this.$router.replace()）
const originalReplace = Router.prototype.replace;
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};
//解决vue-router重复点击报错问题（this.$router.push()）
const originalPush = Router.prototype.push;
Router.prototype.push= function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

Vue.use(Router)

// 创建路由
const routes = [
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
    component: Profile
  }
]

export default new Router({
  routes,
  mode: 'history'
})
