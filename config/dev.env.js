'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  //注意：需要写成字符串
  DEMO_DOMAIN: '"http://localhost:10168"'
})
