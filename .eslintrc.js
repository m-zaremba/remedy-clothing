module.exports = {
  extends: ['./node_modules/poetic/config/eslint/eslint-config.js'],
  // Add custom rules here
  rules: {
    'react/prop-types': 0,
    'no-console': 0,
    'no-alert': 0,
    'import/prefer-default-export': 0,
    'import/no-named-default': 0,
    'no-shadow': 0,
    'react/jsx-filename-extension': 0,
  },
};
