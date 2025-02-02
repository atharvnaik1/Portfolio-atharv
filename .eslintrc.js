module.exports = {
  extends: [
    'next',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
    'no-console': 'warn',
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto', // Handles line ending errors
        bracketSameLine: false, // Ensures consistent bracket spacing
        trailingComma: 'none' // Disables trailing commas
      }
    ]
  }
};
