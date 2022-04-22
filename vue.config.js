let path = require('path')
module.exports = {
  configureWebpack: {
    resolve: {

      alias: {

        'assets': '@/assets',
        'store': '@/store',
        'network': '@/network',
        'components': '@/components',

      }
    }
  }
}
