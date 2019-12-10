import React from 'react';
import {
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { ListItem } from 'react-native-elements';
import I18n from '../I18n/i18n';
import { connect } from 'react-redux';

import styles from './Styles/SettingsStyles';

const settings = [
  {
    name: 'language',
    icon: 'language',
    screen: 'lang'
  },
];

/* {
  name: 'weather',
  icon: 'cloud',
  screen: 'weather'
} */

class Settings extends React.Component {

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={styles.container}>
        {
          settings.map((item) => [
            <TouchableOpacity
                key={item.name}
                onPress={() => {navigate(item.screen)}}
            > 
              <ListItem
                  containerStyle={styles.listitem}
                  title={I18n.t(item.name)}
                  leftIcon={{ name: item.icon }}
                  chevron
              />
            </TouchableOpacity>
          ])
        }
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  language: state.settings.language
});

export default connect(
  mapStateToProps,
  null,
)(Settings);