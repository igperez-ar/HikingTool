import { StyleSheet } from 'react-native'
import { secondaryLight } from '../../global.styles';

export default StyleSheet.create({
    container: {
      backgroundColor: secondaryLight
    },
    listitem: {
      height: 60,
      backgroundColor: 'rgba(255,255,255,0.4)',
      borderColor: 'darkgrey',
      borderBottomWidth: 1,
      paddingHorizontal: 20      
    }
})