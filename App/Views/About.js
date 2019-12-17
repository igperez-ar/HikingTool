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
          {I18n.t("aboutP1")}
        </Text>
        <Text style={styles.text}>
          {I18n.t("aboutP2")}
        </Text> 
        <Text style={styles.text}>
          {I18n.t("aboutP3")} 
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
              Linking.openURL('https://github.com/ignacioperez99')}
              style={styles.socialText}
            >
              github.com/ignacioperez99
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
