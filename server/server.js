import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import Index from '../views/index';
import { renderReactTpl } from '../common/render-react-tpl';
import { getAssets } from '../common/assets'
/* eslint-disable no-console */
const port = 3035;
const app = express();
const compiler = webpack(config);

app.use((req, res, next) => {
  // this fix is needed to make it work when using nginx?
  if (req.url.indexOf('__webpack_hmr') > -1) {
    // as described here http://stackoverflow.com/a/27960243/538752
    res.set('X-Accel-Buffering', 'no');
  }
  next();
});

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  contentBase: './static/',
  stats: {
    colors: true,
  },
}));

app.use(require('webpack-hot-middleware')(compiler));

// TODO Use serve-static plugin instead of express.static
app.use(express.static(path.join(__dirname, '..', 'static')));

app.use(async (req, res) => {

  const isDevelopment = true;

  const { jsAssets, cssAssets } = await getAssets({
    query: req.query,
    isDevelopment,
  });

  const indexContent = renderReactTpl(Index, {
    jsAssets: [
      ...jsAssets,
    ],
    cssAssets,
    title: 'Application Title' });
  res.send(indexContent);
});


app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
