import React from 'react'
import { 
  Text,
  Image,
  ScrollView,
  View
} from 'react-native'
import styles from './Styles/TrailStyles'
import { Divider } from 'react-native-elements'

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
            <Text style={styles.subtitle}>Dificultad:</Text>
            <Text style={styles.text}>{trail.dificultad}</Text>
            <Text style={styles.subtitle}>Descripción:</Text>
            <Text style={styles.text}>{trail.descripcion}</Text>
        </ScrollView>
      );
    }
}

export default Trail;
