module.exports = {
  extends: [require.resolve('@hbwow/lints/dist/eslint')],
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
};
