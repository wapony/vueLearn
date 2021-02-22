import axios from 'axios';

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    // 2. axios拦截器
    
    // 请求时拦截
    instance.interceptors.request.use(config => {
        // 1、比如config中一些信息不符合服务器的要求
        // 2、每次发送网络请求时，都希望在界面中显示一个请求的图标，比如转圈圈
        // 3、某些网络请求（比如登录token），必须携带一些特殊的信息

        // 重点，拦截以后必须要把config返回回去，不然请求执行的时候会拿不到config
        return config
    }, err => {
        console.log(err);
    })

    // 响应拦截
    instance.interceptors.response.use(res => {
        console.log(res);
        // 拦截之后要返回后的处理结果
        return res.data
    }, err => {
        console.log(err);
    })

    // 发送网络请求
    return instance(config)
}
