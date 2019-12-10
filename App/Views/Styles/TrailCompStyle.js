import { StyleSheet, Dimensions } from 'react-native'
import { primaryDark, primaryLight, secondaryLight } from '../../global.styles'

const windowWidth= Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default StyleSheet.create({
    container: {
      backgroundColor: secondaryLight
    },
    titleContainer: {
      backgroundColor: primaryLight,
      borderColor: primaryDark,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      elevation: 3,
      marginBottom: 10,
    },
    title: {
      fontSize: 25,
      color: 'white',
      alignSelf: "center",
      padding: 10,
      fontWeight: 'bold'
    },
    subtitle: {
      fontSize: 19,
      color: primaryDark,
      paddingHorizontal: 10,
      fontStyle: 'italic'
    },
    divider: {
      backgroundColor: primaryDark,
      width: windowWidth - 100,
      height: 1,
      marginLeft: 10,
      marginBottom: 10
    },
    image: {
      width: windowWidth,
      height: 350
    },
    description: {
      fontSize: 15,
      textAlign: "justify",
      paddingHorizontal: 20,
      marginBottom: 20
    }
})
