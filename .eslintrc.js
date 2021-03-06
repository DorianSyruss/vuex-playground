module.exports = {
  root: true,
  env: {
    'browser': true,
    'commonjs': true,
    'es6': true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/base'
  ],
  parserOptions: {
    'sourceType': 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'no-undef': 0
  }
};
