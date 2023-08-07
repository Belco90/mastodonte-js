import { loremIpsum, LoremIpsum, type ILoremIpsumParams } from 'lorem-ipsum';
// eslint-disable-next-line import/no-unresolved
import { type IGeneratorOptions } from 'lorem-ipsum/types/src/lib/generator';

import MASTODONTE_WORDS from './words';

const mastodonte = (args: ILoremIpsumParams = {}): string => {
  return loremIpsum({
    ...args,
    words: MASTODONTE_WORDS,
  });
};

class Mastodonte extends LoremIpsum {
  constructor(
    options: IGeneratorOptions = {},
    format?: string,
    suffix?: string
  ) {
    options.words = MASTODONTE_WORDS;
    super(options, format, suffix);
  }
}

export { mastodonte, Mastodonte };
