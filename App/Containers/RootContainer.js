import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import I18n from '../I18n'
import { ProgressDialog } from 'react-native-simple-dialogs'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'
import FCMService from '../Services/FCMService'
import AnalyticsService from '../Services/AnalyticsService'
import { AppUpdateSelectors } from '../Redux/AppUpdateRedux'

// Styles
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {
  constructor(props) {
    super(props)
    AnalyticsService.enableCollection()
  }

  componentDidMount () {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }

    SplashScreen.hide()
  }

  render () {
    return (
      <FCMService>
        <View style={styles.applicationView}>
          <StatusBar />
          <ReduxNavigation />
          <ProgressDialog visible={this.props.updating} message={I18n.t('codepush.updating')} />
        </View>
      </FCMService>
    )
  }
}

const mapStateToProps = state => {
  return {
    updating: AppUpdateSelectors.isUpdating(state),
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
