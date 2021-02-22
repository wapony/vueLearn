export default {
    aUpdateInfo(context, payload) {
        
        // setTimeout(() => {
        //     context.commit('updateInfo', payload)
        // }, 1000);

        // 使用promise 回调通知调用者已经更新成功
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                context.commit('updateInfo', payload)
                resolve('更新成功')
            }, 1000);
        })
    }
}