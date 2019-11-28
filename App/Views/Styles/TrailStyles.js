import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  title: {
    marginTop: 5,
    fontSize: 22,
    alignSelf: "flex-start",
    color: 'black',
    fontWeight: 'bold',
  },
  rowContent: {
    flexDirection: "row",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  text: {
    paddingHorizontal: 10
  },
  image: { 
    borderRadius: 10,
    marginTop: 12,
    height: 160,
    marginBottom: 10
  }
});