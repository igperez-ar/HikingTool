/**
 * Ejemplo de integración:
 * https://github.com/react-native-community/react-native-localize/blob/master/example/src/SyncExample.js
 */
import * as RNLocalize from 'react-native-localize'
import I18n from 'i18n-js'

const initLocalization = () => {
  // Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
  I18n.fallbacks = true

  I18n.translations = {
    es: require('./languages/es.json'),
    en: require('./languages/en.json'),
  }
  I18n.defaultLocale = "pt-BR";
  I18n.locale = "pt-BR";
  I18n.defaultLocale = 'es'
}

// This function is a wrapper to avoid exception wich leads in a crash
const translateOrFallback = (initialMsg, options) => {
  // We tried to translate something else than a string
  // The native I18n function will simply crash instead of rejecting the attempt with an error message
  if (typeof initialMsg !== 'string') {
    __DEV__ &&
    console.log(
      `I18n: you must give a string to translate instead of "${typeof initialMsg}"`
    )

    return '' // We don't return any message as we don't know what to send
  }

  let localMsg = I18n.t(initialMsg, options)

  // The translation does not exist, the default message is not very sexy
  // Instead we return the message we tried to translate
  const missingTranslationRegex = /^\[missing ".*" translation\]$/
  if (missingTranslationRegex.test(localMsg)) {
    __DEV__ &&
    console.log(
      `translation "${initialMsg}" does not exists in translations files`
    )

    return initialMsg
  }

  return localMsg
}

export default {
  initLocalization,
  I18n,
  t: translateOrFallback,
  RNLocalize,
}
