import firebase from 'react-native-firebase'

function enableCollection() {
  firebase.analytics().setAnalyticsCollectionEnabled(true)
}


async function logScreenEvent(screenName) {
  firebase.analytics().logEvent(`PAGE_${screenName}`, {})
}

export default { logScreenEvent, enableCollection }
