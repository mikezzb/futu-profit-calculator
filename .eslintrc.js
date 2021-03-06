module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    React: true,
    ReactDOM: true,
    ReactRouterDOM: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'only-warn', // for run build
  ],
  rules: {
    'indent': ['error', 2, { SwitchCase: 1 }],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-filename-extension': [0],
    'arrow-parens': ['error', 'as-needed'],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 0,
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/button-has-type': 'off',
    'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
    'operator-linebreak': ['error', 'after'],
    'react/jsx-wrap-multilines': ['error', { logical: 'ignore', arrow: 'ignore' }],
    'no-nested-ternary': 'off',
    'camelcase': 'off',
    'radix': 'off',
    'comma-dangle': ['error', {
      functions: 'never',
      objects: 'always-multiline',
      arrays: 'always-multiline',
    }],
    'object-curly-spacing': ['error', 'always'],
    'linebreak-style': 0,
    'react/destructuring-assignment': 'off',
    'function-paren-newline': 'off',
    'quote-props': ['error', 'consistent-as-needed'],
    'jsx-a11y/alt-text': 'off',
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
    'jsx-a11y/media-has-caption': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-fragments': 'off',
    'no-confusing-arrow': 'off',
    'brace-style': ['error', 'stroustrup'],
    'jsx-a11y/anchor-has-content': 'off',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    'no-underscore-dangle': 0,
    'no-alert': 0,
    'no-console': 0,
    'max-len': 0,
    'no-mixed-operators': 0,
  },
  ignorePatterns: [
    '*.css',
  ],
};
