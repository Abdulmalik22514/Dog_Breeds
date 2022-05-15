module.exports = {
  parser: 'babel-eslint', // uses babel-eslint transforms
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  env: {
    node: true, // defines things like process.env when generating through node
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended', // use recommended configs
    'plugin:react/recommended',
  ],
  rules: {
    'react/prop-types': 'off',
  },
};
