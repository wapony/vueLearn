<template>
  <div>
    <h2>我是用户标签</h2>
    <p>我是用户内容，嘿嘿嘿</p>

    <!-- 1、用计算属性可以 -->
    <!-- <h2>{{userId}}</h2> -->
    
    <!-- 2、或者直接使用 -->
    <h2>{{$route.params.userId}}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      return this.$route.params.userId
    }
  },

  created() {
    console.log('user created ++++');
  }
};
</script>

<style scoped>
</style>