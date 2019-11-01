import React, { PureComponent } from 'react'
import { Alert, Platform, Linking } from 'react-native'
import firebase from 'react-native-firebase'
import Config from 'react-native-config'

class FCMService extends PureComponent {
  _onTokenRefreshListener = null;
  _onMessageListener = null;
  _onNotificationListener = null;
  _onNotificationOpenedListener = null;
  _onNotificationDisplayedListener = null;

  async _manageSubscription () {
    // si la app no tiene configuración simplemente lo subscribimos
    firebase.messaging().subscribeToTopic(Config.NOTIFICATION_TOPIC)
  }

  _displayNotification = (notification) => {
    console.log('_displayNotification', notification)

    let buttons = [{ text: 'Cerrar', style: 'cancel' }]
    if (notification.data.btn_text) {
      buttons.push({
        text: notification.data.btn_text,
        onPress: () => {
          let url = Platform.OS === 'ios' ? notification.data.url_ios : notification.data.url_android
          Linking.openURL(url)
        }
      })
    }

    if (notification.data.title) {
      Alert.alert(notification.data.title, notification.data.message, buttons, { cancelable: false })
    }
  }

  _initChannels = () => {
    // Build a channel
    const channel = new firebase.notifications.Android.Channel(
      'MAIN_CHANNEL',
      'Canal principal',
      firebase.notifications.Android.Importance.Max
    ).setDescription('Canal principal')

    // Create the channel
    firebase.notifications().android.createChannel(channel)
  }

  async componentDidMount () {
    try {
      const enabled = await firebase.messaging().hasPermission()

      if (!enabled) {
        await firebase.messaging().requestPermission()
      }

      // this._initChannels()

      const fcmToken = await firebase.messaging().getToken()
      if (fcmToken) {
        console.log('Has Token', fcmToken)
      } else {
        console.log('No Token')
      }

      this._onTokenRefreshListener = firebase.messaging()
        .onTokenRefresh(fcmToken => {
          console.log('onTokenRefresh', fcmToken)
          // Process your token as required
        })

      //
      // Data only msg
      //
      // Android: foreground ... background and closed   handled by bgMessaging
      // iOS: foreground, background (if content_available=true), closed (cant)
      this._onMessageListener = firebase.messaging().onMessage((message) => {
        console.log('onMessage', message)
        processDataMsg(message)
      })

      //
      // Notifications
      //

      // Android: foreground
      // iOS: foreground
      this._onNotificationListener = firebase.notifications()
        .onNotification((notification) => {
          console.log('onNotification', notification)
          this._displayNotification(notification)
        })

      // Android: background
      // iOS: background
      this._onNotificationOpenedListener = firebase.notifications()
        .onNotificationOpened((notificationTray) => {
          console.log('onNotificationOpened', notificationTray)
          this._displayNotification(notificationTray.notification)
        })

      // iOS: background (if content_available=true)
      this._onNotificationDisplayedListener = firebase.notifications()
        .onNotificationDisplayed((notification) => {
          console.log('onNotificationDisplayed', notification)
          this._displayNotification(notification)
        })

      // Android: closed
      // iOS: closed
      firebase.notifications().getInitialNotification()
        .then((notificationWrapper) => {
          console.log('getInitialNotification', notificationWrapper)
          if (notificationWrapper) {
            this._displayNotification(notificationWrapper.notification)
          }
        })

      this._manageSubscription()
    } catch (error) {
      console.log('Error initializing notifications', error)
    }
  }

  componentWillUnmount () {
    if (this._onTokenRefreshListener !== null) {
      this._onTokenRefreshListener()
    }

    if (this._onMessageListener !== null) {
      this._onMessageListener()
    }

    if (this._onNotificationListener !== null) {
      this._onNotificationListener()
    }

    if (this._onNotificationOpenedListener !== null) {
      this._onNotificationOpenedListener()
    }

    if (this._onNotificationDisplayedListener !== null) {
      this._onNotificationDisplayedListener()
    }
  }

  render () {
    return this.props.children ? this.props.children : null
  }
}

async function bgMessaging(message) {
  // handle your message
  console.log('bgMessaging', message)

  processDataMsg(message)

  return Promise.resolve()
}

function processDataMsg(message) {
  // do something
}

async function displayLocalNotification(title, body) {
  console.log('displayLocalNotification')
  try {
    // Build notification
    const notification = new firebase.notifications.Notification()
      .setNotificationId(new Date().getTime() + '')
      .setTitle(title)
      .setBody(body)

    notification.android.setChannelId('test-channel')

    await firebase.notifications().displayNotification(notification)
  } catch (error) {
    console.log('Cant display local notification', error)
  }
}

export default FCMService
export { bgMessaging, displayLocalNotification }
