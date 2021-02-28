import axios  from 'axios';

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout: 5000
    })

    // 2. axios拦截器
    // 请求时拦截
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        // console.log(err);
    })

    // 响应拦截
    instance.interceptors.response.use(res => {
        // 拦截之后要返回后的处理结果
        return res.data
    }, err => {
        // console.log(err);
    })

    // 发送网络请求
    return instance(config)
}
