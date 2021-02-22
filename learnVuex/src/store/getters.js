export default {
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
}