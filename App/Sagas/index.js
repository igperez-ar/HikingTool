import { takeLatest, all, spawn } from 'redux-saga/effects'
import DebugConfig from '../Config/DebugConfig'
import codePush from 'react-native-code-push'
import codePushSaga from 'react-native-code-push-saga'
import I18n from '../I18n'
import { codepushStatusListener } from '../Services/AppUpdateUtils'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    //
    // CODEPUSH
    //
    spawn(codePushSaga, {
      syncOptions: {
        updateDialog: {
          descriptionPrefix: I18n.t('codepush.descriptionPrefix'),
          mandatoryContinueButtonLabel: I18n.t('codepush.mandatoryContinueButtonLabel'),
          mandatoryUpdateMessage: I18n.t('codepush.mandatoryUpdateMessage'),
          optionalIgnoreButtonLabel: I18n.t('codepush.optionalIgnoreButtonLabel'),
          optionalInstallButtonLabel: I18n.t('codepush.optionalInstallButtonLabel'),
          optionalUpdateMessage: I18n.t('codepush.optionalUpdateMessage'),
          title: I18n.t('codepush.title'),
        },
        installMode: codePush.InstallMode.IMMEDIATE,
        mandatoryInstallMode: codePush.InstallMode.IMMEDIATE,
      },
      codePushStatusDidChange: codepushStatusListener
    }),

    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
  ])
}
