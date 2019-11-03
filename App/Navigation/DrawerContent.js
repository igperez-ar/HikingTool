import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";
import {
  bgDrawerHeader,
  drawerLogoColor,
  drawerInactiveItemColor,
  bgDrawerInactiveItem,
  bgDrawerActiveItem,
  drawerHeaderColor
} from "../global.styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { navigateTo } from "../Redux/actions";
import I18n from "../I18n/i18n";

const DrawerContent = ({ navigateTo, activeRoute, routes, closeDrawer }) => (
  <ScrollView>
    <View style={styles.header}>
      <ImageBackground source={require('../Images/1.jpg')} style={StyleSheet.absoluteFillObject} resizeMode='cover'>
        <Text style={styles.title}>Senderos</Text>
      </ImageBackground>
      <View style={styles.overlay} />
    </View>
    {routes.map(route => (
      route.side === true 
      ? 
        <TouchableOpacity
          key={route.id}
          onPress={() => {
            closeDrawer();
            navigateTo(route.name);
          }}
          style={
            activeRoute.id === route.id
              ? [styles.drawerItem, styles.activeDrawerItem]
              : styles.drawerItem
          }
        >
          {route.icon && (
            <View style={styles.drawerItemLogo}>
              <Icon
                name={route.icon}
                size={30}
                color={activeRoute.id === route.id ? "#fff" : "#000"}
              />
            </View>
          )}
          <Text
            style={
              activeRoute.name === route.name
                ? { color: "#fff" }
                : { color: "#000" }
            }
          >
            { I18n.t(route.name) }
          </Text>
        </TouchableOpacity>
      : null
    ))}
  </ScrollView>
);

DrawerContent.propTypes = {
  activeRoute: PropTypes.shape({
    name: PropTypes.string.isRequired,
    screen: PropTypes.any.isRequired,
    icon: PropTypes.string.isRequired
  }).isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  navigateTo: PropTypes.func.isRequired,
  closeDrawer: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "column",
    /* paddingTop: 40, 24dp (Space for the translucent StatusBar) plus 16dp Android Header paddingTop
    paddingLeft: 16, */
    height: 170,
    backgroundColor: bgDrawerHeader
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  title: {
    marginTop: '35%',
    marginLeft: 5,
    fontSize: 50,
    color: 'white',
    fontFamily: 'serif'
  },
  image:{
    width: '100%',
    height: '100%'
  },
  headerLogo: {
    width: 64,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 32,
    overflow: "hidden",
    backgroundColor: "#fff"
  },
  subTitle: {
    height: 56,
    paddingTop: 8
  },
  drawerTitle: {
    color: drawerHeaderColor,
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 14
  },
  drawerEmail: {
    color: drawerHeaderColor,
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 14
  },
  activeDrawerItem: {
    backgroundColor: bgDrawerActiveItem
  },
  drawerItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: bgDrawerInactiveItem,
    color: drawerInactiveItemColor,
    height: 50,
    paddingLeft: 16,
    borderBottomWidth: 2,
    borderBottomColor: "#fff"
  },
  drawerItemLogo: {
    paddingRight: 16
  }
});

const mapStateToProps = (state, ownProps) => ({
  routes: state.routes.routes,
  activeRoute: state.routes.activeRoute,
  closeDrawer: ownProps.closeDrawer,
});

const mapDispatchToProps = dispatch => ({
  navigateTo: routeName => {
    dispatch(navigateTo(routeName));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DrawerContent);
