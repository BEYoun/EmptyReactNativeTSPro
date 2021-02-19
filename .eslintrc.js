module.exports = {
  tabWidth: 2,
  useTabs: false,
  printWidth: 140,
  semi: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  arrowParens: 'always',
  singleQuote: true,
  jsxSingleQuote: true,
  jsxBracketSameLine: true,
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.js', '*.ts', '*.jsx', '*.tsx'],
      rules: {
        'jsx-quotes': 0,
      },
    },
  ],
};