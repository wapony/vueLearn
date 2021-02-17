<template>
  <div id="app">
    <h2>我是APP组件</h2>
    <!-- <router-link to="/home" tag='button'>首页</router-link>
    <router-link to="/about" tag="button">关于</router-link> -->

    <router-link to='/home'>首页</router-link>
    <router-link to='/about'>关于</router-link>
    
    <!-- <router-link :to="'/user/'+ userId">用户</router-link> -->
    <!-- <router-link to='/profile'>档案</router-link> -->
    <!-- <router-link :to="{path: '/profile', query:{name: 'why', age: 18, height:1.88}}">档案</router-link> -->

    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>

    // keep-alive 组件不需要再重新创建新的组件了，
    // exclude 排除 某个组件， Profile= Profile 组件的name属性的值, 这个地方','之间不能加空格
    <keep-alive exclude="Profile,User">
      <router-view/>
    </keep-alive>
    
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
    },
    userClick() {
      this.$router.push('/user/' + this.userId)
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'kobe',
          age: 19,
          height: 1.88
        }
      })
    }
  }
}
</script>

<style>
  .active {
    color: red;
  }
</style>
