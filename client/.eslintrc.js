module.exports = {
  extends: ['./node_modules/poetic/config/eslint/eslint-config.js'],
  // Add custom rules here
  rules: {
    'no-shadow': 0,
    'import/prefer-default-export': 'off',
    // 'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
    'react/jsx-props-no-spreading': 0,
  },
};
