<template>
  <div id="app">
    <router-view/>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from './components/MainTabBar'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
/* 引用css等配置文件, 在style里引用的要 用@import */
@import './assets/css/base.css';

</style>
