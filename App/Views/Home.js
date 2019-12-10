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
import { Divider } from 'react-native-elements';
import TrailsJSON from '../Jsons/senderos-pn-tdf-es';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { primaryDark } from '../global.styles';

const popularIndex = [1,2,6];

class Home extends Component  {
  
  render() {
    const { navigate } = this.props.navigation;
    const senderos = TrailsJSON.features;

    return (
      <ScrollView style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{I18n.t('popularTrails')}</Text>
          <Divider style={styles.titleDivider}/>
        </View>                          

        <ScrollView horizontal={true} contentContainerStyle={styles.row}>
        {
          popularIndex.map((idTrail) => (
              <View 
                key={idTrail}
                style={styles.card}>
                <View style={[styles.rowContent, {justifyContent:"space-between"}]}>
                  <Text numberOfLines={1} ellipsizeMode="tail" style={styles.subtitle}>{senderos[idTrail].properties.name}</Text>
                </View>
                <Divider style={{marginVertical:10, height:2, elevation:2, backgroundColor: primaryDark}}></Divider>
                <View style={{elevation: 8}}>
                  <Image
                    style={styles.image}
                    source={{uri: senderos[idTrail].properties.images}}
                  />
                </View>
                <View style={[styles.rowContent, styles.box]}>
                  <View style={{alignItems:"center", width:80}}>
                    <Icon name="hiking" size={25} color={'white'}/>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>{I18n.t(senderos[idTrail].properties.difficulty)}</Text>
                  </View>
                  <View style={{alignItems:"center", width:80}}>
                    <Icon name="route" size={25} color={'white'}/>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>{senderos[idTrail].properties.distance}</Text>
                  </View>
                  <View style={{alignItems:"center", width:80}}>
                    <Icon name="clock" size={25} color={'white'} />
                    <Text style={{color: 'white', fontWeight: 'bold'}}>{senderos[idTrail].properties.estimated_time}</Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={ () => navigate('trail', {trail: idTrail}) }
                >
                  <Text style={styles.info}>{I18n.t('info')}</Text>
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

