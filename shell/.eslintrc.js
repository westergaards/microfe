module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'prettier/react'
  ],
  plugins: ['@typescript-eslint', 'prettier', 'import', 'react-hooks'],
  rules: {
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'comma-dangle': ['error', 'never'],
    curly: 'error',
    'eol-last': 'error',
    'func-names': 'off',
    'id-length': [
      'error',
      {
        min: 2,
        max: 50,
        properties: 'never',
        exceptions: ['e', 'i', 'n', 't', 'x', 'y', 'z', '_', '$']
      }
    ],
    'no-alert': 'error',
    'no-console': 'error',
    'no-const-assign': 'error',
    'no-else-return': 'error',
    'no-empty': 'off',
    'no-shadow': 'error',
    'no-undef': 'error',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_.*' }],
    'no-use-before-define': 'error',
    'no-useless-constructor': 'error',
    'object-curly-newline': 'off',
    'object-shorthand': 'off',
    'prefer-const': 'error',
    'prefer-destructuring': ['error', { object: true, array: false }],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true
      }
    ],
    semi: ['error', 'never'],
    'spaced-comment': 'error',
    strict: ['error', 'never'],
    'prettier/prettier': 'warn',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/array-type': ['warn', { default: 'array-simple' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/semi': 'off'
  }
}
