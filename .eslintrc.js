module.exports = {
  extends: ['airbnb-typescript/base', 'plugin:prettier/recommended', 'plugin:jest/recommended'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'import/prefer-default-export': 'off',
  },
};
