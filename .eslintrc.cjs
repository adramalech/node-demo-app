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
    'plugin:import/typescript',
    'plugin:unicorn/recommended',
    'plugin:json/recommended',
    'plugin:markdown/recommended',
    'plugin:yml/standard',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:prettier/recommended',
    'plugin:you-dont-need-lodash-underscore/compatible',
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
    'jest',
  ],
  rules: {
    'no-duplicate-imports': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 1,
        'maxEOF': 0,
        'maxBOF': 0
      }
    ],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-unassigned-import': 'error',
    'import/no-unresolved': 'error',
    semi: ['error', 'always'],
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
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    'no-var': 'error',
    'no-empty': 'error',
    'no-unused-expressions': ['error', { 'allowTernary': true }],
    curly: 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      { 
        'selector': 'variableLike', 'format': ['camelCase'] 
      },
      {
        'selector': 'variable',
        'format': ['camelCase', 'UPPER_CASE']
      },
      {
        'selector': 'variable',
        'types': ['boolean'],
        'format': ['PascalCase'],
        'prefix': ['is', 'should', 'has', 'can', 'did', 'will']
      },
      {
        'selector': 'typeParameter',
        'format': ['PascalCase'],
        'prefix': ['T']
      }
    ],
  },
  ignorePatterns: [
    './dist', 
    './.eslintrc.cjs',
    './.prettierrc.mts',
    './package.json',
    './package-lock.json',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts']
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
  }
}
