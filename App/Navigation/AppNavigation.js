import { createStackNavigator, createAppContainer } from 'react-navigation'
import AnalyticsTestScreen from '../Containers/AnalyticsTestScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  'ANALYTICS_TEST': { screen: AnalyticsTestScreen },
  'INICIO': { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'INICIO',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
