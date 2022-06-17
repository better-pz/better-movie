module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  env: {
    node: true,
  },
  rules: {
    semi: ['error', 'never'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'global-require': 0, // require 报错
    'no-plusplus': 'off',
    'react/sort-comp': 'off',
    'no-unused-expressions': 'off',
    '@typescript-eslint/camelcase': false,
    "react/react-in-jsx-scope": "off", // react in scope
    'react/jsx-first-prop-new-line': 'error',
    'import/extensions': [0] // 解决 `Missing file extension for "@/xxx`
  },
}