import { StyleSheet } from 'react-native';
import { secondaryLight, primaryLight, secondaryDark, primary } from '../../global.styles';

export default {
  content: {
    backgroundColor: secondaryLight,
    elevation: 10,
    borderBottomRightRadius: 90 
  },
  header: {
    flexDirection: "column",
    /* paddingTop: 40, 24dp (Space for the translucent StatusBar) plus 16dp Android Header paddingTop
    paddingLeft: 16, */
    height: 160,
    backgroundColor: '#CFD8DC',
    marginBottom: 10,
    elevation: 10
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(90,90,90,0.45)'
  },
  title: {
    marginTop: '30%',
    marginLeft: 5,
    fontSize: 50,
    color: 'transparent',
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
  activeDrawerItem: {
    backgroundColor: primary,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    elevation: 10
  },
  drawerItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: 'transparent',
    color: '#000',
    height: 50,
    width: '90%',
    paddingLeft: 25
  },
  drawerItemLogo: {
    paddingRight: 16
  }
};
