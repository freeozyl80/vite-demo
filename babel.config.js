module.exports = {
  "presets": [
      '@vue/app',
      ['@babel/preset-env', {
        'modules': false,
        loose: false,
        'targets': {
          'browsers': ["> 1%", "last 2 versions", "not ie <= 8"]
        }
      }]
  ],
  "plugins": [
    ['@babel/plugin-transform-runtime', {
      corejs: 3
    }]
  ]
}