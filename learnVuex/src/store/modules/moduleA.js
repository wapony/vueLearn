export default {
    state: {
        name: '张三'
    },
    mutations: {
        updateName(state, payload) {
            state.name = payload
        }
    },
    actions: {
        // context 里面有 state, commit, dispatch, getters, rootGetters, rootState
        aUpdateName(context) {
            console.log(context);
            setTimeout(() => {
                context.commit('updateName', '王武')
            }, 1000);
        }
    },
    getters: {
        fullName(state) {
            return state.name + '1111'
        },
        fullName2(state, getters) {
            return getters.fullName + '2222'
        },

        // 模块里可以有第三个参数
        fullName3(state, getters, rootState) {
            return getters.fullName2 + rootState.counter
        }
    }
}
