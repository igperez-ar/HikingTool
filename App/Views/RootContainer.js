import React, { Component } from 'react';
import { View, StatusBar, Image, PermissionsAndroid } from 'react-native';
import ReduxNavigation from '../Navigation/ReduxNavigation';
import { connect } from 'react-redux';
import StartupActions from '../Redux/StartupRedux';
import ReduxPersist from '../Config/ReduxPersist';

import MapboxGL from "@react-native-mapbox-gl/maps";
import FastImage from 'react-native-fast-image';
import weatherIcons from '../Images/Icons/WeatherIcons';
import redMarker from '../Images/Icons/marker-red.png';
import blueMarker from '../Images/Icons/marker-blue.png';
import TrailsJSON from '../Jsons/senderos-pn-tdf-es.json';

import I18n from '../I18n/i18n';

// Styles
import styles from './Styles/RootContainerStyles';

class RootContainer extends Component {

  componentDidMount () {

    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }

  async loadMap() {

    MapboxGL.setTelemetryEnabled(false);

    //progressListener = (offlineRegion, status) => console.log(offlineRegion, status);
    
    offlinePack = await MapboxGL.offlineManager.getPack('ParqueTDF');

    if (offlinePack == undefined) {
      //console.warn('Se eliminó');
      await MapboxGL.offlineManager.createPack({
        name: 'ParqueTDF',
        styleURL: 'mapbox://styles/senderos/ck1qwqq5f3zom1cnnju1xvqha',
        minZoom: 10,
        maxZoom: 20,
        bounds: [[-68.32, -54.741], [-68.61, -54.90]]
      }, null, null)
    }
  }

  loadImages() {

    //iconos del clima
    let uris = []
    for (var key in weatherIcons) {
      uris.push({
        uri: Image.resolveAssetSource(weatherIcons[key]).uri
      })
    }
    FastImage.preload(uris);

    //imágenes de flora
    uris = []
    for (var key in this.props.flora) {
      uris.push({
        uri: Image.resolveAssetSource(this.props.flora[key].photo).uri
      })
    }
    FastImage.preload(uris);

    //imágenes de especies
    uris = []
    for (var key in this.props.wildlife) {
      uris.push({
        uri: Image.resolveAssetSource(this.props.wildlife[key].photo).uri
      })
    }
    FastImage.preload(uris);

    //imágenes de puntos de interés
    uris = []
    for (var i = 0; i < this.props.interestPoints.features.length; i++) {
      uris.push({
        uri: Image.resolveAssetSource(this.props.interestPoints.features[i].properties.photo).uri
      })
    }
    FastImage.preload(uris);
 
    //imágenes de senderos
    uris = []
    for (var i = 0; i < TrailsJSON.features.length; i++) {
      uris.push({
        uri: TrailsJSON.features[i].properties.images
      })
    }
    FastImage.preload(uris);
    
    //iconos del mapa
    Image.prefetch(Image.resolveAssetSource(redMarker).uri);
    Image.prefetch(Image.resolveAssetSource(blueMarker).uri);
  }

  askPermissions() {

    PermissionsAndroid.requestMultiple(
      [
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
      ]
    );
  }

  render () {

    const { interestPoints, flora, wildlife } = this.props;
    I18n.locale = this.props.language;
    this.loadMap();
    this.loadImages();
    this.askPermissions();
    
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        <ReduxNavigation />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  language: state.settings.language,
  interestPoints: state.interestPoints.data,
  flora: state.species.floraENG,
  wildlife: state.species.wildlifeENG
});

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(RootContainer)


/* import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'

// Styles
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {
  componentDidMount () {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }

  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        <ReduxNavigation />
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapDispatchToProps)(RootContainer)
 */