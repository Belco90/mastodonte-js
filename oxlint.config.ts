import { defineConfig } from 'oxlint'

export default defineConfig({
	plugins: ['import', 'typescript', 'unicorn'],
	categories: {
		correctness: 'warn',
		suspicious: 'warn',
		pedantic: 'warn',
	},
	rules: {
		'no-console': 'warn',
	},
	env: {
		builtin: true,
	},
	globals: {},
	ignorePatterns: ['dist', 'coverage', 'node_modules'],
	options: {
		denyWarnings: true,
		reportUnusedDisableDirectives: 'warn',
		typeAware: true,
	},
	overrides: [
		{
			files: ['**/*.test.ts', '**/*.test.tsx', '**/*.spec.ts', '**/*.spec.tsx'],
			plugins: ['vitest'],
			rules: {
				'vitest/prefer-to-be': 'warn',
			},
		},
	],
})
