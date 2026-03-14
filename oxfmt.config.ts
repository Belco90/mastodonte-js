import { defineConfig } from 'oxfmt'

export default defineConfig({
	singleQuote: true,
	semi: false,
	useTabs: true,
	printWidth: 80,
	sortPackageJson: false,
	ignorePatterns: [
		'dist',
		'node_modules',
		'package-lock.json',
		'pnpm-lock.yaml',
		'.gitignore',
	],
})
