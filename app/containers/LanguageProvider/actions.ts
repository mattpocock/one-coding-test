/*
 *
 * LanguageProvider actions
 *
 */

import { CHANGE_LOCALE } from './constants';

export function changeLocale(languageLocale: any) {
  return {
    type: CHANGE_LOCALE,
    locale: languageLocale,
  };
}
