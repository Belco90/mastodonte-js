const lintStagedConfig = {
	'**/*.{js,jsx,ts,tsx,mjs,cjs,mts}': ['oxlint --import-plugin --deny-warnings'],
	'*': 'oxfmt',
}

export default lintStagedConfig
