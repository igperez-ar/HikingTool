import { StyleSheet } from 'react-native'
import { secondaryLight, primary } from '../../global.styles';

export default StyleSheet.create({
  container: {
    backgroundColor: secondaryLight,
    padding: 20
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'justify'
  },
  title: {
    fontSize: 25,
    marginBottom: 2,
    color: primary,
    textAlign: "center",
    fontWeight: 'bold'
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 5,
    marginBottom: 10
  },
  titleDivider: {
    height: 1,
    width: 220,
    backgroundColor: primary,
    elevation: 1
  },
  social: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  socialText: {
    marginBottom: 5,
    color: 'darkcyan'
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardMiembro: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    marginVertical: 5,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 2
  },
  divider: {
    backgroundColor: 'darkgrey',
    height: 1,
    marginBottom: 5,
    marginTop: 5,
  },
})