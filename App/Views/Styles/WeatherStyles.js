import { StyleSheet } from 'react-native'
import { secondaryLight } from '../../global.styles';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: secondaryLight,
    },
    card: {
      backgroundColor: 'rgba(255, 255, 255, 0.7)', 
      marginVertical:3,
      borderRadius: 10,
      paddingHorizontal: 5
    },
    titulo: {
      fontSize: 28,
      color: 'black',
      alignSelf: 'center',
      padding: 10,
      fontWeight: 'bold',
    },
    nextDays: {
      flex: 1,
      padding: 10,
      marginTop: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    infoRows: {
      flexDirection: 'row',
      justifyContent: "space-between",
      marginBottom: 10
    },
    tempValuesContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingBottom: 10
    },
    max: {
      color: 'black',
      fontSize: 35,
    },
    min: {
      color: 'grey',
      fontSize: 20,
      marginLeft: 5
    },
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
  })
