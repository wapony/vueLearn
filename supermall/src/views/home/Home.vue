<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
    <feature-view />
    <tab-control class="tab-control" :titles="['流行', '新款', '精选']"/>
    <goods-list :goods="goods['pop'].list" />



    <ul>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
      <li>商品列表</li>
    </ul>
  </div>
</template>

<script>
import HomeSwiper from "./childComponents/HomeSwiper";
import RecommendView from "./childComponents/RecommendView";
import FeatureView from "./childComponents/FeatureView";

import NavBar from "@components/common/navBar/NavBar";
import TabControl from "@components/content/tabControl/TabControl";
import GoodsList  from '@components/content/goods/GoodsList';


import { getHomeMultidata, getHomeGoods } from "@network/home";

export default {
  name: "home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { list: [], page: 0 },
        new: { list: [], page: 0 },
        sell: { list: [], page: 0 },
      },
    };
  },
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();

    // 2.请求商品信息
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },

  methods: {
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },

    getHomeGoods(type) {
      const page = this.goods[type].page + 1;

      getHomeGoods(type, page).then(res => {
        console.log(res);
        // 处理数据
        this.goods[type].list.push(...res.data.list)
        // 处理页数
        this.goods[type].page += 1;
      })
    }
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  /* padding-bottom: 1000px; */
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control {
  position: sticky;
  top: 44px;
}
</style>
