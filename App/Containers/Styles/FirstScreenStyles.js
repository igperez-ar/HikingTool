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
      paddingTop: 40,
      fontWeight: 'bold',
    },
    toolbar: {
      backgroundColor: '#2196F3',
      height: 56,
      alignSelf: 'stretch',
      textAlign: 'center',
    }, 
    image_container: {
      padding: 5,
      paddingTop: 40,
    },
    image: {
      width: null,
      resizeMode: 'contain',
      height: 150
    },
    btnSenderos: {
      margin: 40
    }
  })
