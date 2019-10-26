import React, { Component } from 'react';
import I18n from '../I18n/i18n';
import {
  ScrollView,
  StyleSheet,
  Button,
  AsyncStorage
} from 'react-native';
import { ListItem } from 'react-native-elements';
/* import storage from 'redux-persist/lib/storage'; */

var list = [
  {
    title:'language',
    icon: 'language',
    state: I18n.locale
  },
  {
    title:'sync',
    icon: 'cloud',
    state: null
  },
]

class Config extends Component {

  /* async _storeData() {
    try {
        await AsyncStorage.setItem('language', 'es');
    } catch (error) {
        {console.warn('Error al guardar')}
    }
  }

  async _retrieveData() {
    try {
        const data = await AsyncStorage.getItem('language');
        if (data !== null) {
            return data
        }
    } catch (error) {
        {console.warn('Error al traer')}
    }
  }

  changeLanguage(lang) {
    I18n.locale = lang;
    this._storeData()
  } */

  render() {
    return (
      <ScrollView>
        {
          list.map((item, i) => (
            <ListItem
              key={i}
              title={I18n.t(item.title)}
              leftIcon={{ name: item.icon }}
              badge={{ value: item.state }}
              bottomDivider
              chevron
            />
          ))
        }
        <Button
          title={I18n.t('spanish')}
          style={styles.button}
          onPress={() => I18n.locale = 'es' }
        />
        <Button
          title={I18n.t('english')}
          style={styles.button}
          onPress={() => I18n.locale = 'en' }
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  button: {
    width: 100,
    textAlign: "left"
  }
});

export default Config;
