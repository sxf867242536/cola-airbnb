module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'default-param-last': 0,
    'no-debugger': 0,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src/'],
          ['components', './src/components/'],
        ],
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
