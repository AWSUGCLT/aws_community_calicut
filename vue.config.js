const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
})
// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production'
//     ? '/aws_community_calicut/'
//     : '/'
// }

module.exports = {
  publicPath: '/'
}