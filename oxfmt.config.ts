import { defineConfig } from 'oxfmt'

export default defineConfig({
	singleQuote: true,
	semi: false,
	useTabs: true,
	sortPackageJson: true,
	ignorePatterns: ['dist', 'node_modules', 'package-lock.json', 'pnpm-lock.yaml', '.gitignore'],
})
