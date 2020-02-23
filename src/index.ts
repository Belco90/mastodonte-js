import { loremIpsum } from 'lorem-ipsum';
import MASTODONTE_WORDS from './words';

export const mastodonte = (args: Object = {}): string => {
  return loremIpsum({
    ...args,
    words: MASTODONTE_WORDS,
  });
};
