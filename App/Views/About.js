import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Linking,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const About = () => (
  <ScrollView contentContainerStyle={styles.view}>
      {/* <Text style={styles.h1}>About</Text> */}
      <Text style={[styles.text, styles.p]}>
        Esta aplicación fue desarrollada como trabajo final para la materia
        Laboratorio de Software de la carrera Analista en Sistemas.
      </Text>
      <Text style={styles.signature}>Ignacio Perez, Damian López, Sergio Maciel</Text>
      <Text style={styles.position}>Analistas en Sistemas</Text>
      <View style={styles.social}>
        {/* <Icon name="logo-linkedin" size={30} color="#2962FF" style={{marginRight: 10}} /> */}
        <Text onPress={() =>
          Linking.openURL('https://www.untdf.edu.ar')}
          style={styles.link}
        >
          Instituto de Desarrollo Económico e Innovación
        </Text>
      </View>
      {/* <View style={styles.social}>
        <Icon name="logo-github" size={30} color="#2962FF" style={{marginRight: 10}} />
        <Text onPress={() =>
          Linking.openURL('https://github.com/darde')}
          style={styles.link}
        >
          https://github.com/darde
        </Text>
      </View> */}
    </ScrollView>
);

const styles = StyleSheet.create({
  view: {
    marginTop: 20,
    padding: 20
  },
  h1: {
    fontSize: 22,
    alignSelf: 'center',
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10
  },
  p: {
    textAlign: 'left',
    marginBottom: 20
  },
  linkCredits: {
    fontStyle: 'italic',
    color: '#2962FF'
  },
  social: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10
  },
  signature: {
    fontSize: 16,
    marginBottom: 4,
  },
  position: {
    fontSize: 16,
    marginBottom: 10,
  },
  link: {
    fontSize: 16,
    color: '#2962FF'
  }
});

export default About;
