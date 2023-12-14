module.exports = {
  root: true,
  env: { 
    es2022: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:import/recommended',
    "plugin:import/typescript",
    'plugin:unicorn/recommended',
    'plugin:json/recommended',
    'plugin:markdown/recommended',
    'plugin:yml/standard',
    'plugin:jest/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: './',
    ecmaVersion: 'latest', // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      impliedStrict: true
    },
  },
  plugins: [
    'prettier',
    'import',
    'unicorn',
    'json',
    'markdown',
    "jest"
  ],
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
  ignorePatterns: [
    'dist', 
    '.eslintrc.cjs',
    'prettierrc.mts',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        extensions: [
          '.ts',
          '.d.ts',
          '.js',
          '.json',
          '.node'
        ],
      }
    }
  },
}
