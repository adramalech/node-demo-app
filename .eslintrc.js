module.exports = {
  env: {
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'never'],
    'comma-dangle': 'always-multiline',
    'max-len': ['error', { 
      code: 160, 
      tabWidth: 4, 
      ignorePattern: '^import .*',
      ignoreStrings: true,
      ignoreRegExpLiteral: true,
      ignoreTemplateLiterals: true,
      ignoreTrailingComments: true,
      ignoreUrls: true, 
      ignoreUrls: true 
    }],
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline']
  },
}
