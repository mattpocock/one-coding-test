/*
 *
 * LanguageProvider reducer
 *
 */

import { DEFAULT_LOCALE } from 'utils/constants';

import { CHANGE_LOCALE } from './constants';

const initialState = {
  locale: DEFAULT_LOCALE,
};

function languageProviderReducer(
  state = initialState,
  action: { type: string; locale: any },
) {
  switch (action.type) {
    case CHANGE_LOCALE:
      return { ...state, locale: action.locale };
    default:
      return state;
  }
}

export default languageProviderReducer;
