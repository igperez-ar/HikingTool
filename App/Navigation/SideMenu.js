import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { 
  ScrollView, 
  Text, 
  View, 
  ImageBackground,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from './Styles/SideMenuStyles';
import I18n from '../I18n/i18n';
 
class SideMenu extends Component {
  constructor() {
    super();
    //Sreen to navigate can be any screen defined in Drawer Navigator in App.js
    this.routes = [
      {id: 0, name: 'home',     screen: 'home',      icon: 'home'},
      {id: 1, name: 'map',      screen: 'map',       icon: 'compass'},
      {id: 2, name: 'trails',   screen: 'trailist',  icon: 'nature'},
      {id: 3, name: 'camera',   screen: 'camera',    icon: 'camera'},
      {id: 4, name: 'weather',  screen: 'weather',   icon: 'cloud'},
      {id: 6, name: 'settings', screen: 'settings',  icon: 'settings'},
      {id: 7, name: 'about',    screen: 'about',     icon: 'information'},
    ];
  }
 
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };
 
  render() {
    activeRoute = (this.props.navigation.state.routes[0].routes.length > 1 
                   ? this.props.navigation.state.routes[0].routes[1].routeName 
                   : 'home');
    /* const activeRoute = 'home'; */

    return (
      <ScrollView>
      <View style={styles.header}>
        <ImageBackground source={require('../Images/1.jpg')} style={StyleSheet.absoluteFillObject} resizeMode='cover'>
          <Text style={styles.title}>HikingTool</Text>
        </ImageBackground>
        <View style={styles.overlay} />
      </View>
      {this.routes.map(route => (
        <TouchableOpacity
          key={route.id}
          onPress={this.navigateToScreen(route.screen)}
          style={
            activeRoute === route.name
              ? [styles.drawerItem, styles.activeDrawerItem]
              : styles.drawerItem
          }
        >
          {route.icon && (
            <View style={styles.drawerItemLogo}>
              <Icon
                name={route.icon}
                size={30}
                color={activeRoute === route.name ? "#fff" : "#000"}
              />
            </View>
          )}
          <Text
            style={
              activeRoute === route.name
                ? { color: "#fff" }
                : { color: "#000" }
            }
          >
            { I18n.t(route.name) }
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
    );
  }
}

export default SideMenu;

{/* <View style={styles.container}>
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
        <View style={styles.footerContainer}>
        </View> 
        <Text>HikingTool v1.0.1</Text>
      </View> */}