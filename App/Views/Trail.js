import React from 'react'
import { 
  Text,
  Image
} from 'react-native'
import styles from './Styles/TrailStyles'
import { Card } from 'react-native-elements'

class Trail extends React.Component {
    /* componentDidMount() {
      const {navigation} = this.props;
      navigation.addListener ('willFocus', () =>
      this.setState({ 
        trail: global.trail
       })
      )
    } */

    render() {
      const { navigate } = this.props.navigation;
      const trail = this.props.navigation.state.params.trail;

      return (
        <Card title={trail.nombre}>
          <Image
            style={styles.image}
            source={{uri: 'https://placeimg.com/640/480/nature'}}
          />
          <Text style={styles.titulo}>Dificultad: {trail.dificultad}</Text>
          <Text style={styles.titulo}>Descripción</Text>
          <Text style={styles.descripcion}>{trail.descripcion}</Text>
        </Card>
      );
    }
}

export default Trail;
