import React from 'react';
import { 
  Alert, 
  View, 
  TouchableOpacity, 
  Text 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import I18n from '../I18n/i18n';
import SettingsActions from '../Redux/SettingsRedux';
import { connect } from 'react-redux';

import styles from './Styles/LanguageStyles';

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

class LanguageSelector extends React.Component {

  handleSubmit = (locale) => {
    I18n.locale = locale;
    this.props.change_language(locale);
    this.props.navigation.navigate('settings');
  };

  handleLocaleChange = (locale) => {
    Alert.alert(
      I18n.t('change_language'),
      null,
      [
        {
          text: I18n.t('accept'),
          onPress: () => this.handleSubmit(locale),
          style: 'destructive'
        },
        {
          text: I18n.t('cancel'),
          style: 'cancel'
        }
      ]
    )
  }

  render() {
    const currentLocale = this.props.language;

    return (
      <View style={styles.container}>
        {
          languages.map((language) => (
            <TouchableOpacity
              key={language.locale}
              style={styles.listItem}
              onPress={() => this.handleLocaleChange(language.locale)}
            >
              <View style={styles.textWrapper}>
                <Text style={[
                  styles.title, ((language.locale === currentLocale) && styles.active)
                ]}>
                  {language.name}
                </Text>
                {
                  language.englishName &&
                    <Text style={styles.subtitle}>{language.englishName}</Text>
                }
              </View>
              {
                (language.locale === currentLocale) &&
                  <Icon
                    style={styles.active}
                    name="ios-checkmark-circle-outline"
                    size={30}
                  />
              }
            </TouchableOpacity>
          ))
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  language: state.settings.language
});
 
const mapDispatchToProps = (dispatch) => ({
  change_language: (lang) => dispatch(SettingsActions.changeLanguage(lang))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LanguageSelector);