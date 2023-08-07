module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  rules: {
    // Base
    'no-shadow': 'error',
    'no-warning-comments': 'off',
    'no-console': 'warn', // doesn't seem to be enabled in any preset

    // Import
    'import/newline-after-import': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
      },
    ],
    'import/exports-last': 'error',
    'import/group-exports': 'error',
    'import/consistent-type-specifier-style': ['error', 'prefer-inline'],

    // typescript-eslint
    '@typescript-eslint/array-type': [
      'warn',
      {
        default: 'generic',
      },
    ],
    '@typescript-eslint/consistent-type-exports': [
      'error',
      {
        fixMixedExportsWithInlineTypeSpecifier: true,
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        fixStyle: 'inline-type-imports',
      },
    ],

    // Disabling because of index errors on interfaces,
    // which works fine in type aliases:
    // https://bobbyhadz.com/blog/typescript-index-signature-for-type-is-missing-in-type
    '@typescript-eslint/consistent-type-definitions': 'off',

    // Disabling because it's too strict:
    // we are interested in using || operator multiple times to avoid empty strings.
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
  },

  overrides: [
    {
      // https://typescript-eslint.io/linting/troubleshooting/#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-file
      files: ['./**/*.js'],
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
    },
  ],
};
