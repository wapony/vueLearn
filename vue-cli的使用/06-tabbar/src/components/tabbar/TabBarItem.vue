<template>
  <div class="tab-bar-item"  @click="itemClick">
    <!-- <img src="../../assets/img/tabbar/home.svg" alt="">
    <div>首页</div> -->

    <div v-if="!isActive"><slot name='item-icon'></slot></div>
    <div v-else> <slot name='item-icon-active'></slot></div>

    <!-- 因为css无法使用js的变量所有class已经没有效果,无用了 -->
    <!-- <div :class="{active: isActive}"><slot name='item-text'></slot></div> -->

    <div :style="activeStyle"><slot name="item-text"></slot></div>
    
  </div>
  <!-- <div class="tab-bar-item">
    <img src="../../assets/img/tabbar/home.svg" alt="" />
    首页
  </div>
  <div class="tab-bar-item">
    <img src="../../assets/img/tabbar/home.svg" alt="" />
    分类
  </div>
  <div class="tab-bar-item">
    <img src="../../assets/img/tabbar/home.svg" alt="" />
    购物车
  </div>
  <div class="tab-bar-item">
    <img src="../../assets/img/tabbar/home.svg" alt="" />
    我的
  </div> -->
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      // isActive: false
    }
  },
  computed: {
    isActive() {
      // 当前的路由的path 是否包含 当前的path属性,
      // 当处于home路由的情况下
      // /home -> item1(/home) = true
      // /home -> item1(/category) = fasle
      // /home -> item1(/cart) = fasle
      // /home -> item1(/profile) = fasle
      return this.$route.path.indexOf(this.path) !== -1
    },

    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  }
};
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    margin-bottom: 2px;
    vertical-align: middle;
  }

  /* 这样写不能动态修改颜色, css无法使用js的变量 */
  .active {
    color: red;
  }
</style>
