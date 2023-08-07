import { mastodonte, Mastodonte } from '../index';
import MASTODONTE_WORDS from '../words';

describe('mastodonte function', () => {
  it('should generate words with default options', () => {
    const result = mastodonte();

    expect(result.split('. ')).toHaveLength(1);
    result.split(' ').forEach((generatedWord) => {
      const sanitizedWord = generatedWord.replace('.', '').toLowerCase();
      expect(MASTODONTE_WORDS).toContain(sanitizedWord);
    });
  });

  it('should generate words with custom options', () => {
    const result = mastodonte({ count: 3 });

    expect(result.split('. ')).toHaveLength(3);
    result.split(' ').forEach((generatedWord) => {
      const sanitizedWord = generatedWord.replace('.', '').toLowerCase();
      expect(MASTODONTE_WORDS).toContain(sanitizedWord);
    });
  });
});

describe('Mastodonte class', () => {
  it('should generate words with default options', () => {
    const mastodonteGenerator = new Mastodonte();

    const result = mastodonteGenerator.generateSentences(1);

    expect(result.split('. ')).toHaveLength(1);
    result.split(' ').forEach((generatedWord) => {
      const sanitizedWord = generatedWord.replace('.', '').toLowerCase();
      expect(MASTODONTE_WORDS).toContain(sanitizedWord);
    });
  });

  it('should generate words with custom options', () => {
    const mastodonteGenerator = new Mastodonte({
      wordsPerSentence: { min: 15, max: 15 },
    });

    const result = mastodonteGenerator.generateSentences(1);

    expect(result.split('. ')).toHaveLength(1);

    const words = result.split(' ');
    expect(words).toHaveLength(15);
    words.forEach((generatedWord) => {
      const sanitizedWord = generatedWord.replace('.', '').toLowerCase();
      expect(MASTODONTE_WORDS).toContain(sanitizedWord);
    });
  });
});
