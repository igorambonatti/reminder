const path = require('path')
const { addWebpackAlias } = require('customize-cra')

module.exports = function override(config, env) {
  config = addWebpackAlias({
    ['@assets']: path.resolve(__dirname, 'src', 'assets'),
    ['@components']: path.resolve(__dirname, 'src', 'components'),
    ['@context']: path.resolve(__dirname, 'src', 'context'),
    ['@hooks']: path.resolve(__dirname, 'src', 'hooks'),
    ['@pages']: path.resolve(__dirname, 'src', 'pages'),
    ['@styles']: path.resolve(__dirname, 'src', 'styles'),
    ['@validations']: path.resolve(__dirname, 'src', 'validations'),
    ['@utils']: path.resolve(__dirname, 'src', 'utils'),
    ['@constants']: path.resolve(__dirname, 'src', 'constants'),
  })(config)

  return config
}
