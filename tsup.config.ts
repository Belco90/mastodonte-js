import { defineConfig } from 'tsup'

export default defineConfig((options) => {
	return {
		entry: ['src/index.ts'],
		format: 'esm',
		clean: true,
		minify: !options.watch,
		dts: true,
		sourcemap: true,
	}
})
