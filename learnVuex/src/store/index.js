import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象

//  state官方建议直接抽出来放在本文件中
const state = {
    counter: 1000,
    students: [
        {id: 110, name: 'why', age: 18},
        {id: 111, name: 'cobe', age: 20},
        {id: 112, name: 'james', age: 11},
        {id: 113, name: 'curry', age: 32},
        {id: 114, name: 'jordan', age: 40}
    ],
    info: {
        name: 'cobe',
        age: 22,
        height: 1.98
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        a: moduleA
    }
})

// 3.导出store对象
export default store
