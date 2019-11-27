/* import React, { Component } from 'react'
import I18n from '../I18n/I18n'
import {
  ScrollView,
  Button,
  TouchableOpacity
} from 'react-native'
import { ListItem } from 'react-native-elements'
import styles from './Styles/SettingsStyles'
import SettingsList from '../Components/SettingsList'
import SettingsActions from '../Redux/SettingsRedux'
import { connect } from 'react-redux'


class Settings extends Component {

  handleSubmit = (lang) => {
    I18n.locale = lang;
    this.props.changeLanguage(lang);
  };
  
  render() {
    return (
      <ScrollView>
        <SettingsList />
        <Button
          title={I18n.t('spanish')}
          style={styles.button}
          onPress={ () => this.handleSubmit("es") }
        />
        <Button
          title={I18n.t('english')}
          style={styles.button}
          onPress={ () => this.handleSubmit("en") }
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings.data
});
 
const mapDispatchToProps = (dispatch) => ({
  changeLanguage: (lang) => dispatch(SettingsActions.settingsSuccess({payload: [{language: lang}]}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);

 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import { ListItem } from 'react-native-elements';
import I18n from '../I18n/i18n';


const settings = [
  {
    name: 'language',
    icon: 'language',
    screen: 'lang'
  },
  {
    name: 'weather',
    icon: 'cloud',
    screen: 'weather'
  }
];


class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: '', locale: 'es' }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static navigationOptions = {
    title: I18n.t('settings')
  };

  async componentDidMount() {
    /* const initialState = await loadSettings();

    this.setState(initialState); */
  }

  componentDidUpdate(prevProps, prevState) {
    const locale = this.props.navigation.getParam('locale', null);
    if (locale && prevState.locale !== locale) {
      I18n.locale = locale;
      this.setState({ locale });
    }
  }

  handleNameChange(name) {
    this.setState({ name });
  }

  handleSubmit() {
    saveSettings(this.state);
  }

  render() {
    const currentLocale = this.state.locale;
    const { navigate } = this.props.navigation;

    return (
      <ScrollView>
        {
          settings.map((item) => [
            <TouchableOpacity
                key={item.name}
                onPress={() => navigate('lang', {currentLocale})}
            > 
              <ListItem
                  title={I18n.t(item.name)}
                  leftIcon={{ name: item.icon }}
                  /* badge={{ value: item.state }} */
                  bottomDivider
                  chevron
              />
            </TouchableOpacity>
          ])
        }
      </ScrollView>
    );
  }
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45
  },
  inputContainer: {
    paddingTop: 15
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20
  }
}); */

export default Settings;