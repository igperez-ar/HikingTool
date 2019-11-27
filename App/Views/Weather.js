import React, { Component } from 'react';
import { 
  Text, 
  View, 
  ScrollView, 
  Button, 
  Image 
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
    /* console.warn(uris); */
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
        <View style={styles.container}>
          <ScrollView>
            <View style={{ padding: 10 }}>
              <View style={styles.actualDay}>
                <View style={{ padding: 10 }}>
                  <Text style={styles.titulo}>Ushuaia, TDF</Text>
                  <Divider style={{ backgroundColor: 'black', height: 2 }} />
                  <Text style={{ alignSelf: 'center', paddingVertical: 10 }}>Today</Text>
                  <View style={styles.tempValuesContainer}>
                    <Text style={[styles.tempValues, {color: '#0074D9'}]}>{Math.round((((this.state.currentDay.Temperature.Minimum.Value)-32)*(5/9))*10)/10}℃</Text>
                    <Text style={[styles.tempValues, {color: 'black'}]}>    -    </Text>
                    <Text style={[styles.tempValues, { color: '#FF4136' }]}>{Math.round((((this.state.currentDay.Temperature.Maximum.Value)-32)*(5/9))*10)/10}℃</Text>
                  </View>
                  <View style={{alignItems: 'center'}}>
                    <FastImage style={{ width: 75, height: 75 }} 
                            source={{priority: FastImage.priority.high},
                            weatherIcons[this.state.currentDay[this.state.currentDayTime].Icon]}/>
                  </View>
                  <Text style={{ alignSelf: 'center', fontStyle: 'italic', paddingBottom: 10 }}>{this.state.currentDay.Night.ShortPhrase}</Text>
                  <View style={styles.rowContainer}>
                    <Text>Wind:</Text>
                    <Text>{this.state.currentDay.Night.Wind.Speed.Value}mi/h {this.state.currentDay.Night.Wind.Direction.English}</Text>
                  </View>
                  <Divider style={{ backgroundColor: 'black', marginBottom: 6}} />
                  <View style={styles.rowContainer}>
                    <Text>Rain Probability:</Text>
                    <Text>{this.state.currentDay.Night.RainProbability}%</Text>
                  </View>
                  <Divider style={{ backgroundColor: 'black', marginBottom: 6}} />
                  <View style={styles.rowContainer}>
                    <Text>Snow Probability:</Text>
                    <Text>{this.state.currentDay.Night.SnowProbability}%</Text>
                  </View>
                  <Divider style={{ backgroundColor: 'black', marginBottom: 6}} />
                  <View style={styles.rowContainer}>
                    <Text>Ice Probability:</Text>
                    <Text>{this.state.currentDay.Night.IceProbability}%</Text>
                  </View>
                <Divider style={{ backgroundColor: 'black', marginBottom: 6}} />
                  <View style={styles.rowContainer}>
                    <Text>Real Feel Temp:</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{color: '#0074D9'}}>{Math.round((((this.state.currentDay.RealFeelTemperature.Minimum.Value)-32)*(5/9))*10)/10}℃</Text>
                      <Text style={{color: 'black'}}>  -  </Text>
                      <Text style={{color: '#FF4136'}}>{Math.round((((this.state.currentDay.RealFeelTemperature.Maximum.Value)-32)*(5/9))*10)/10}℃</Text>
                    </View>
                  </View>
                </View>
              </View>
              {
                this.state.nextDays.map((item) =>{
                  return(
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
                  );
                })
              }
            </View>
          </ScrollView>
          <View style={styles.btnSenderos}>
            <Button 
              title="Ver senderos"
              onPress={() => this.props.navigation.navigate('NavScreen2')}
            />
          </View>
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

export default Weather; */
