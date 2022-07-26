const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')// Recomendação da comunidade

module.exports = {
  mode: 'development',
  entry: './src/main/index.tsx',
  output: {
    path: path.join(__dirname, 'public/js'), // path onde será gerado o bundle
    publicPath: '/public/js',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'scss'], // Formato de arquivos que serão tratados pelo webpack
    alias: {
      '@': path.join(__dirname, 'src')// "Mapeando o @, ou seja, indicando para o webpack pra qual local o @ deve apontar"
    }
  },
  module: {
    rules: [{
      test: /\.ts(x?)$/, // Qual o arquivo q será tratado
      loader: 'ts-loader', // Qual loader irá tratar
      exclude: /node_modules/ // Pasta que deve ser excluída
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          modules: true
        }
      },
      {
        loader: 'sass-loader'
      }]
    }]
  },
  devServer: { // devServer é quem vai rodar o servidor de desenvolvimento com a aplicação rodando
    contentBase: './public', // Indicando qual a pasta que contém a base do projeto, ou seja, o local que contém os arquivos compilados que dever ser utilizado pelo devServer
    writeToDisk: true, // Escreve o bundle.js no disco ao invés de apenas na memória (default)
    historyApiFallback: true // Para as diferentes rotas funcionarem
  },
  externals: { // Informando quais dependências serão importadas externamente, ou seja, não compiladas para o bundle
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
