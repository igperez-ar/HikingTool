import { StyleSheet, Dimensions } from 'react-native'
import { primaryDark, primary, primaryLight, secondaryLight, secondaryDark } from '../../global.styles'

export default StyleSheet.create({
  filtersContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopColor: primaryDark,
    borderTopWidth: 2,
    elevation: 10,
    paddingTop: 10, 
    backgroundColor: secondaryDark
  },
  filter: {
    alignItems: "center"
  },
  picker: {
    width: 110,
    height: 30,
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 2
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: primaryDark
  },
  card: {
    backgroundColor: primaryLight,
    elevation: 10,
    padding: 20,
    borderRadius: 15,
    marginHorizontal: 10,
    marginVertical: 10
  },
  rowContent: {
    flexDirection: "row"
  },
  content: {
    flex: 1,
    backgroundColor: secondaryLight
  },
  text: {
    color: 'white', 
    fontWeight: 'bold',
    textAlignVertical: 'center'
  },
  box: {
    paddingTop: 5,
    paddingBottom: 15,
    paddingHorizontal: 30
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
  titleContainer:{
    marginTop: 10,
    marginBottom: 5,
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 25,
    marginTop: 25,
    marginLeft: 15,
    marginBottom: 2,
    color: primary,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 20,
    height: 30,
    fontWeight: 'bold',
    color: 'white'
  }
})