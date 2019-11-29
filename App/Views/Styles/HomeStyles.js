import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    row: {
      paddingBottom: 20
    },
    card: {
      backgroundColor: 'rgba(255, 255, 255, 1)',
      elevation: 10,
      padding: 20,
      marginHorizontal: 10,
      width: Dimensions.get('window').width - 20
    },
    image: {
      width: '100%',
      height: 180,
      borderRadius: 5
    },
    rowContent: {
      flexDirection: "row",
    },
    box: {
      paddingVertical: 22,
      justifyContent:"space-around"
    },
    info: {
      fontSize: 17,
      width: 125,
      height: 35,
      fontWeight: "bold",
      backgroundColor: 'rgba(140, 190, 200, 0.50)',
      borderColor: 'rgba(140, 190, 200, 0.85)',
      borderWidth: 2,
      paddingVertical: 5,
      paddingHorizontal: 15,
      borderRadius: 5
    },  
    badge: {
      position: "absolute",
      width: 40,
      height: 32,
      borderRadius: 0,
      borderBottomLeftRadius: 15,
      top: -21,
      left: -17
    },
    titleContainer:{
      margin: 10,
      borderTopEndRadius: 40,
      borderBottomEndRadius: 40,
      marginBottom: 15,
      alignItems: "center",
      elevation: 3,
      backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    title: {
      fontSize: 25,
      margin: 15,
      color: "black",
      fontWeight: "bold"
    },
    subtitle: {
      fontSize: 20,
      height: 30,
      fontWeight: "bold"
    },
    text: {
        fontSize: 20,
        width: '70%',
        textAlign: 'center',
        lineHeight: 30,
        marginBottom: '4%',
    },
})