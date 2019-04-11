import { createSelector } from 'reselect';
import GlobalState from 'utils/types/GlobalState';

/**
 * Direct selector to the languageToggle state domain
 */
const selectLanguage = (state: GlobalState) => state.language;

/**
 * Select the language locale
 */

const makeSelectLocale = () =>
  createSelector(selectLanguage, languageState => languageState.locale);

export { selectLanguage, makeSelectLocale };
