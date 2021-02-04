import VueRouter from 'vue-router'
import Vue  from 'vue'

// 路由懒加载
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')

// 1、通过vue.use(插件)，安装插件 
Vue.use(VueRouter)

// 2、创建VueRouter对象
const routes = [
    {
        // 默认显示home页
        path: '',
        // redirect 重定向
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        // /:userId 路径拼接的变量
        path: '/user/:userId',
        component: User
    }
]

const router = new VueRouter({
    // 配置路由和组件之间的应用关系
    routes,
    // 由默认的location.hash模式改为html5的history 模式， 这样url 后面就不会出现#了
    mode: 'history',

    linkActiveClass: 'active'
});

// 3、 导出router对象导出
export default router