import React from 'react';
import { 
  Text,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
  View
} from 'react-native';
import I18n from '../I18n/i18n';
import styles from './Styles/TrailStyles';
import { Divider } from 'react-native-elements';
import FastImage from 'react-native-fast-image';

import { connect } from 'react-redux';
import TrailsJSON from '../Jsons/senderos-pn-tdf-es.json';

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
              source={{uri: trail.images}}
            />
            <View style={{alignItems:"center", marginVertical:15}}>  
              <Text style={styles.title}>{trail.name}</Text>
              <Divider style={[styles.divider, {width:220, marginBottom:10}]}></Divider>
            </View>

            <View style={styles.detailsContainer}>
              {
                trail.important ? 
                  <View style={{textAlign:'center'}}>
                    <Text style={styles.importantTitle}>{I18n.t("important")}:</Text>
                    <Text style={styles.importantText}>{trail.important}</Text>
                  </View>  
                  : null
              }
              <Text style={styles.subtitle3}>{I18n.t("difficulty")}:</Text>
              <Text>{trail.difficulty}</Text>
              <Text style={styles.subtitle3}>{I18n.t("estTime")}:</Text>
              <Text>{trail.estimated_time}</Text>
              <Text style={styles.subtitle3}>{I18n.t("distance")}:</Text>
              <Text>{trail.distance}</Text>
              <Text style={styles.subtitle3}>{I18n.t("unevenness")}:</Text>
              <Text>{trail.unevenness}</Text>
              <Text style={styles.subtitle3}>{I18n.t("selfGuided")}:</Text>
              <Text>{trail.selfguided ? I18n.t("yes") : I18n.t("no")}</Text>
              <Text style={styles.subtitle3}>{I18n.t("desc")}:</Text>
              <Text style={{textAlign:'justify'}}>{trail.description}</Text>
            </View>

            <View style={styles.titleContainer}>  
              <Text style={styles.subtitle2}>{I18n.t("interestPoints")}</Text>
              <Divider style={styles.divider}></Divider>
            </View>

            <View> 
              <ScrollView horizontal={true} contentContainerStyle={{paddingHorizontal:5}}>
              { trail.interest_points.map((point, index) => (
                  <View
                    //point identifica la pos del punto de interés y sirve como key
                    key={point}
                    style={styles.card}
                  >
                    <View style={styles.cardTitleContainer}>
                      <Text numberOfLines={1} ellipsizeMode="tail"
                        style={styles.cardTitle}
                      >{interestPoints[point].properties.Name}
                      </Text>
                    </View>
                    <View style={styles.cardContent}>
                      <FastImage style={{width:'100%', height:150, borderRadius:5, marginBottom:10}} 
                        source={{priority: FastImage.priority.high},
                        interestPoints[point].properties.photo}
                      />
                      <TouchableOpacity
                        onPress={ () => navigate('interestPoint', {point: point}) }
                        disabled={interestPoints[point].properties.State == "visitado" ? false : true }
                        style={{width:"100%"}}
                      >
                        <Text style={(interestPoints[point].properties.State == "visitado" ? styles.info : styles.infoDisabled)}>{I18n.t("see")}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))
              }
              </ScrollView>  
            </View>

            <View style={styles.titleContainer}>  
              <Text style={styles.subtitle2}>{I18n.t("fauna")}</Text>
              <Divider style={styles.divider}></Divider>
            </View>

            <ScrollView contentContainerStyle={{alignItems:'center'}}>
            { trail.fauna.map((specie, index) => (
                <View
                  key={specie}
                  style={styles.especieCard}
                >
                  <View style={styles.cardTitleContainer}>
                    <Text numberOfLines={1} ellipsizeMode="tail"
                          style={[styles.cardTitle, {textAlign:"center"}]}
                    >{wildlife[specie].name}
                    </Text>
                  </View>

                  <View style={styles.especieContent}>
                    <FastImage style={styles.especieImage} 
                      source={{priority: FastImage.priority.high},
                      wildlife[specie].photo}
                    />
                    <TouchableOpacity
                      onPress={ () => navigate('wildlife', {wildlife: specie}) }
                      style={{width:"50%", marginVertical:40}}
                    >
                      <Text style={styles.info}>{I18n.t("see")}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            }
            </ScrollView>  

            <View style={styles.titleContainer}>  
              <Text style={styles.subtitle2}>{I18n.t("flora")}</Text>
              <Divider style={styles.divider}></Divider>
            </View>

            <ScrollView contentContainerStyle={{alignItems:'center'}}>
            { trail.flora.map((specie) => (
                <View
                  key={specie}
                  style={styles.especieCard}
                >
                  <View style={styles.cardTitleContainer}>
                    <Text numberOfLines={1} ellipsizeMode="tail"
                          style={[styles.cardTitle, {textAlign:"center"}]}
                    >{flora[specie].name}
                    </Text>
                  </View>

                  <View style={styles.especieContent}>
                    <FastImage style={styles.especieImage} 
                        source={{priority: FastImage.priority.high},
                        flora[specie].photo}
                    />
                    <TouchableOpacity
                      onPress={ () => navigate('flora', {flora: specie}) }
                      style={{width:"50%", marginVertical:40}}
                    >
                      <Text style={styles.info}>{I18n.t("see")}</Text>
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

