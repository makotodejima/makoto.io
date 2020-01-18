module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'prettier/@typescript-eslint',
    'prettier/react',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/require-default-props': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/camelcase': 'off',
  },
  env: {
    browser: true,
  },
};
