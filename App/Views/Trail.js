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
import { Card, Divider } from 'react-native-elements'
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
            <Text style={styles.title}>
              {trail.name}
            </Text>
            <Divider style={{marginVertical: 10, height:2}}></Divider>
            <Image
              style={styles.image}
              source={{uri: 'https://placeimg.com/640/480/nature'}}
            />
            <Text style={styles.subtitle3}>Dificultad:</Text>
            <Text style={styles.text}>{trail.difficulty}</Text>
            <Text style={styles.subtitle3}>Descripción:</Text>
            <Text style={styles.text}>{trail.description}</Text>

            <Text style={styles.subtitle2}>Puntos de Interés</Text>
            <Divider style={{marginVertical: 10, marginBottom:5, height:2}}></Divider>

            <ScrollView horizontal={true}>
            { trail.interest_points.map((point) => (
                <Card
                  //point identifica la pos del punto de interés y sirve como key
                  key={point}
                  title={interestPoints[point].properties.Name}
                >
                  <FastImage style={{width:200, height:150, marginBottom:10}} 
                    source={{priority: FastImage.priority.high},
                    interestPoints[point].properties.photo}
                  />
                  <Button 
                    title="Ver"
                    onPress={ () => navigate('interestPoint', {interestPoint: point}) }
                  />
                </Card>
              ))
            }
            </ScrollView>  
            <Text style={styles.subtitle2}>Fauna</Text>
            <Divider style={{marginVertical: 10, marginBottom:5, height:2}}></Divider>

            <ScrollView>
            { trail.fauna.map((specie) => (
                <Card
                  key={specie}
                  title={wildlife[specie].name}
                >
                  <View style={{flexDirection: 'row', justifyContent:"space-between"}}>
                    <FastImage style={{width:200, height:150, marginBottom:10}} 
                      source={{priority: FastImage.priority.high},
                      wildlife[specie].photo}
                    />
                    <TouchableOpacity
                      style={{height:10, marginTop:20}}
                    >
                      <Text>Ver</Text>
                    </TouchableOpacity>  
                  </View>
                </Card>
              ))
            }
            </ScrollView>  
            <Text style={styles.subtitle2}>Flora</Text>
            <Divider style={{marginVertical: 10, marginBottom:5, height:2}}></Divider>

            <ScrollView style={{paddingBottom: 60}}>
            { trail.flora.map((specie) => (
                <Card
                  key={specie}
                  title={flora[specie].name}
                >
                  <FastImage style={{width:200, height:150, marginBottom:10}} 
                      source={{priority: FastImage.priority.high},
                      flora[specie].photo}
                  />
                  <Button 
                    title="Ver"
                  />
                </Card>
              ))
            }
            </ScrollView>  
        </ScrollView>
      );
    }
}

const mapStateToProps = (state) => ({
  interestPoints: state.interestPoints.data.features,
  flora: state.species.floraSPA,
  wildlife: state.species.wildlifeSPA
});

export default connect(
  mapStateToProps, 
  null
)(Trail);

