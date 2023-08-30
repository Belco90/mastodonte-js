/** @type {import('jest').Config} */
const config = {
	transform: {
		'^.+\\.ts$': '@swc/jest',
	},
	reporters: [['github-actions', { silent: false }], 'summary'],
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
	},
}

module.exports = config
