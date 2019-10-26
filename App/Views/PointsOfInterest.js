import React, { Component } from 'react'
import { 
  Text, 
  View, 
  ScrollView, 
  Button,
  StyleSheet, 
  Image 
} from 'react-native'


class PointsOfInterest extends Component {

    render () {
      return (
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.titulo}>
              Puntos de Interés
            </Text>
            <View style={styles.image_container}>
                <Image
                  style={styles.image}
                  source={{uri: 'https://www.monplamar.com/wp-content/uploads/2018/03/sendero-pr.jpg'}}
                />
            </View>
          </ScrollView>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titulo: {
    fontSize: 28,
    color: 'black',
    alignSelf: "center",
    padding: 15,
    fontWeight: 'bold',
  },
  image_container: {
    padding: 5,
  },
  image: {
    width: null,
    resizeMode: 'contain',
    height: 300
  }
});

export default PointsOfInterest;
