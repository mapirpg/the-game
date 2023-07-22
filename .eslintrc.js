/* eslint-disable no-undef */
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'google',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    camelcase: 'off',
    'prettier/prettier': ['error', { semi: false }],
    'react/prop-types': 'off',
    'no-trailing-spaces': 'error',
    'require-jsdoc': 'off',
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
