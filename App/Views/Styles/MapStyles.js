import { StyleSheet, Dimensions } from 'react-native'
import { secondaryLight, primaryDark, primaryLight, primary, secondaryDark} from '../../global.styles'

const windowWidth= Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  },
  pickerItem:{
    backgroundColor: "red"
  },
  optionsButton: {
    position: 'absolute',
    right: 10,
    width: 55,
    height: 55,
    elevation: 5,
    borderRadius: 30,
    backgroundColor: secondaryLight,
    alignItems:'center',
    justifyContent:'center',
    borderWidth: 2,
    borderColor: primaryDark,
  },
  emergency: {
    alignSelf: 'center', 
    width: '100%', 
    marginTop: 15, 
    elevation: 2,
    backgroundColor: secondaryDark,
    borderWidth: 0
  },
  overlay: {
    position: 'absolute',
    bottom:0
  },
  card: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    width: '95%'
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
  infoDisabled: {
    fontSize: 17,
    width: '100%',
    height: 40,
    fontWeight: 'bold',
    color: 'lightgrey',
    backgroundColor: '#726a69',
    borderColor: 'grey',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderWidth: 2,
    borderRadius: 5,
    elevation: 5
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 5,
    marginBottom: 20
  },
  divider: {
    marginVertical: 15, 
    height: 1, 
    elevation: 1
  },
  detailsContainer: {
    width:windowWidth*0.96,
    height:windowHeight*0.41,
    position:'absolute',
    bottom: 0,
    alignSelf: 'center',
    backgroundColor: secondaryLight,
    borderColor: primaryDark,
    borderWidth: 2,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    elevation: 10
  },
  detailsTitle: {
    alignSelf: "flex-start",
    fontSize: 17,
    marginLeft: 15,
    marginTop: 3,
    marginBottom: 2,
    color: 'white',
    fontWeight: "bold",
    width: '80%'
  },
  titleContainer: {
    paddingVertical: 10,
    borderBottomColor: primaryDark,
    borderBottomWidth: 2,
    marginBottom: 10,
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    backgroundColor: primaryLight,
    elevation: 3
  },
  filtersContainer: {
    width:windowWidth*0.96,
    height:windowHeight*0.5,
    position:'absolute',
    bottom: 0,
    borderColor: primaryDark,
    borderWidth: 2,
    alignSelf: 'center',
    elevation: 10,
    backgroundColor: secondaryLight,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10
  },
  filtersTitle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold'
  },
  picker: {
    height: 45, 
    width: 260,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: "darkgrey"
  },
  closeFiltersButton: {
    alignSelf: 'flex-end',
    position: 'absolute',
    marginTop: 7,
    right: 15,
    width: 30,
    height: 30,
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    width: '70%',
    textAlign: 'center',
    lineHeight: 30,
    marginBottom: '20%',
  },
})

/* export default StyleSheet.create({
    view: {
      flex: 1
    },
    card: {
      position: "absolute",
      bottom: 0,
      alignSelf: "center",
      borderTopStartRadius: 20,
      borderTopEndRadius: 20,
      width: '95%'
    },
    image: {
      width: '100%',
      height: 100,
      marginBottom: 20
    },
    map: {
      width: '100%',
      height: '100%',
    },
    header1: {
      fontSize: 24,
      marginBottom: '20%',
    },
    
}) */