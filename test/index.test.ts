import { mastodonte } from '../src/index';
import MASTODONTE_WORDS from '../src/words';

describe('mastodonte function', () => {
  it('should generate one sentence with custom words', () => {
    const result = mastodonte();

    expect(result.split('. ')).toHaveLength(1);
    result.split(' ').forEach(generatedWord => {
      const sanitizedWord = generatedWord.replace('.', '').toLowerCase();
      expect(MASTODONTE_WORDS).toContain(sanitizedWord);
    });
  });
});
