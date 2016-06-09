/* eslint no-var:0 */
/* eslint no-console:0 */
import webpack            from 'webpack';
import WebpackDevServer   from 'webpack-dev-server';
import config             from './webpack.hot.reload.config.babel';

new WebpackDevServer(webpack(config), {
  publicPath          : config.output.publicPath,
  hot                : true,
  historyApiFallback : true
}).listen(3000, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:3000');
});
