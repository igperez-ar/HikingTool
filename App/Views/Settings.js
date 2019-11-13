import React, { Component } from 'react'
import I18n from '../I18n/i18n'
import {
  ScrollView,
  Button,
  TouchableOpacity
} from 'react-native'
import { ListItem } from 'react-native-elements'
import styles from './Styles/SettingsStyles'
import SettingsActions from '../Redux/SettingsRedux'
import { connect } from 'react-redux'

const list = [
  {
    title:'language',
    icon: 'language',
    options: {
      name: "spanish"
    }
  },
  {
    title:'weather',
    icon: 'cloud'
  },
]

class Settings extends Component {

  handleSubmit = (lang) => {
    I18n.locale = lang;
    this.props.changeLanguage(lang);
  };
  
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

