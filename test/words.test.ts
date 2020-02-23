import MASTODONTE_WORDS from '../src/words';
import deburr from 'lodash.deburr';

it('should store unique words', () => {
  const uniqueWords = new Set(
    MASTODONTE_WORDS.map(word => deburr(word.toLowerCase()))
  );
  expect(MASTODONTE_WORDS).toHaveLength(uniqueWords.size);
});
