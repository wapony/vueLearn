<template>
  <div id="app">
    <h2>我是APP组件</h2>
    <!-- <router-link to="/home" tag='button'>首页</router-link>
    <router-link to="/about" tag="button">关于</router-link> -->

    <router-link to='/home'>首页</router-link>
    <router-link to='/about'>关于</router-link>
    <router-link :to="'/user/'+ userId">用户</router-link>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'lisi'
    }
  },
  methods: {

    // 通过代码 进行路由的跳转，替代router-link的功能
    homeClick() {
      this.$router.push('/home')
    },
    aboutClick() {
      this.$router.push('/about')
    }
  }
}
</script>

<style>
  .active {
    color: red;
  }
</style>
