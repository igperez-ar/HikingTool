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

const interestPoints = [
  {id: 1,
   name: "algo"},
  {id: 2,
   name: "algo"},
  {id: 3,
   name: "algo"},
  {id: 4,
   name: "algo"}
]

class Trail extends React.Component {

    render() {
      const { navigate } = this.props.navigation;
      const trail = this.props.navigation.state.params.trail;

      return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>
              {trail.nombre}
            </Text>
            <Divider style={{marginVertical: 10, height:2}}></Divider>
            <Image
              style={styles.image}
              source={{uri: 'https://placeimg.com/640/480/nature'}}
            />
            <Text style={styles.subtitle3}>Dificultad:</Text>
            <Text style={styles.text}>{trail.dificultad}</Text>
            <Text style={styles.subtitle3}>Descripción:</Text>
            <Text style={styles.text}>{trail.descripcion}</Text>

            <Text style={styles.subtitle2}>Puntos de Interés</Text>
            <Divider style={{marginVertical: 10, marginBottom:5, height:2}}></Divider>

            <ScrollView horizontal={true}>
            { interestPoints.map((point) => (
                <Card
                  key={point.id}
                  title={point.name}
                >
                  <Image
                    style={{width:200, height:150, marginBottom:10}}
                    source={{uri: 'https://placeimg.com/640/480/nature'}}
                  />
                  <Button 
                    title="Ver"
                  />
                </Card>
              ))
            }
            </ScrollView>  
            <Text style={styles.subtitle2}>Fauna</Text>
            <Divider style={{marginVertical: 10, marginBottom:5, height:2}}></Divider>

            <ScrollView>
            { interestPoints.map((point) => (
                <Card
                  key={point.id}
                  title={point.name}
                >
                  <View style={{flexDirection: 'row', justifyContent:"space-between"}}>
                    <Image
                      style={{width:100,  height:100, borderRadius:50, marginBottom:10}}
                      source={{uri: 'https://placeimg.com/640/480/nature'}}
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
            { interestPoints.map((point) => (
                <Card
                  key={point.id}
                  title={point.name}
                >
                  <Image
                    style={{width:200, height:150, marginBottom:10}}
                    source={{uri: 'https://placeimg.com/640/480/nature'}}
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

export default Trail;
