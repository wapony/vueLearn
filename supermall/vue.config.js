module.exports = {
  configureWebpack: {
    resolve: {
      // 配置路径的别名, 默认已经有了@别名 表示src路径
      alias: {
        '@assets': '@/assets',
        '@common': '@/common',
        '@components': '@/components',
        '@network': '@/network',
        '@views': '@/views'
      }
    }
  }
}

