module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
      'assets' : '@/assets',
      'content': 'components/content',
      'common' : '@/common',
      'components': '@/components',
      'network': '@/network',
      'views': '@/views',
      }
    }
  }
}