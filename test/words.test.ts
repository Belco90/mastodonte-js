import MASTODONTE_WORDS from '../src/words';
import deburr from 'lodash.deburr';

it('should store unique words', () => {
  const sanitizedWords = MASTODONTE_WORDS.map((word) =>
    deburr(word.toLowerCase())
  );
  const uniqueWords = new Set(sanitizedWords);
  expect(sanitizedWords).toEqual(Array.from(uniqueWords));
});
