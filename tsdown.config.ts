import { defineConfig } from 'tsdown'

export default defineConfig({
	attw: {
		// enabled: 'ci-only',
		profile: 'esm-only',
		level: 'error',
	},
	publint: {
		// enabled: 'ci-only',
		level: 'error',
	},
})
