<template>
  <div class="recommend-view">
    <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommondView",
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>

.recommend-view {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 14px;

  padding: 10px 0 15px;

  border-bottom: 8px solid #eee;
}

.recommend-item {
  flex: 1;
}

.recommend-item img {
  width: 68px;
  height: 68px;
  margin-bottom: 10px;
}

</style>
