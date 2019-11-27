import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
      flex: 1
    },
    titulo: {
      fontSize: 28,
      color: 'black',
      alignSelf: "center",
      padding: 10,
      fontWeight: 'bold',
    },
    image_container: {
      padding: 5,
    },
    image: {
      width: null,
      resizeMode: 'contain',
      height: 300
    },
    btnSenderos: {
      margin: 5
    },
    //Estilos del clima
    actualDay: {
      flex: 1,
      borderRadius: 10,
      borderColor: '#001f3f',
      borderWidth: 1,
    },
    nextDays: {
      flex: 1,
      borderRadius: 9,
      borderColor: '#001f3f',
      borderWidth: 1,
      padding: 10,
      marginTop: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    rowNextDay: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 10,
      marginTop: 14
    },
    infoRows: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
    },
    tempValuesContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingBottom: 10
    },
    tempValues: {
      fontWeight: 'bold',
      fontSize: 22,
    },
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 10
    }
  })
