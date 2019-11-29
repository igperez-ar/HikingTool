import React, { Component } from 'react';
import { 
  Text, 
  View, 
  ScrollView,
  Image, 
  ImageBackground
} from 'react-native';

import { Divider } from 'react-native-elements';
import FastImage from 'react-native-fast-image';

import weatherJSON from '../Jsons/weather-data.json';

import weatherIcons from '../Images/Icons/WeatherIcons';
import styles from './Styles/WeatherStyles';

class Weather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      currentDayTime: '',
      currentDay: {},
      nextDays: []
    };
  }

  componentDidMount() {

    //Precargar iconos
    const uris = []
    for (var key in weatherIcons) {
      uris.push({
        uri: Image.resolveAssetSource(weatherIcons[key]).uri
      })
    }
    FastImage.preload(uris);

    //'Day' y 'Night' son dos valores necesarios para acceder a los datos.
    //En este caso decidí arbitrariamente que el día es desde 06AM hasta 21PM
    if (new Date().getHours() >= 6 && (new Date().getHours() < 21)) {
      this.setState({
        currentDayTime: 'Day'
      })
    } else {
      this.setState({
        currentDayTime: 'Night'
      })
    }
    this.setState({
      currentDay: weatherJSON.DailyForecasts[0],
      nextDays: [
        weatherJSON.DailyForecasts[1], 
        weatherJSON.DailyForecasts[2],
        weatherJSON.DailyForecasts[3],
        weatherJSON.DailyForecasts[4]
      ],
      isLoading: false
    })
  }

  render () {

    if (this.state.isLoading) {
      return null
    } else {
      return (
        <View style={{flex:1, backgroundColor: 'rgba(145, 200, 210, 0.6)'}}>
        {/* <ImageBackground
          source={require('../Images/partly-cloudy.jpg')}
          imageStyle={{resizeMode: "cover", opacity:1}}
          style={{width: '100%', height: '100%'}}
        > */}
          <View style={styles.container}>
            <ScrollView>
              <View style={{ padding: 10 }}>
                <View style={[styles.actualDay, {backgroundColor: 'rgba(255, 255, 255, 0.7)', marginBottom:3}]}>
                  <View style={{ padding: 10 }}>
                    <Text style={styles.titulo}>Ushuaia, TDF</Text>
                    <Divider style={{ backgroundColor: 'grey', height: 2, marginBottom: 20 }} />
                    <View style={[styles.rowContainer, {paddingHorizontal:30, marginBottom:10}]}>
                      <View style={{marginLeft:30}}>
                        <Text style={styles.max}>{Math.round((((this.state.currentDay.Temperature.Maximum.Value)-32)*(5/9))*10)/10}°C</Text>
                        <Text style={styles.min}>{Math.round((((this.state.currentDay.Temperature.Minimum.Value)-32)*(5/9))*10)/10}°C</Text>
                      </View>
                      <FastImage style={{ width: 90, height: 90 }} 
                              source={{priority: FastImage.priority.high},
                              weatherIcons[this.state.currentDay[this.state.currentDayTime].Icon]}/>
                      {/* <View style={{alignItems: 'center'}}>
                      </View> */}
                    </View>  
                    <Text style={{ alignSelf: 'center', fontStyle: 'italic', marginBottom: 15 }}>{this.state.currentDay.Night.ShortPhrase}</Text>
                    <View style={styles.infoRows}>
                      <Text style={{color:'black'}}>Wind:</Text>
                      <Text style={{color: 'black'}}>{this.state.currentDay.Night.Wind.Speed.Value}mi/h {this.state.currentDay.Night.Wind.Direction.English}</Text>
                    </View>
                    <Divider style={{ height:1, marginBottom: 6}} />
                    <View style={styles.infoRows}>
                      <Text style={{color:'black'}}>Rain Probability:</Text>
                      <Text style={{color: 'black'}}>{this.state.currentDay.Night.RainProbability}%</Text>
                    </View>
                    <Divider style={{ height:1, marginBottom: 6}} />
                    <View style={styles.infoRows}>
                      <Text style={{color:'black'}}>Snow Probability:</Text>
                      <Text style={{color: 'black'}}>{this.state.currentDay.Night.SnowProbability}%</Text>
                    </View>
                    <Divider style={{ height:1, marginBottom: 6}} />
                    <View style={styles.infoRows}>
                      <Text style={{color:'black'}}>Ice Probability:</Text>
                      <Text style={{color: 'black'}}>{this.state.currentDay.Night.IceProbability}%</Text>
                    </View>
                    <Divider style={{ height:1, marginBottom: 6}} />
                    <View style={styles.infoRows}>
                      <Text style={{color:'black', marginTop:8}}>Real Feel Temp:</Text>
                      <View style={{alignItems:"flex-end"}}>
                        <Text style={{color: 'black'}}>{Math.round((((this.state.currentDay.RealFeelTemperature.Maximum.Value)-32)*(5/9))*10)/10}℃</Text>
                        <Text style={{color: 'grey'}}>{Math.round((((this.state.currentDay.RealFeelTemperature.Minimum.Value)-32)*(5/9))*10)/10}℃</Text>
                      </View>
                    </View>
                  </View>
                </View>
                {/* <Divider style={{height:1, marginTop:10}}></Divider> */}
                <View>
                  {
                    this.state.nextDays.map((item) =>{
                      return(
                      <View key={item.Date} style={{backgroundColor: 'rgba(255, 255, 255, 0.7)', marginVertical:3}}>
                        <View style={styles.nextDays}>
                          <View>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>
                              {item.Date.substring(5,7)}/{item.Date.substring(8,10)}
                            </Text>
                            <Text style={{color: 'grey'}}>
                              {item.Day.IconPhrase}
                            </Text>
                          </View>  
                          <View style={styles.rowContainer}>
                            <FastImage style={{width: 30, height: 30, marginTop: 5, marginRight: 15}} 
                                      source={{priority: FastImage.priority.high},
                                      weatherIcons[item.Day.Icon]}
                            />
                            <View style={{ alignItems:"flex-end" }}>
                              <Text style={{color: 'black'}}>{Math.round((((item.Temperature.Minimum.Value)-32)*(5/9))*10)/10}°</Text>
                              <Text style={{color: 'grey'}}>{Math.round((((item.Temperature.Maximum.Value)-32)*(5/9))*10)/10}°</Text>
                            </View>
                          </View>  
                        </View>
                        {/* <Divider style={{height:1}}></Divider> */}
                      </View>  
                      );
                    })
                  }
                </View>  
              </View>
            </ScrollView>
          </View>
        {/* </ImageBackground> */}
      </View>
      )
    }
  }
}

export default Weather;


/* import React, { Component } from 'react'
import {
  View
} from 'react-native'

class Weather extends Component {

  render() {
    return (
      <View>
    
      </View>
    );
  }
}

export default Weather;

                  <View key={item.Date} style={styles.nextDays}>
                    <View style={styles.rowContainer}>
                      <FastImage style={{width: 30, height: 30, marginTop: 10}} 
                                source={{priority: FastImage.priority.high},
                                weatherIcons[item.Day.Icon]}
                      />
                      <Text style={{marginLeft: 7, marginTop: 14, fontWeight: 'bold'}}>{item.Date.substring(5,7)}/{item.Date.substring(8,10)}</Text>
                    </View>
                    <View style={styles.rowNextDay}>
                      <Text style={{color: '#0074D9'}}>{Math.round((((item.Temperature.Minimum.Value)-32)*(5/9))*10)/10}℃</Text>
                      <Text style={{color: 'black'}}>  -  </Text>
                      <Text style={{color: '#FF4136'}}>{Math.round((((item.Temperature.Maximum.Value)-32)*(5/9))*10)/10}℃</Text>
                    </View>
                  </View>


*/
