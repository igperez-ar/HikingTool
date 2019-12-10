import { StyleSheet, Dimensions } from 'react-native'
import { primary, primaryDark, secondaryLight, secondaryDark, primaryLight} from '../../global.styles'

export default StyleSheet.create({
  container: {
    backgroundColor: secondaryLight
  },
  rowContent: {
    flexDirection: "row",
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    elevation: 2,
    borderRadius: 10,
    borderColor: primaryDark,
    borderWidth: 1,
    marginBottom: 20,
    marginHorizontal: 7,
    width: Dimensions.get('window').width - 120
  },
  cardTitle: {
    fontSize: 15,
    color: 'white',
    fontWeight: "bold"
  },
  cardTitleContainer: {
    backgroundColor: primaryLight,
    borderBottomColor: primaryDark,
    borderBottomWidth: 1,
    borderTopStartRadius: 9,
    borderTopEndRadius: 9,
    padding: 10
  },
  cardContent: {
    alignItems: "center",
    padding: 10
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
  especieCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderColor: primaryDark,
    borderWidth: 1,
    elevation: 5,
    borderRadius: 10,
    marginBottom: 15,
    width: Dimensions.get('window').width - 30
  },
  especieContent: {
    flexDirection: 'row', 
    justifyContent:"space-between",
    padding: 10,
    paddingHorizontal: 20
  },
  especieImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "grey"
  },
  titleContainer: {
    marginTop: 25,
    marginBottom: 15,
    paddingVertical: 15,
    backgroundColor: secondaryDark,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    paddingLeft: 15,
    elevation: 5,
    width: Dimensions.get('window').width - 20
  },
  subtitle2: {
    fontSize: 25,
    fontWeight: 'bold',
    color: primary,
  },
  subtitle3: {
    fontSize: 14,
    color: 'black',
    marginTop: 10,
  },
  importantTitle: {
    textAlign: 'center',
    marginTop: 15,
    color: 'darkred',
    fontWeight: 'bold',
    fontSize: 16,
  },
  importantText: {
    textAlign: "center",
    fontSize: 15,
    marginBottom: 10 
  },
  detailsContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingBottom: 10,
    borderRadius: 5,
    borderTopRightRadius: 50,
    borderColor: primaryDark,
    borderWidth: 1,
    elevation: 2
  },  
  button: {
    fontSize: 17,
    fontWeight: "bold",
    backgroundColor: 'rgba(140, 190, 200, 0.50)',
    borderColor: 'rgba(140, 190, 200, 0.85)',
    borderWidth: 2,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    textAlign: "center"
  },  
  text: {
    paddingHorizontal: 10
  },
  title: {
    fontSize: 25,
    marginBottom: 2,
    color: primary,
    textAlign: "center",
    fontWeight: 'bold'
  },
  divider: {
    height: 2,   
    width: '80%', 
    backgroundColor: primary,
    elevation: 2
  },
  image: { 
    height: 200
  }
});