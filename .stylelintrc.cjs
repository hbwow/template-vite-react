module.exports = {
  extends: [require.resolve('@hbwow/lints/dist/stylelint')],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends', 'tailwind'],
      },
    ],
  },
};
