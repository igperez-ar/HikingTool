import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  Button,
  PermissionsAndroid,
  Image
} from 'react-native';
import MapboxGL from "@react-native-mapbox-gl/maps";
import { Card } from 'react-native-elements'
import I18n from '../I18n/i18n'

import SenderosGeoJSON from '../Geo/senderos-pn-tdf.json'

const windowWidth= Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

MapboxGL.setAccessToken("pk.eyJ1Ijoic2VuZGVyb3MiLCJhIjoiY2swdmR3OGgzMHk0ODNtcXM5ZzVzbng1aSJ9.aPqBLjTycTdR-4gMbpSM8w");

export default class Map extends Component {

  constructor(props){
    super(props);
    this.onMapPress = this.onMapPress.bind(this); 
    this.onSourceLayerPress = this.onSourceLayerPress.bind(this);
    this.state = {
      showCard: false,
      cardData: null
    };
  }

  async componentDidMount() {
    //Bloque para pedir acceso GPS. Falta verificarlo.
    PermissionsAndroid.requestMultiple(
      [PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION],
      {
        title: 'Give Location Permission',
        message: 'App needs permission to find and show your position.'
    })
    .then(granted => {
        //console.warn(granted);
        resolve();

    }).catch(error => {
        //console.warn(error);
        //reject();
    });

    MapboxGL.setTelemetryEnabled(false);

    progressListener = (offlineRegion, status) => console.log(offlineRegion, status);

    offlinePack = await MapboxGL.offlineManager.getPack('ParqueTDF');

    if (offlinePack == undefined) {
      await MapboxGL.offlineManager.createPack({
        name: 'ParqueTDF',
        styleURL: 'mapbox://styles/senderos/ck1qwqq5f3zom1cnnju1xvqha',
        minZoom: 10,
        maxZoom: 20,
        bounds: [[-68.435974, -54.795375], [-68.620916, -54.916526]]
      }, progressListener, null)
    }
  }

  onMapPress() {
    this.setState({
      showCard: false
    });
  }

  onSourceLayerPress(e) {
    const feature = e.nativeEvent.payload;
    this.setState({
      cardData: feature,
      showCard: true
    });
  }

  render() {
    return (
      <View style={styles.view}>
        <MapboxGL.MapView
          onPress={this.onMapPress}
          style={styles.map}
          styleURL={'mapbox://styles/senderos/ck1qwqq5f3zom1cnnju1xvqha'}
        >
          {/* <MapboxGL.UserLocation visible={true}/> */}
          <MapboxGL.Camera
            minZoomLevel={10}
            maxZoomLevel={20}
            zoomLevel={10}
            followUserLocation={true}
            centerCoordinate={[-68.500416, -54.820684]}
            maxBounds={{ne: [-68.435974, -54.795375], sw: [-68.620916, -54.916526]}}
          />
          <MapboxGL.ShapeSource 
            id="senderosSource"
            shape={SenderosGeoJSON}
            onPress={this.onSourceLayerPress}
          >
            <MapboxGL.LineLayer
              id="senderos-pn-tdf"
              style={{ lineColor: 'brown', lineWidth: 3, visibility: 'visible' }}
            />
          </MapboxGL.ShapeSource>
        </MapboxGL.MapView>

        {this.state.showCard ? (
          <Card 
            title={this.state.cardData.properties.Name} 
            containerStyle={styles.card}
          >
            <Image
              style={styles.image}
              source={{uri: 'https://placeimg.com/640/480/nature'}}
            />
            <Button 
              title={I18n.t('moreInfo')}
              //todavía sin funcionalidad
            />
          </Card> )
          : null
        }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  card: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    width: '95%'
  },
  image: {
    width: '100%',
    height: 100,
    marginBottom: 20
  },
  map: {
    width: '100%',
    height: '100%',
  },
  header1: {
    fontSize: 24,
    marginBottom: '20%',
  },
  text: {
    fontSize: 20,
    width: '70%',
    textAlign: 'center',
    lineHeight: 30,
    marginBottom: '20%',
  },
});
