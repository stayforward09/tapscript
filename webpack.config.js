const path = import.meta.url.split('/').slice(2, -1).join('/')

const config = {
  mode: 'production',
  entry: './index.js',

  // module: {
  //   rules: [
  //     {
  //       test: /\.ts$/,
  //       use: 'ts-loader',
  //       exclude: /node_modules/
  //     }
  //   ]
  // },

  // resolve: {
  //   extensions: ['.ts', '.js']
  // },

  output: {
    path: path + '/dist',
    filename: 'bton.js'
    // library: 'BTON',
    // libraryTarget: 'var'
  }
}

export default config
