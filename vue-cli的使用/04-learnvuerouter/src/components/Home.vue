<template>
    <div>
        <h2>我是首页标题</h2>
        <p>我是首页内容，哈哈哈</p>

        <router-link to='/home/news'>新闻</router-link>
        <router-link to='/home/message'>消息</router-link>

        <router-view/>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            path: '/home/news'
        }
    },
    created() {
        console.log('home created');
    },

    activated() {
        this.$router.push(this.path)
    },

    // 组件内路由守卫, 记录即将离开时的path, 下次再进入的时候 activated 可以直接进入路由可以直接进入该path
    beforeRouteLeave(to, from, next) {
        this.path = this.$route.path
        next()
    }
}
</script>

<style scoped>

</style>
