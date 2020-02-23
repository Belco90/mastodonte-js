import { loremIpsum, LoremIpsum, ILoremIpsumParams } from 'lorem-ipsum';
import MASTODONTE_WORDS from './words';
import { IGeneratorOptions } from 'lorem-ipsum/types/src/lib/generator';

export const mastodonte = (args: ILoremIpsumParams = {}): string => {
  return loremIpsum({
    ...args,
    words: MASTODONTE_WORDS,
  });
};

export class Mastodonte extends LoremIpsum {
  constructor(
    options: IGeneratorOptions = {},
    format?: string,
    suffix?: string
  ) {
    options.words = MASTODONTE_WORDS;
    super(options, format, suffix);
  }
}
