import { Dimensions, StyleSheet } from 'react-native'
import { secondaryLight, primaryDark, secondaryDark } from '../../global.styles';

export default StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    },
    inputContainer: {
      position: 'absolute',
      backgroundColor: secondaryLight,
      borderRadius: 5,
      borderColor: primaryDark,
      borderWidth: 2,
      paddingHorizontal: 5,
      alignSelf: 'center',
      width: Dimensions.get('window').width * 0.9,
      bottom: 10
    },
    buttonOK: {
      marginRight: 2,
      height: 40,
      borderRadius: 5,
      backgroundColor: primaryDark,
      borderColor: primaryDark,
      borderWidth:1,
      elevation: 5
    },
    buttonCancel: {
      marginLeft: 2,
      height: 40,
      borderRadius: 5,
      backgroundColor: 'grey',
      borderColor: primaryDark,
      borderWidth: 1,
      elevation: 5
    },
    picCard: {
      margin: 5,
      borderRadius: 5,
      width: Dimensions.get('window').width - 200,
      height: 180
    },
    textButton : { 
      fontSize: 15, 
      fontWeight: 'bold',
      color: 'white',
      textAlign:'center', 
      marginTop: 7
    },
    picture: {
      position: 'absolute',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height * 0.95,
      bottom: 0,
    },
    input: {
      backgroundColor: 'rgba(255,255,255,0.8)',
      borderColor: primaryDark,
      borderWidth: 1,
      borderBottomRightRadius: 20,
      height: 50,
      marginBottom: 5,
      elevation: 2
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      flex: 0,
      backgroundColor: secondaryLight,
      borderTopStartRadius: 100,
      borderTopEndRadius: 100,
      width: 100,
      paddingTop: 15,
      paddingBottom: 7,
      borderColor: primaryDark,
      borderWidth: 2,
      alignSelf: 'center',
      alignItems: 'center'
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