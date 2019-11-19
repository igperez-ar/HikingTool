import React from 'react';
import { View } from 'react-native';
import I18n from '../I18n/i18n';

import LanguageListItem from '../Components/LanguageListItem';

const languages = [
  {
    locale: 'en',
    name: 'English'
  },
  {
    locale: 'es',
    name: 'Español',
    englishName: 'Spanish'
  }
];

class LanguageSelectorScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings'
  };

  render() {
    const { navigate } = this.props.navigation;
    const currentLocale = navigation.getParam('currentLocale');

    return (
      <View style={{ marginTop: 15 }}>
        {
          languages.map((language) => (
            <LanguageListItem
              key={language.locale}
              isActive={language.locale === currentLocale}
              locale={language.locale}
              name={language.name}
              englishName={language.englishName}
              onChangeLocale={(locale) => navigate('settings', { locale })}
            />
          ))
        }
      </View>
    );
  }
}

export default LanguageSelectorScreen;