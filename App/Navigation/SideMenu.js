import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

import styles from './Styles/SideMenuStyles';
import I18n from
 
class SideMenu extends Component {
  constructor() {
    super();
    /*Array of the sidebar navigation option with 
    Heading, Subheading and screen to navigate.*/
    //Sreen to navigate can be any screen defined in Drawer Navigator in App.js
    this.routes = [
      {id: 0, name: 'home',     screen: 'home',      icon: 'home'},
      {id: 1, name: 'map',      screen: 'map',      icon: 'compass'},
      {id: 2, name: 'trails',   screen: 'trailist', icon: 'nature'},
      {id: 3, name: 'camera',   screen: 'camera',    icon: 'camera'},
      {id: 4, name: 'weather',  screen: 'weather',   icon: 'cloud'},
      {id: 6, name: 'settings', screen: 'settings',  icon: 'settings'},
      {id: 7, name: 'about',    screen: 'about',     icon: 'information'},
    ];
    /* {id: 5, name: 'trail',    screen: trails,    icon: 'home'}, */
    /* {id: 8, name: 'lang',     screen: lang,      icon: 'information'}, */
    /* this.options = [
      {
        mainHeading: 'Inicio',
        subOptions: [
          { secondaryHeading: 'Página principal', navigationPath: 'First' },
        ],
      },
      {
        mainHeading: 'Contenidos',
        subOptions: [
          { secondaryHeading: 'Mapa con Senderos', navigationPath: 'Second' },
          { secondaryHeading: 'Lista de Senderos', navigationPath: 'Third' },
        ],
      },
    ]; */
  }
 
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };
 
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            {this.routes.map((route) => (
              <View style={styles.secondaryHeading} 
                key={route.id}
              >
                <Text onPress={this.navigateToScreen(route.screen)}>
                  {route.name}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
        {/* <View style={styles.footerContainer}>
        </View> */}
        <Text>HikingTool v1.0.1</Text>
      </View>
    );
  }
}

export default SideMenu;
