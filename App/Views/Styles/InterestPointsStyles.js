import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
      flex: 1
    },
    titulo: {
      fontSize: 28,
      color: 'black',
      alignSelf: "center",
      padding: 15,
      fontWeight: 'bold',
    },
    image_container: {
      padding: 5,
    },
    image: {
      width: null,
      resizeMode: 'contain',
      height: 300
    }
})