import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    image: {
      width: 120,
      height: 120,
      borderRadius: 60,
      borderWidth: 2,
      borderColor: 'grey',
      marginRight: 20
    },
    content: {
      flex: 1,
      paddingLeft: 10,
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
    },
    text: {
      marginBottom: 10
    }
})