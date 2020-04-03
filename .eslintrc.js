module.exports = {
  extends: ['./node_modules/poetic/config/eslint/eslint-config.js'],
  // Add custom rules here
  rules: {
    'no-shadow': [
      'error',
      {
        allow: ['addItem', 'toggleCartHidden', 'setCurrentUser', 'removeItem'],
      },
    ],
    'import/prefer-default-export': 'off',
    // 'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
  },
};
