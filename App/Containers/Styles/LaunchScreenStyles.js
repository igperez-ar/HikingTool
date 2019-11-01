import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  sampleContainers: {
    marginTop: Metrics.statusBarHeightIgnoreAndroid,
    padding: Metrics.baseMargin
  }
})
