import { StyleSheet, Dimensions } from 'react-native'

const windowWidth= Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  },
  optionsButton: {
    position: 'absolute',
    right: 10,
    width: 55,
    height: 55,
    elevation: 2,
    borderRadius: 30,
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
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
  image: {
    width: '100%',
    height: 100,
    marginBottom: 20
  },
  divider: {
    marginVertical: 15, 
    height: 1, 
    elevation: 1
  },
  detailsContainer: {
    padding: 20,
    width:windowWidth*0.96,
    height:windowHeight*0.41,
    position:'absolute',
    bottom: 0,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.8,
    shadowOffset: {width: 2, height: 5},
    elevation: 1
  },
  detailsTitle: {
    alignSelf: "flex-start",
    fontSize: 15,
    fontWeight: "bold"
  },
  filtersContainer: {
    padding: 20,
    width:windowWidth*0.96,
    height:windowHeight*0.5,
    position:'absolute',
    bottom: 0,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10
  },
  filtersTitle: {
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'robotto',
    color: 'black',
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
    marginTop: 11,
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