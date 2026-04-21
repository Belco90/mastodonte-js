import type { ILoremIpsumParams } from 'lorem-ipsum'

import { loremIpsum, LoremIpsum } from 'lorem-ipsum'

import MASTODONTE_WORDS from './words'

// oxlint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types -- external type
const mastodonte = (args: ILoremIpsumParams = {}): string => {
	return loremIpsum({
		...args,
		words: MASTODONTE_WORDS,
	})
}

type LoremIpsumConstructorParams = ConstructorParameters<typeof LoremIpsum>

class Mastodonte extends LoremIpsum {
	// oxlint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types -- external type
	constructor(...args: LoremIpsumConstructorParams) {
		const [options, format, suffix] = args

		const superOptions = options ?? {}
		superOptions.words = MASTODONTE_WORDS

		super(superOptions, format, suffix)
	}
}

export { mastodonte, Mastodonte }
