import React from 'react';
import { 
  Text,
  StyleSheet,
  Image
} from 'react-native';
import { Card } from 'react-native-elements';

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

const styles = StyleSheet.create({
  titulo: {
    fontSize: 14,
    alignSelf: "flex-start",
    color: 'black',
    paddingVertical: 5,
    fontWeight: 'bold',
  },
  descripcion: {
    fontSize: 13,
    color: 'black',
    marginBottom: 10,
  },
  image: {
    width: '100%', 
    height: 150,
    marginBottom: 10
  }
});

export default Trail;
