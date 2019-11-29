import React from 'react'
import { 
  Text,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
  View
} from 'react-native'
import styles from './Styles/TrailStyles'
import { Card, Divider, Badge } from 'react-native-elements'
import FastImage from 'react-native-fast-image'

import { connect } from 'react-redux';
import TrailsJSON from '../Jsons/senderos-pn-tdf-es.json'

class Trail extends React.Component {

    render() {
      const { navigate } = this.props.navigation;
      const { interestPoints, flora, wildlife } = this.props;
      const ID = this.props.navigation.state.params.trail;
      const trail = TrailsJSON.features[ID].properties;

      return (
        <ScrollView style={styles.container}>
            <Image
              style={styles.image}
              source={{uri: 'https://placeimg.com/640/480/nature'}}
            />
            <View style={[styles.titleContainer, {marginBottom: 5}]}>  
              <Text style={[styles.title, {alignSelf: "center"}]}>
                {trail.name}
              </Text>
              <Divider style={{marginVertical: 10, height:2}}></Divider>
            </View>

            <View style={styles.detailsContainer}>
              <Text style={styles.subtitle3}>Dificultad:</Text>
              <Text>{trail.difficulty}</Text>
              <Text style={styles.subtitle3}>Tiempo estimado:</Text>
              <Text>{trail.estimated_time}</Text>
              <Text style={styles.subtitle3}>Distancia:</Text>
              <Text>{trail.distance}</Text>
              <Text style={styles.subtitle3}>Desnivel:</Text>
              <Text>{trail.unevenness}</Text>
              <Text style={styles.subtitle3}>Autoguiado:</Text>
              <Text>{trail.selfguided ? "Si" : "No"}</Text>
              {
                trail.important ? 
                  <View>
                    <Text style={styles.subtitle3}>Importante:</Text>
                    <Text>{trail.important}</Text>
                  </View>  
                  : null
              }
              <Text style={styles.subtitle3}>Descripción:</Text>
              <Text>{trail.description}</Text>
            </View>

            <View style={styles.titleContainer}>  
              <Text style={styles.subtitle2}>Puntos de Interés</Text>
              <Divider style={{height:2}}></Divider>
            </View>

            <ScrollView horizontal={true} style={[styles.row, {marginRight:10}]}>
            { trail.interest_points.map((point, index) => (
                <View
                  //point identifica la pos del punto de interés y sirve como key
                  key={point}
                  style={styles.card}
                >
                  <View style={[styles.rowContent, {justifyContent:"space-between"}]}>
                    <Text numberOfLines={1} ellipsizeMode="tail"
                      style={styles.cardTitle}
                    >{interestPoints[point].properties.Name}
                    </Text>
                    <Badge 
                      value={(index+1)+"/"+(trail.interest_points.length)} 
                      textStyle={{fontSize:14}}
                      badgeStyle={styles.badge}
                    />
                  </View>
                  <Divider style={{marginVertical: 10, height: 2}}></Divider>
                  <FastImage style={{width:200, height:150, marginBottom:10}} 
                    source={{priority: FastImage.priority.high},
                    interestPoints[point].properties.photo}
                  />
                  <TouchableOpacity
                    onPress={ () => navigate('interestPoint', {point: point}) }
                    style={{width:"100%"}}
                  >
                    <Text style={styles.button}>Ver</Text>
                  </TouchableOpacity>
                </View>
              ))
            }
            </ScrollView>  

            <View style={styles.titleContainer}>  
              <Text style={styles.subtitle2}>Fauna</Text>
              <Divider style={{height:2}}></Divider>
            </View>

            <ScrollView>
            { trail.fauna.map((specie, index) => (
                <View
                  key={specie}
                  style={styles.especieCard}
                >
                  <Text numberOfLines={1} ellipsizeMode="tail"
                        style={[styles.cardTitle, {textAlign:"center"}]}
                  >{wildlife[specie].name}
                  </Text>
                  <Divider style={{marginVertical:10, height:2}}></Divider>
                  <View style={{flexDirection: 'row', justifyContent:"space-between"}}>
                    <FastImage style={styles.especieImage} 
                      source={{priority: FastImage.priority.high},
                      wildlife[specie].photo}
                    />
                    <TouchableOpacity
                      onPress={ () => navigate('wildlife', {wildlife: specie}) }
                      style={{width:"50%", marginVertical:40}}
                    >
                      <Text style={styles.button}>Ver</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            }
            </ScrollView>  

            <View style={styles.titleContainer}>  
              <Text style={styles.subtitle2}>Flora</Text>
              <Divider style={{height:2}}></Divider>
            </View>

            <ScrollView>
            { trail.flora.map((specie) => (
                <View
                  key={specie}
                  style={styles.especieCard}
                >
                  <Text numberOfLines={1} ellipsizeMode="tail"
                        style={[styles.cardTitle, {textAlign:"center"}]}
                  >{flora[specie].name}
                  </Text>
                  <Divider style={{marginVertical:10, height:2}}></Divider>
                  <View style={{flexDirection: 'row', justifyContent:"space-between"}}>
                    <FastImage style={styles.especieImage} 
                        source={{priority: FastImage.priority.high},
                        flora[specie].photo}
                    />
                    {/* <Button 
                      title="Ver"
                      onPress={ () => navigate('flora', {flora: specie})}
                    /> */}
                    <TouchableOpacity
                      onPress={ () => navigate('flora', {flora: specie}) }
                      style={{width:"50%", marginVertical:40}}
                    >
                      <Text style={styles.button}>Ver</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            }
            </ScrollView>  
        </ScrollView>
      );
    }
}

const mapStateToProps = (state) => ({
  interestPoints: state.interestPoints.data.features,
  flora: state.settings.language == 'spa' ? state.species.floraSPA : state.species.floraENG,
  wildlife: state.settings.language == 'spa' ? state.species.wildlifeSPA : state.species.wildlifeENG
});

export default connect(
  mapStateToProps, 
  null
)(Trail);

