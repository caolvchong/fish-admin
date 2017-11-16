const path = require('path');
const { helper, ROOT, PUBLIC, SRC, join } = require('./helper');

const isHot = !!process.env.npm_config_hot;

const config = {
  entry: {
    polyfill: [path.resolve(PUBLIC, 'polyfill.js'), 'babel-polyfill'],
    main: path.resolve(SRC, 'index.js')
  },
  output: helper.output.hash(),
  resolve: helper.resolve(),
  resolveLoader: helper.resolveLoader(),
  devtool: 'eval-source-map',
  module: {
    loaders: join(
      helper.loaders.babel(isHot),
      helper.loaders.css(),
      helper.loaders.less(),
      helper.loaders.sass(),
      helper.loaders.fishIconReplace('/fonts'),
      helper.loaders.source()
    ),
    postLoaders: join(helper.loaders.exports(), helper.loaders.es3ify())
  },
  plugins: [
    helper.plugins.define('dev', {
      DEBUG: true,
      HOT: isHot
    }),
    helper.plugins.ignore(/vertx/),
    helper.plugins.extractCss(),
    helper.plugins.html()
  ],
  devServer: helper.devServer(isHot)
};

if (isHot) {
  config.plugins.push(helper.plugins.hot());
}

const devServer = helper.devServer(isHot);
config.plugins.push(helper.plugins.browser(`http://${devServer.host}:${devServer.port}`));
config.devServer = devServer;

module.exports = config;
