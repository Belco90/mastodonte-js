import eslint from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import tseslint from 'typescript-eslint'
import importPlugin from 'eslint-plugin-import-x'
import prettierConfig from 'eslint-config-prettier'

export default defineConfig([
	// Base config for all files
	eslint.configs.recommended,

	// TypeScript files
	...tseslint.configs.strictTypeChecked,
	...tseslint.configs.stylisticTypeChecked,
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
		plugins: {
			'@typescript-eslint': tseslint.plugin,
			'import-x': importPlugin,
		},
		rules: {
			// Base
			'no-shadow': 'error',
			'no-warning-comments': 'off',
			'no-console': 'warn',

			// Import
			'import-x/newline-after-import': 'error',
			'import-x/order': [
				'error',
				{
					'newlines-between': 'always',
					alphabetize: {
						order: 'asc',
						caseInsensitive: false,
					},
				},
			],
			'import-x/exports-last': 'error',
			'import-x/group-exports': 'error',
			'import-x/consistent-type-specifier-style': ['error', 'prefer-inline'],

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
			'@typescript-eslint/consistent-type-definitions': 'off',
			'@typescript-eslint/prefer-nullish-coalescing': 'off',
		},
	},

	// Config files - disable type-checked rules
	{
		files: [
			'*.config.ts',
			'*.config.mts',
			'*.config.js',
			'*.config.mjs',
			'*.config.cjs',
		],
		...tseslint.configs.disableTypeChecked,
	},

	// JavaScript files - disable type-checked rules
	{
		files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
		...tseslint.configs.disableTypeChecked,
		languageOptions: {
			globals: {
				require: 'readonly',
				module: 'readonly',
				__dirname: 'readonly',
				__filename: 'readonly',
			},
		},
	},

	// Prettier config to turn off conflicting rules (must be last)
	prettierConfig,

	// Global ignores (must be last)
	globalIgnores(['dist/**', 'coverage/**', 'node_modules/**']),
])
