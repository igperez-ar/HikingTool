import './App/Config/ReactotronConfig'
import { AppRegistry } from 'react-native'
import { bgMessaging } from './App/Services/FCMService'
import App from './App/Containers/App'

AppRegistry.registerComponent('PanalDevApp', () => App)

AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => bgMessaging)
