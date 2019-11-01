import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'

// Styles
import styles from './Styles/LaunchScreenStyles'

// Ejemplos de uso de plugins --- BORRAR - INICIO
import Config from 'react-native-config'
import DeviceInfo from 'react-native-device-info'
import { RectButton } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5Pro'
import { Image } from '../Components'
import Permissions from 'react-native-permissions'
import I18n from '../I18n'
import MapboxGL from '@react-native-mapbox-gl/maps';
MapboxGL.setAccessToken(Config.MAPBOX_GL_TOKEN);
import { RNCamera } from 'react-native-camera'
// Ejemplos de uso de plugins --- BORRAR - FIN

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.sampleContainers}>

            <Text>rn-config: {Config.APP_VERSION_CODE}</Text>

            <Text>rn-device-info: {DeviceInfo.getBrand()}</Text>

            <RectButton onPress={() => { console.warn('touched!') }} style={{ backgroundColor: 'aqua', padding: 10 }}>
              <Text>rn-gesture-handler</Text>
            </RectButton>

            <Text>rn-vector-icons with F5Pro <Icon name="alicorn" size={20} light color="red" /></Text>

            <Text>rn-fast-image: </Text>
            <Image source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }} style={{ width: 100, height:100 }}/>

            <RectButton
              onPress={() => {
                Permissions.check('camera').then(response => { console.warn(response) })
              }}
              style={{ backgroundColor: 'yellow', padding: 10 }}
            >
              <Text>rn-permissions: check-camera</Text>
            </RectButton>

            <Text>rn-localize + i18n-js</Text>
            <Text>getLocales: { JSON.stringify(I18n.RNLocalize.getLocales()) }</Text>
            <Text>Uso el predeterminado (es): {I18n.t('Hola mundo',)}</Text>
            <Text>Uso el idioma del OS: {I18n.t('Hola mundo', {locale: I18n.RNLocalize.getLocales()[0].languageCode})}</Text>
            <Text>Fuerzo inglés: {I18n.t('Hola mundo', {locale: 'en'})}</Text>
            <Text>Fuerzo español: {I18n.t('Hola mundo', {locale: 'es'})}</Text>

            <RectButton onPress={() => { this.props.navigation.navigate('ANALYTICS_TEST') }} style={{ backgroundColor: 'aqua', padding: 10 }}>
              <Text>navigate to test analytics</Text>
            </RectButton>

            <MapboxGL.MapView
              style={{ width: '100%', height: 400 }}
              styleURL={Config.MAPBOX_GL_STYLE_URL}
            />
            <RNCamera
              ref={ref => { this.camera = ref }}
              style={{height: 300, width: '100%'}}
              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.on}
            />

          </View>
        </ScrollView>
      </View>
    )
  }
}
