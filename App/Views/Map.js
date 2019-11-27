import React, { Component } from 'react'
import { View } from 'react-native-animatable'
import {
  Button,
  PermissionsAndroid,
  TouchableOpacity,
  Picker,
  Text,
  ScrollView,
  Image
} from 'react-native';
import MapboxGL from "@react-native-mapbox-gl/maps";
MapboxGL.setAccessToken("pk.eyJ1Ijoic2VuZGVyb3MiLCJhIjoiY2swdmR3OGgzMHk0ODNtcXM5ZzVzbng1aSJ9.aPqBLjTycTdR-4gMbpSM8w");
import { Divider } from 'react-native-elements';
import I18n from '../I18n/i18n';
import styles from './Styles/MapStyles'

import OptionIcon from 'react-native-vector-icons/Ionicons'
import Marker from '../Images/Icons/map-marker.png';

import SenderosGeoJSON from '../Jsons/senderos-pn-tdf.json';
/* import SenderosGeoJSON from '../Jsons/newtrails-pn-tdf.json'; */
import PuntosInteresGeoJSON from '../Jsons/puntos-interes-pn-tdf.json';


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
      trail: 0,
      layer: 0
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
    switch(selectedIndex) {
      case 0:
        this.setState({
          showTrails: true,
          showInterestPoints: true,
          layer: selectedIndex
        });
        break;
      case 1:
        this.setState({
          showTrails: true,
          showInterestPoints: false,
          layer: selectedIndex
        });
        break;
      case 2:
        this.setState({
          showTrails: false,
          showInterestPoints: true,
          layer: selectedIndex
        });
        break;
    }
  }

  onMapPress() {
    this.setState({
      showCard: false,
      showFilters: false
    });
  }

  onSourceLayerPress(e) {
    const feature = e.nativeEvent.payload;
    this.setState({
      cardData: feature,
      showCard: true,
      showFilters: false
    });
  }

  onFiltersBtnPress() {
    this.setState(prevState => ({
      showFilters: !prevState.showFilters,
      showCard: false
    }));
  }

  renderCard() {
    if (this.state.showCard)
      return ( 
        <View animation="slideInUp" style={styles.detailsContainer}>
          <TouchableOpacity
            style={styles.closeFiltersButton}
            hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
            onPress={this.onFiltersBtnPress}
          >
            <OptionIcon name="md-close" style={{ fontSize: 35 }}/>
          </TouchableOpacity> 
          
          <Text style={styles.detailsTitle}>
            {this.state.cardData.properties.Name}
          </Text>
          <Divider style={styles.divider}/>
          <Image
            style={styles.image}
            source={{uri: 'https://placeimg.com/640/480/nature'}}
          />
          <Button 
            title={I18n.t('moreInfo')}
          />
        </View>
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
              <OptionIcon name="md-close" style={{ fontSize: 35 }}/>
            </TouchableOpacity>
            <Text style={styles.filtersTitle}>Filtros</Text>
            <Divider style={styles.divider}/>
            <View style={{alignSelf: "center", paddingVertical:'9%'}}>
              <Text>Senderos:</Text>
              <View style={styles.picker}>
                <Picker
                  selectedValue={this.state.trail}
                  onValueChange={(itemValue) =>
                    this.setState({showTrails: true, trail: itemValue})
                  }>
                  <Picker.Item label="Todos" value={0} />
                  {
                    SenderosGeoJSON.features.map((item) =>{
                      return(
                      <Picker.Item label={item.properties.name} value={item.properties.id} key={null}/>
                      );
                    })
                  }
                </Picker>
              </View>
              <Text style={{paddingTop: 30}}>Capas:</Text>
              <View style={styles.picker}>
                <Picker
                  selectedValue={this.state.layer}
                  onValueChange={(itemValue) => this.updateIndex(itemValue)}>
                  <Picker.Item label="Todas" value={0}/>
                  <Picker.Item label="Senderos" value={1}/>
                  <Picker.Item label="Puntos de Interes" value={2}/>
                </Picker>
              </View>
            </View>
          </View>
      );
    return null;
  }

  render() {
    return (
      <View style={styles.container}>
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
              filter={this.state.showTrails ? (this.state.trail == 0 ? ['all'] : ['==', 'id', this.state.trail]) : ['==', 'id', 0]}
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
          style={[styles.optionsButton, {bottom: this.state.showFilters > this.state.showCard ? 310 : 
                                                 this.state.showCard ? 250 : 15}]}
          onPress={this.onFiltersBtnPress}
        >
          <OptionIcon name="md-options" style={{ fontSize: 35 }}/>
        </TouchableOpacity>

        {this.renderFilters()}

      </View>
    );
  }
}

