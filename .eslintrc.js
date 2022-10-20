module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true,
  },
  // extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    indent: [
      'warn',
      'tab',
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    quotes: [
      'error',
      'single',
    ],
    'no-unused-vars': 'error',
    'no-console': 'error',
    camelcase: 'error',
    semi: [2, 'always'],
  },
};
