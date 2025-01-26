import deburr from 'lodash.deburr'
import { it, expect } from 'vitest'

import MASTODONTE_WORDS from '../words'

it('should store unique words', () => {
	const sanitizedWords = MASTODONTE_WORDS.map((word) =>
		deburr(word.toLowerCase()),
	)
	const uniqueWords = new Set(sanitizedWords)
	expect(sanitizedWords).toEqual(Array.from(uniqueWords))
})
