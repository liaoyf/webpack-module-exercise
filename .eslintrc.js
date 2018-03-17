module.exports = {
  extends: 'standard',
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    es6: true,
    node: true,
    browser: true
  },
  plugins: ['react'],
  rules: {
    'react/jsx-uses-vars': [2],
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'warn'
  }
}
