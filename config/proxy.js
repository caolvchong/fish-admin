/** 
 * 此文件会在两个地方生效：
 * 1. webpack-dev-server 会自动配置，本地开发自动代理
 * 2. 会往 request.proxy 对象中注入对应的方法，例如
 *    const {api} = request.proxy;
 *    api.get/post ...
 *    这里的 api 就是一个包装过的 axios 对象
 * 至于线上，目前是希望通过 nginx 反向代理，从而无须进行任何代码配置
 * 对应的请求使用对应环境变量下的地址（也就是说，除了 local，目前其他的值还不具有意义）
 * 本地开发使用 local，其余的 url 的 key 对应 process.env.npm_config_env
 */

const config = {
  api: {
    prefix: '/api',
    url: {
      local: 'http://localhost:5103',
      dev: 'http://test.zmei.me',
      production: 'http://test.zmei.me'
    }
  },
  douban: {
    prefix: '/douban',
    url: {
      local: 'https://api.douban.com/v2',
      dev: 'https://api.douban.com/v2',
      production: 'https://api.douban.com/v2'
    }
  }
};


module.exports = config;
