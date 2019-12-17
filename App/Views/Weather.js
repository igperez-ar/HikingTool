import React, { Component } from 'react';
import { 
  Text, 
  View, 
  ScrollView,
  Image, 
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';

import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';
import I18n from '../I18n/i18n';

import WeatherActions from '../Redux/WeatherRedux';
import { connect } from 'react-redux';

import weatherIcons from '../Images/Icons/WeatherIcons';
import styles from './Styles/WeatherStyles';
import { primaryDark, secondaryLight } from '../global.styles.js';

class Weather extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <TouchableOpacity
          hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
          onPress={navigation.getParam('updateWeather')}
        >
          <Icon
            name="md-refresh"
            style={{ fontSize: 30, color: 'white', marginRight:25 }}
          />
        </TouchableOpacity>
      ),
    };
  };

  _updateWeather = () => {
    this.props.requestAPI();
  };
  
  constructor(props) {
    super(props);
    this.state = {
      currentDayTime: '',
    };
  }

  componentWillMount() {
    /* Esto permite que el boton del toolbar ejecute la función para actualizar la info */
    this.props.navigation.setParams({ updateWeather: this._updateWeather });

    //Precargar iconos
    const uris = [];
    for (var key in weatherIcons) {
      uris.push({
        uri: Image.resolveAssetSource(weatherIcons[key]).uri
      });
    };
    FastImage.preload(uris);

    //'Day' y 'Night' son dos valores necesarios para acceder a los datos.
    //En este caso decidí arbitrariamente que el día es desde 06AM hasta 21PM
    if (new Date().getHours() >= 6 && (new Date().getHours() < 21)) {
      this.setState({
        currentDayTime: 'Day'
      });
    } else {
      this.setState({
        currentDayTime: 'Night'
      });
    };
  }

  render () {
    const { nextDays, currentDay, date } = this.props;

    if ((Object.keys(currentDay).length == 0) && (nextDays.length == 0)) {
      return (
        <View style={{flex: 1, paddingTop: 50, backgroundColor: secondaryLight}}>
          <ActivityIndicator size='large'/>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <ScrollView>
            <View style={{ padding:10 }}>
              <View style={styles.card}>

                <View style={{ padding:10 }}>
                  <Text style={styles.titulo}>Ushuaia, TDF</Text>
                  <Divider style={{ backgroundColor: primaryDark, height:2, marginBottom:10 }} />
                  <Text style={{textAlign:"center", marginBottom:15, fontSize:16}}>{date.day} {I18n.t("of")} {I18n.t(date.month)} {date.hour}:{date.minutes}</Text>
                  <View style={[styles.rowContainer, {paddingHorizontal:30, marginBottom:30}]}>
                    <View style={{marginLeft:30}}>
                      <Text style={styles.max}>{Math.round((((currentDay.Temperature.Maximum.Value)-32)*(5/9))*10)/10}°C</Text>
                      <Text style={styles.min}>{Math.round((((currentDay.Temperature.Minimum.Value)-32)*(5/9))*10)/10}°C</Text>
                    </View>
                    <FastImage style={{ width: 90, height: 90 }} 
                            source={{priority: FastImage.priority.high},
                            weatherIcons[currentDay[this.state.currentDayTime].Icon]}/>
                  </View>  

                  {/* <Text style={{ alignSelf: 'center', fontStyle: 'italic', marginBottom: 15 }}>{currentDay.Night.ShortPhrase}</Text> */}
                  <View style={styles.infoRows}>
                    <Text style={{color:'black'}}>{I18n.t("wind")}:</Text>
                    <Text style={{color: 'black'}}>{currentDay.Night.Wind.Speed.Value}mi/h {currentDay.Night.Wind.Direction.English}</Text>
                  </View>
                  <Divider style={{backgroundColor: primaryDark, height:1, marginBottom: 6}} />
                  
                  <View style={styles.infoRows}>
                    <Text style={{color:'black'}}>{I18n.t("rainProb")}:</Text>
                    <Text style={{color: 'black'}}>{currentDay.Night.RainProbability}%</Text>
                  </View>
                  <Divider style={{backgroundColor: primaryDark, height:1, marginBottom: 6}} />

                  <View style={styles.infoRows}>
                    <Text style={{color:'black'}}>{I18n.t("snowProb")}:</Text>
                    <Text style={{color: 'black'}}>{currentDay.Night.SnowProbability}%</Text>
                  </View>
                  <Divider style={{backgroundColor: primaryDark, height:1, marginBottom: 6}} />

                  <View style={styles.infoRows}>
                    <Text style={{color:'black'}}>{I18n.t("iceProb")}:</Text>
                    <Text style={{color: 'black'}}>{currentDay.Night.IceProbability}%</Text>
                  </View>
                  <Divider style={{backgroundColor: primaryDark, height:1, marginBottom: 6}} />

                  <View style={styles.infoRows}>
                    <Text style={{color:'black', marginTop:8}}>{I18n.t("realFeel")}:</Text>
                    <View style={{alignItems:"flex-end"}}>
                      <Text style={{color: 'black'}}>{Math.round((((currentDay.RealFeelTemperature.Maximum.Value)-32)*(5/9))*10)/10}℃</Text>
                      <Text style={{color: 'grey'}}>{Math.round((((currentDay.RealFeelTemperature.Minimum.Value)-32)*(5/9))*10)/10}℃</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View>
                {
                  nextDays.map((item) =>{
                    return(
                    <View key={item.Date} style={styles.card}>
                      <View style={styles.nextDays}>
                        {/* <View> */}
                          <Text style={{ color: 'black', fontWeight: 'bold', fontSize:15, textAlignVertical:"center" }}>
                            {item.Date.substring(5,7)}/{item.Date.substring(8,10)}
                          </Text>
                          {/* <Text style={{color: 'grey'}}>
                            {I18n.t(item.Day.IconPhrase)}
                          </Text> */}
                        {/* </View>   */}
                        <View style={styles.rowContainer}>
                          <FastImage style={{width: 30, height: 30, marginTop: 5, marginRight: 15}} 
                                    source={{priority: FastImage.priority.high},
                                    weatherIcons[item.Day.Icon]}
                          />
                          <View style={{alignItems:"flex-end", width:35 }}>
                            <Text style={{color: 'black'}}>{Math.round((((item.Temperature.Minimum.Value)-32)*(5/9))*10)/10}°</Text>
                            <Text style={{color: 'grey'}}>{Math.round((((item.Temperature.Maximum.Value)-32)*(5/9))*10)/10}°</Text>
                          </View>
                        </View>  
                      </View>
                    </View>  
                    );
                  })
                }
              </View>  
            </View>
          </ScrollView>
        </View>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    nextDays: state.weather.nextDays,
    currentDay: state.weather.currentDay,
    date: state.weather.date,
  }
}

//Se utiliza para pedir de la API la info y almacenarla en store.
const mapDispatchToProps = (dispatch) => {
  return {
    requestAPI: () => { dispatch(WeatherActions.weatherRequest(null))}
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Weather);
