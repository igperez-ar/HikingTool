// @flow

import I18n from 'react-native-i18n';
/* import es from './languages/es';
import en from './languages/en'; */

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true

// English language is the main language for fall back:
I18n.translations = {
  en: require('./languages/english.json'),
  es: require('./languages/es.json')
}

export default I18n;
