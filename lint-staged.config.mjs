const lintStagedConfig = {
	'**/*.{js,jsx,ts,tsx,mjs,cjs,mts}': [
		'oxlint --config=oxlint.config.ts --import-plugin --deny-warnings',
	],
	'*': 'oxfmt --config=oxfmt.config.ts',
}

export default lintStagedConfig
