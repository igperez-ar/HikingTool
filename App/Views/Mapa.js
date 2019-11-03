import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  Button,
  PermissionsAndroid,
  TouchableOpacity,
  Picker,
  Image
} from 'react-native';
import MapboxGL from "@react-native-mapbox-gl/maps";
import { Card } from 'react-native-elements';
import I18n from '../I18n/i18n';
import OptionIcon from 'react-native-vector-icons/Ionicons'

import Marker from '../Images/Icons/map-marker.png';

import SenderosGeoJSON from '../Geo/senderos-pn-tdf.json';
import PuntosInteresGeoJSON from '../Geo/puntos_interes-pn-tdf.json';

const windowWidth= Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

MapboxGL.setAccessToken("pk.eyJ1Ijoic2VuZGVyb3MiLCJhIjoiY2swdmR3OGgzMHk0ODNtcXM5ZzVzbng1aSJ9.aPqBLjTycTdR-4gMbpSM8w");

export default class Map extends Component {

  constructor(props){
    super(props);
    this.onMapPress = this.onMapPress.bind(this); 
    this.onSourceLayerPress = this.onSourceLayerPress.bind(this);
    this.onFiltersBtnPress = this.onFiltersBtnPress.bind(this);
    this.updateIndex = this.updateIndex.bind(this);
    this.state = {
      showTrails: true,
      showInterestPoints: true,
      showCard: false,
      cardData: null,
      showFilters: false,
      selectedIndex: 2,
      trail:'Todos',
      layer: 'Todas'
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

  updateIndex(selectedIndex) {
    switch (selectedIndex) {
      case 'Todas':
        this.setState({
          showTrails: true,
          showInterestPoints: true,
          layer: selectedIndex
        })
      break;
      case 'Senderos':
        this.setState({
          showTrails: false,
          showInterestPoints: false,
          layer: selectedIndex
        })
      break;
      case 'Puntos de Interes':
        this.setState({
          showTrails: true,
          showInterestPoints: true,
          layer: selectedIndex
        })
      break;
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

  onFiltersBtnPress() {
    this.setState(prevState => ({
      showFilters: !prevState.showFilters
    }));
  }

  renderCard() {
    if (this.state.showCard)
      return ( 
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
        </Card> 
      );

    return null;
  }

  renderFilters() {
    if (this.state.showFilters)
      return (
          <View style={styles.filtersContainer}>
            <TouchableOpacity
              style={styles.closeFiltersButton}
              hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
              onPress={this.onFiltersBtnPress}
            >
              <Text>X</Text>
            </TouchableOpacity>
            <View style={{margin: 10, flex: 1}}>
              <Text style={styles.titulo}>Filtros</Text>
              <ScrollView>
                <Text style={{paddingTop: 30}}>Senderos:</Text>
                <Picker
                  selectedValue={this.state.trail}
                  style={{height: 50, width: '90%'}}
                  onValueChange={(itemValue) =>
                    this.setState({showTrails: true, trail: itemValue, layer: 'Senderos', showInterestPoints: false})
                  }>
                  <Picker.Item label="Todos" value="Todos" />
                  {
                    SenderosGeoJSON.features.map((item) =>{
                      return(
                      <Picker.Item  label={item.properties.Name} value={item.properties.Name} key={null}/>
                      );
                    })
                  }
                </Picker>
                <Text style={{paddingTop: 30}}>Capas:</Text>
                <Picker
                  selectedValue={this.state.layer}
                  style={{height: 50, width: '90%'}}
                  onValueChange={(itemValue) => this.updateIndex(itemValue)}>
                  <Picker.Item label="Todas" value="Todas"/>
                  <Picker.Item label="Senderos" value="Senderos"/>
                  <Picker.Item label="Puntos de Interes" value="Puntos de Interes"/>
                </Picker>
              </ScrollView>
            </View>
          </View>
      );
    return null;
  }

  render() {
    return (
      <View style={styles.view}>
        <MapboxGL.MapView
          onPress={this.onMapPress}
          style={styles.map}
          styleURL={'mapbox://styles/senderos/ck1qwqq5f3zom1cnnju1xvqha'}
        >
          <MapboxGL.UserLocation visible={true}/>
          <MapboxGL.Camera
            minZoomLevel={10}
            maxZoomLevel={20}
            zoomLevel={10}
            /* followUserLocation={true} */
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
              filter={this.state.showTrails ? (this.state.trail == 'Todos' ? ['all'] : ['==', 'Name', this.state.trail]) : ['==', 'Name', 'NoName']}
            />
          </MapboxGL.ShapeSource>
          <MapboxGL.ShapeSource 
            id="PuntosInteresSource"
            shape={PuntosInteresGeoJSON}
            onPress={this.onSourceLayerPress}
          >
            <MapboxGL.SymbolLayer
              id="puntos_interes-pn-tdf"
              style={{iconImage: Marker, iconSize: 0.05, iconAllowOverlap: false,
              }}
              filter={this.state.showInterestPoints ? ['all'] : ['==', 'Name', 'NoName']}
            />
          </MapboxGL.ShapeSource>

        </MapboxGL.MapView>

        {this.renderCard()}

        <TouchableOpacity 
          style={styles.optionsButton}
          onPress={this.onFiltersBtnPress}
        >
          <OptionIcon name="md-options" style={{ fontSize: 35 }}/>
        </TouchableOpacity>

        {this.renderFilters()}

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
