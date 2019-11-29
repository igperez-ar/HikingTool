import { StyleSheet, Dimensions } from 'react-native'

const windowWidth= Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default StyleSheet.create({
    main: {
      paddingTop:0,
      alignItems: "center"
    },
    title: {
      fontSize: 26,
      color: 'black',
      alignSelf: "center",
      padding: 10,
      fontWeight: 'bold'
    },
    image: {
      width: windowWidth,
      height: 350
    },
    content: {
      flex: 1,
      paddingLeft: 10,
      flexDirection: "row",
      alignItems: "center",
      fontSize: 18,
      marginBottom: 30,
    },
    divider: {
      backgroundColor: 'green',
      marginBottom: 20,
    }
})
