module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'default-param-last': 0,
    'no-debugger': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state', // for vuex state
        ],
      },
    ],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src/'],
          ['components', './src/components/'],
          ['@mui/styled-engine', '@mui/styled-engine-sc'],
        ],
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
