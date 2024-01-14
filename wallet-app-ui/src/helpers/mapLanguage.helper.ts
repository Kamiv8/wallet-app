import { Languages } from '../types/enums';
import { LanguageType } from '../i18n/languageType';

export class MapLanguageHelper {
  public static mapToString(language: Languages): string {
    switch (language) {
      case Languages.ENGLISH:
        return LanguageType.ENGLISH;
      case Languages.POLISH:
        return LanguageType.POLISH;
      default:
        return LanguageType.ENGLISH;
    }
  }
}
