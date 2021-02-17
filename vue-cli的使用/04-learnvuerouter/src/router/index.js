import VueRouter from 'vue-router'
import Vue  from 'vue'

// 路由懒加载
const Home = () => import('../components/Home')
const News = () => import('../components/HomeNews')
const Message = () => import('../components/HomeMessage')
const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

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
        component: Home,
        children: [
            // {
            //     path: '',
            //     redirect: 'news'
            // },
            {
                path:'news',
                component: News
            },
            {
                path: 'message',
                component: Message
            }
        ],
        meta: {
            title: '首页'
        }
    },
    {
        path: '/about',
        component: About,
        meta: {
            title: '关于'
        },

        // 路由独享的守卫， 路由守卫
        beforeEnter: (to, from, next) => {
            // console.log('about beforEnter');
            next()
        }
    },
    {
        // /:userId 路径拼接的变量
        path: '/user/:userId',
        component: User,
        meta: {
            title: '用户'
        }
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            title: '档案'
        }
    }
]

const router = new VueRouter({
    // 配置路由和组件之间的应用关系
    routes,
    // 由默认的location.hash模式改为html5的history 模式， 这样url 后面就不会出现#了
    mode: 'history',
    linkActiveClass: 'active'
});

// 全局导航守卫, 前置钩子（hook）, 必须手动调用next()函数
router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta.title

    // console.log(to);
    next()
})

// 后置钩子(hook)
router.afterEach((to, from) => {
    console.log('--------');
}) 

// 3、 导出router对象导出
export default router
