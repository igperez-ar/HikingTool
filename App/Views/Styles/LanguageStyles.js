import { StyleSheet } from 'react-native';
import { secondaryLight } from '../../global.styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: secondaryLight
  },
  listItem: {
    height: 60,
    backgroundColor: 'rgba(255,255,255,0.4)',
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderColor: 'darkgrey',
    borderBottomWidth: 1,
  },
  textWrapper: {
    width: '90%',
    marginLeft: 10
  },
  title: {
    fontSize: 18,
    color: '#434343'
  },
  subtitle: {
    color: '#AAAAAA'
  },
  active: {
    color: '#03a87c'
  }
});