import { defineConfig } from 'oxfmt'

export default defineConfig({
	singleQuote: true,
	semi: false,
	useTabs: true,
	sortPackageJson: true,
	sortImports: {
		groups: [
			'type-import',
			['value-builtin', 'value-external'],
			'type-internal',
			'value-internal',
			['type-parent', 'type-sibling', 'type-index'],
			['value-parent', 'value-sibling', 'value-index'],
			'unknown',
		],
	},
	ignorePatterns: ['dist', 'node_modules', 'package-lock.json', 'pnpm-lock.yaml', '.gitignore'],
})
