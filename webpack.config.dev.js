import webpack from 'webpack';
import path from 'path';

export default {
  devtool: 'cheap-module-source-map',
  context: path.resolve('./'),
  entry:
     { main:
        [ 'webpack-hot-middleware/client?path=/__webpack_hmr',
          './client/index.js'] },
  output: {
    path: path.resolve('./static/dist'), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/dist/',
    filename: '[name].js'
  },
  resolve: {
    modulesDirectories: [
      'client',
      'node_modules',
      'common',
    ],
    extensions: ['', '.json','.js'],
  },
  module: {
    loaders: [
      {
        test: /\.js$|.svg$/,
        exclude: [/\/node_modules\//],
        loader: 'babel',
        query: {
          babelrc: false,
          presets: [
            [
               "env",
               {
                 "targets": {
                   "chrome": 52,
                   "browsers": [
                     "last 2 versions"
                   ]
                 }
               }
             ],
            "react",
            "stage-0"
          ],
          plugins: [
            "transform-es2015-destructuring",
            "transform-es2015-parameters",
            "transform-object-rest-spread",
            "transform-runtime",
            "add-module-exports",
            "transform-decorators-legacy",
            "transform-react-display-name",
            "typecheck",
            [
              "react-transform",
              {
                "transforms": [
                  {
                    "transform": "react-transform-catch-errors",
                    "imports": [
                      "react"
                    ]
                  },
                  {
                    "transform": "react-transform-hmr",
                    "imports": [
                      "react"
                    ],
                    "locals": [
                      "module"
                    ]
                  }
                ]
              }
            ]
          ]
        }
      },
      {
        test: /(\.css)$/, loaders: ['style', 'css'],
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file',
      },
      {
        test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml',
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
};
