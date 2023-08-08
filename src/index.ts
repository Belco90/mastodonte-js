import { loremIpsum, LoremIpsum, type ILoremIpsumParams } from 'lorem-ipsum'

import MASTODONTE_WORDS from './words'

const mastodonte = (args: ILoremIpsumParams = {}): string => {
	return loremIpsum({
		...args,
		words: MASTODONTE_WORDS,
	})
}

type LoremIpsumConstructorParams = ConstructorParameters<typeof LoremIpsum>

class Mastodonte extends LoremIpsum {
	constructor(...args: LoremIpsumConstructorParams) {
		const [options, format, suffix] = args

		const superOptions = options ? options : {}
		superOptions.words = MASTODONTE_WORDS

		super(superOptions, format, suffix)
	}
}

export { mastodonte, Mastodonte }
