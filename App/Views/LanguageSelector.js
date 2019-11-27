import React from 'react';
import { 
  Alert, 
  View, 
  StyleSheet, 
  TouchableOpacity, 
  Text 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import I18n from '../I18n/i18n';
import SettingsActions from '../Redux/SettingsRedux';
import { connect } from 'react-redux';

/* import LanguageListItem from '../Components/LanguageListItem'; */

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

  constructor(props) {
    super(props);
  }

  /* static navigationOptions = {
    title: 'Settings'
  }; */

  handleSubmit = (locale) => {
    I18n.locale = locale;
    this.props.change_language(locale);
    this.props.navigation.push('settings');
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
    const currentLocale = this.props.navigation.getParam('currentLocale');
    const lang = this.props.settings.language;

    return (

      <View style={{ marginTop: 15 }}>
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

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignItems: 'center',
    padding: 10
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

/* export default LanguageSelector; */

const mapStateToProps = state => ({
  settings: state.settings.language
});
 
const mapDispatchToProps = (dispatch) => ({
  change_language: (lang) => dispatch(SettingsActions.changeLanguage(lang))
});
/* 
const mapDispatchToProps = (dispatch) => {
  return {
    change_language: (lang) => { dispatch(SettingsActions.changeLanguage({language: lang}))}
  }
} */

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LanguageSelector);