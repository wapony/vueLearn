export default {
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
    updateInfo(state, payload) {
        state.info.name = payload


        // Vue.set(state.info, 'address', '洛杉矶')
        // Vue.delete(state.info, 'age')
    }
}