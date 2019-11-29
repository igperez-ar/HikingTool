import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: 'rgba(145, 200, 210, 0.4)'
  },
  row: {
    marginTop: 10
  },
  rowContent: {
    flexDirection: "row",
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    elevation: 10,
    padding: 20,
    paddingTop: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 20,
    marginHorizontal: 10,
    width: Dimensions.get('window').width - 120
  },
  especieCard: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    elevation: 10,
    padding: 20,
    paddingTop: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 20,
    marginHorizontal: 10,
    width: Dimensions.get('window').width - 30
  },
  especieImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "grey"
  },
  title: {
    marginTop: 5,
    fontSize: 22,
    alignSelf: "flex-start",
    color: 'black',
    fontWeight: 'bold'
  },
  titleContainer: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 10,
    /* borderBottomRightRadius: 50, */
    borderTopRightRadius: 60,
    width: Dimensions.get('window').width - 30
  },
  subtitle2: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  subtitle3: {
    fontSize: 14,
    color: 'black',
    marginTop: 10,
  },
  cardTitle: {
    fontSize: 14,
    color: 'black',
    marginTop: 5,
    fontWeight: "bold"
  },
  detailsContainer: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginHorizontal: 10,
    paddingHorizontal: 15,
    paddingBottom: 10,
    borderTopRightRadius: 50
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
  badge: {
    position: "absolute",
    width: 40,
    height: 32,
    borderRadius: 0,
    borderBottomLeftRadius: 15,
    top: -14,
    left: -17
  },
  text: {
    paddingHorizontal: 10
  },
  image: { 
    height: 200
  }
});