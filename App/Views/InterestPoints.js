import React, { Component } from 'react'
import { 
  Text, 
  View, 
  ScrollView, 
  Button, 
  Image 
} from 'react-native'
import styles from './Styles/InterestPointsStyles'


class InterestPoints extends Component {

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

export default InterestPoints;
