import { StyleSheet } from 'react-native';

export default {
  header: {
    flexDirection: "column",
    /* paddingTop: 40, 24dp (Space for the translucent StatusBar) plus 16dp Android Header paddingTop
    paddingLeft: 16, */
    height: 170,
    backgroundColor: '#CFD8DC'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  title: {
    marginTop: '34%',
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
    color: '#000',
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 14
  },
  drawerEmail: {
    color: '#000',
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 14
  },
  activeDrawerItem: {
    backgroundColor: '#455A64'
  },
  drawerItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: '#ffffff',
    color: '#000',
    height: 50,
    paddingLeft: 16,
    borderBottomWidth: 2,
    borderBottomColor: "#fff"
  },
  drawerItemLogo: {
    paddingRight: 16
  }
};
