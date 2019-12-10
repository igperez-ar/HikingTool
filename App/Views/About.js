import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  Linking,
} from 'react-native';
import styles from './Styles/AboutStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import I18n from '../I18n/i18n';
import { Divider } from 'react-native-elements';

class About extends Component {

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{I18n.t("info")}</Text>
          <Divider style={styles.titleDivider}/>
        </View>

        <Text style={styles.text}>
          Como estudiantes de la carrera de Analistas en Sistemas en la UNTDF, surgió la posibilidad de 
          realizar ésta aplicación como proyecto integrador de la materia Laboratorio de Software, 
          en la cual se busca integrar los conocimientos adquiridos durante el transcurso de los 
          últimos años para obtener la experiencia de un desarrollo de software profesional y también, 
          llevar a cabo un sistema que resuelva una problemática real de la comunidad.
        </Text>
        <Text style={styles.text}>
          El motivo por el cual decidimos embarcarnos en este proyecto en particular fue, además 
          de contribuir con las necesidades del parque y de considerarlo un desafío profesional, 
          porque encontramos la posibilidad de enriquecer la experiencia de los visitantes. Creemos que 
          es útil poder tener información del lugar en todo momento y también el hecho de contar con 
          una herramienta que proteja a sus usuarios de posibles extravíos.
        </Text> 
        <Text style={styles.text}>
          Los usuarios a quienes está dirigida esta aplicación son principalmente los turistas. Ellos pueden 
          descargar y utilizar posteriormente la aplicación off-line durante el transcurso de su estadía 
          en el parque, teniendo a su disposición la totalidad de los servicios brindados. 
        </Text>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{I18n.t("contact")}</Text>
          <Divider style={styles.titleDivider}/>
        </View>

        <View style={styles.cardMiembro}>
          <Text style={styles.name}>Damián N. López</Text>
          <Divider style={styles.divider}/>
          <View style={styles.social}>
            <Icon name='md-mail' size={25} style={{marginRight:10}}/>
            <Text style={styles.socialText}
                  onPress={() => Linking.openURL('mailto:damian.lopez.041995@gmail.com?subject=Me interesa tu trabajo!&body=Buenos días Damián!\n\nUtilicé la aplicación de senderos del Parque Nacional TDF y quería comunicarme contigo.')}
            >damian.lopez.041995@gmail.com</Text>
          </View>
          <View style={styles.social}>
            <Icon name="logo-github" size={25} style={{marginRight:10}} />
            <Text onPress={() =>
              Linking.openURL('https://github.com/damianlopez95')}
              style={styles.socialText}
            >
              github.com/damianlopez95
            </Text>
          </View>
        </View>

        <View style={styles.cardMiembro}>
          <Text style={styles.name}>Ignacio A. Perez</Text>
          <Divider style={styles.divider}/>
          <View style={styles.social}>
            <Icon name='md-mail' size={25} style={{marginRight:10}}/>
            <Text style={styles.socialText}
                  onPress={() => Linking.openURL('mailto:ignacioperez583@gmail.com?subject=Me interesa tu trabajo!&body=Buenos días Ignacio!\n\nUtilicé la aplicación de senderos del Parque Nacional TDF y quería comunicarme contigo.')}
            >ignacioperez583@gmail.com</Text>
          </View>
          <View style={styles.social}>
            <Icon name="logo-github" size={25} style={{marginRight:10}} />
            <Text onPress={() =>
              Linking.openURL('https://github.com/damianlopez95')}
              style={styles.socialText}
            >
              github.com/damianlopez95
            </Text>
          </View>
        </View>

        <View style={styles.cardMiembro}>
          <Text style={styles.name}>Sergio D. Maciel</Text>
          <Divider style={styles.divider}/>
          <View style={styles.social}>
            <Icon name='md-mail' size={25} style={{marginRight:10}}/>
            <Text style={styles.socialText}
                  onPress={() => Linking.openURL('mailto:dario.maciel.91@gmail.com?subject=Me interesa tu trabajo!&body=Buenos días Sergio!\n\nUtilicé la aplicación de senderos del Parque Nacional TDF y quería comunicarme contigo.')}
            >dario.maciel.91@gmail.com</Text>
          </View>
          <View style={styles.social}>
            <Icon name="logo-github" size={25} style={{marginRight:10}} />
            <Text onPress={() =>
              Linking.openURL('https://github.com/sergiomaciel')}
              style={styles.socialText}
            >
              github.com/sergiomaciel
            </Text>
          </View> 
        </View>

        
      </ScrollView>
    );
  }
};

export default About;
