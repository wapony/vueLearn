<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20Stu}}</h2>
    <h2>{{$store.getters.more20StuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(18)}}</h2>
    <h2>{{$store.state.info}}</h2>


    <button @click="addition">+</button>
    <button @click="substation">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">增加学生</button>
    <button @click="updateInfo">更新信息</button>
    
    <h2>moduleA里面的值-------------------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>

    <button @click="updateName">修改名字</button>
    <button @click="asyncUpateName">异步修改名字</button>

 

    <!-- <hello-vuex :counter="counter"/> -->
    <hello-vuex/>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'

export default {
  name: 'App',
  data() {
    return {
      message: '我是app组件',
      // counter: 0
    }
  },
  components: {
    HelloVuex
  },
  methods: {
    addition() {
      this.$store.commit('increment')
    },
    substation() {
      this.$store.commit('decrement')
    },

    addCount(count) {
      // ‘incrementCount’ 称为type, 翻译为字符类型
      // 后面跟上count的行为称为 payload, 翻译为挂载
      // 1.普通提交风格
      // this.$store.commit('incrementCount', count)

      // 2.特殊的提交风格
      this.$store.commit({
        type: 'incrementCount2',
        count
      })
    },
    addStudent() {
      const stu = {id: 115, name: 'alen', age: 49}
      this.$store.commit('addStudent', stu)
    },
    updateInfo() {
      // 直接调用mutations
      // this.$store.commit('updateInfo')

      // 通过actions异步更新
      this.$store.dispatch('aUpdateInfo', '我是payload')
      .then(res => {
        console.log(res);
      })
    },
    updateName() {
      this.$store.commit('updateName', '李四')
    },
    asyncUpateName() {
      this.$store.dispatch('aUpdateName')
    }
  }
}
</script>

<style>

</style>
