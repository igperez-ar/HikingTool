import { StyleSheet, Dimensions } from 'react-native';
import { primary, secondaryDark, secondaryLight, primaryLight, primaryDark} from '../../global.styles';

export default StyleSheet.create({
    content: {
      backgroundColor: secondaryLight
    },
    row: {
      paddingBottom: 20
    },
    card: {
      backgroundColor: primaryLight,
      elevation: 10,
      padding: 20,
      borderRadius: 15,
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      marginHorizontal: 10,
      width: Dimensions.get('window').width - 20
    },
    image: {
      width: '100%',
      height: 180,
      borderRadius: 5
    },
    rowContent: {
      flexDirection: 'row',
    },
    box: {
      paddingVertical: 22,
      justifyContent:'space-around'
    },
    info: {
      fontSize: 17,
      width: '100%',
      height: 40,
      fontWeight: 'bold',
      color: 'white',
      backgroundColor: primaryDark,
      borderColor: primaryDark,
      textAlign: 'center',
      textAlignVertical: 'center',
      borderWidth: 2,
      borderRadius: 5,
      elevation: 5
    },
    titleContainer: {
      marginTop: 25,
      marginBottom: 20,
      alignItems: 'center',
    },
    titleDivider: {
      height: 1, 
      width: 200,
      marginTop: 2, 
      backgroundColor: primary, 
      elevation: 2
    },
    title: {
      fontSize: 25,
      color: primary,
      fontWeight: 'bold'
    },
    subtitle: {
      fontSize: 20,
      height: 30,
      fontWeight: 'bold',
      color: 'white'
    },
    text: {
      fontSize: 20,
      width: '70%',
      textAlign: 'center',
      lineHeight: 30,
      marginBottom: '4%',
    },
})