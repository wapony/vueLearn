<template>
  <div class="tab-bar-item">
    <!-- <img src="../../assets/img/tabbar/home.svg" alt="">
    <div>首页</div> -->
    <slot name='item-icon'></slot>

    
    <slot name='item-text'></slot>
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
</style>
