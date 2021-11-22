module.exports = {
  env: {
    es6: true,
  },
  parser: '@typescript-eslint/parser', // specifies the ESLint parser
  extends: ['plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    // place to specify ESLint rules that may overwrite specified rules.
  },
}
