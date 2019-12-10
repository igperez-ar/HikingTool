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
      {id: 2, name: 'trailist', screen: 'trailist',  icon: 'nature'},
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
    /* console.warn(this.props.navigation.state.routes[0].routes); */
    const routesList = this.props.navigation.state.routes[0].routes;
    const routesLength = routesList.length;
    const activeRoute = (routesLength > 1 
                          ? routesList[routesLength-1].routeName 
                          : 'home');

    return (
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <ImageBackground source={require('../Images/0.jpg')} style={StyleSheet.absoluteFillObject} resizeMode='cover'>
            <Text style={styles.title}>HikingTool</Text>
          </ImageBackground>
          <View style={styles.overlay} />
        </View>
        {this.routes.map(route => (
          <View 
            key={route.id}  
          >
            <TouchableOpacity
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
                    color={activeRoute === route.name ? "#fff" : '#51413E'}
                  />
                </View>
              )}
              <Text
                style={
                  activeRoute === route.name
                    ? { fontWeight: 'bold', fontSize: 15, color: "#fff" }
                    : { fontWeight: 'bold', fontSize: 15, color: '#51413E'}
                }
              >
                { I18n.t(route.name) }
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    );
  }
}

export default SideMenu;
