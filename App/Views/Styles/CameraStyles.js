import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    },
    inputContainer: {
      position: 'absolute',
      backgroundColor: '#fff',
      borderRadius: 5,
      alignSelf: 'center',
      width: Dimensions.get('window').width * 0.9,
      bottom: 10
    },
    buttonOK: {
      height: 40,
      borderRadius: 5,
      backgroundColor: '#0074D9',
      borderColor:'rgba(0,0,0,0.2)',
      borderWidth:1
    },
    buttonCancel: {
      height: 40,
      borderRadius: 5,
      backgroundColor: '#FF4136',
      borderColor:'rgba(0,0,0,0.2)',
      borderWidth:1
    },
    picture: {
      position: 'absolute',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height * 0.95,
      bottom: 0,
    },
    input: {
      borderBottomColor: '#000000',
      borderRightColor: '#000000',
      borderRightWidth: 1,
      borderBottomWidth: 1,
      borderBottomRightRadius: 5,
      height: 50,
      paddingLeft: 6
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
    cancel: {
      position: 'absolute',
      right: 20,
      top: 20,
      backgroundColor: 'transparent',
      color: '#FFF',
      fontWeight: '600',
      fontSize: 17,
    }
})