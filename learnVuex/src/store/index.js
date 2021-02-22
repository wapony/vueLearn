import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
    state: {
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
    },
    mutations: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },

        incrementCount(state, count) {
            state.counter += count
        },
        incrementCount2(state, payload) {
            state.counter += payload.count
        },
        addStudent(state, stu) {
            state.students.push(stu)
        },
        updateInfo(state) {
            // Vue.set(state.info, 'address', '洛杉矶')
            Vue.delete(state.info, 'age')
        }
    },
    actions: {

    },
    getters: {
        powerCounter(state) {
            return state.counter * state.counter
        },
        more20Stu(state) {
            return state.students.filter(s => s.age > 20)
        },
        more20StuLength(state, getters) {
            return getters.more20Stu.length
        },
        // 带参数的getters方法, return一个function才可以操作
        moreAgeStu(state) {
            return function(age) {
                return state.students.filter(s => s.age > age)
            }
        }
    },
    modules: {

    }
})

// 3.导出store对象
export default store
