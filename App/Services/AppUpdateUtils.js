import codePush from 'react-native-code-push'
import { AppUpdateTypes } from '../Redux/AppUpdateRedux'

export function codepushStatusListener(status) {
  if (global.store) {
    switch (status) {
      case codePush.SyncStatus.DOWNLOADING_PACKAGE:
      case codePush.SyncStatus.INSTALLING_UPDATE:
        global.store.dispatch({type: AppUpdateTypes.APP_UPDATE_IS_UPDATING })
        break
      default:
        global.store.dispatch({type: AppUpdateTypes.APP_UPDATE_IS_NOT_UPDATING })
    }
  }
}
