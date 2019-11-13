import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    row: {
      marginBottom: 20
    },
    card: {
      
    },
    image: {
      width: Dimensions.get('window').width - 60,
      height: 200,
      marginBottom: 20
    },
    header1: {
        fontSize: 28,
        margin: 15,
    },
    text: {
        fontSize: 20,
        width: '70%',
        textAlign: 'center',
        lineHeight: 30,
        marginBottom: '4%',
    },
})