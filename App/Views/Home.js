import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from './Styles/HomeStyles';
import { connect } from 'react-redux';
import I18n from '../I18n/i18n';
import { View } from 'react-native-animatable';
import { Divider, Card, Badge } from 'react-native-elements';
import TrailsJSON from '../Jsons/senderos-pn-tdf-en';
import Icon from 'react-native-vector-icons/FontAwesome5';

const popularIndex = [1,2,6];

class Home extends Component  {

  /* static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    return {
        title: typeof(params)==='undefined' || typeof(params.title) === 'undefined' ? I18n.t('home'): params.title,
        headerRight: <Button
                         title="Refresh"
                         onPress={ () => params.handleRefresh() } />

    };
  }; */
  
  render() {
    const { navigate } = this.props.navigation;
    const senderos = TrailsJSON.features;

    return (
      <ScrollView style={{backgroundColor: 'rgba(145, 200, 210, 0.4)'}}>
        <View animation="bounceInLeft" duration={4000} style={styles.titleContainer}>
          <Text style={styles.title}>{I18n.t('popularTrails')}</Text>
        </View>

        <ScrollView horizontal={true} contentContainerStyle={styles.row}>
        {
          popularIndex.map((idTrail, index) => (
              <View 
                key={idTrail}
                style={styles.card}>
                <View style={[styles.rowContent, {justifyContent:"space-between"}]}>
                  <Text  numberOfLines={1} ellipsizeMode="tail" style={styles.subtitle}>{senderos[idTrail].properties.name}</Text>
                  <Badge 
                    value={(index+1)+"/"+(popularIndex.length)} 
                    textStyle={{fontSize:14}}
                    badgeStyle={styles.badge}
                  />
                </View>
                <Divider style={{marginVertical:10, height:2}}></Divider>
                <Image
                  style={styles.image}
                  source={{uri: 'https://placeimg.com/640/480/nature'}}
                />
                <View style={[styles.rowContent, styles.box]}>
                  <View style={{alignItems:"center", width:80}}>
                    <Icon name="walking" size={25} />
                    <Text>{senderos[idTrail].properties.difficulty}</Text>
                  </View>
                  <View style={{alignItems:"center", width:80}}>
                    <Icon name="mountain" size={25}/>
                    <Text>{senderos[idTrail].properties.distance}</Text>
                  </View>
                  <View style={{alignItems:"center", width:80}}>
                    <Icon name="clock" size={25} />
                    <Text>{senderos[idTrail].properties.estimated_time}</Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={ () => navigate('trail', {trail: idTrail}) }
                >
                  <Text style={styles.info}>Información</Text>
                </TouchableOpacity>
              </View>
          ))
        }
        </ScrollView>

        
      </ScrollView>
      )
    }
}

const mapStateToProps = state => ({
  language: state.settings.language,
});

const mapDispatchToProps = dispatch => ({
  navigateTo: routeName => { dispatch(navigateTo(routeName)); },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

