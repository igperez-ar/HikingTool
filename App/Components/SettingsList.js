import React from 'react'
import { 
    View, 
    TouchableOpacity
} from 'react-native'
import { ListItem } from 'react-native-elements'
import I18n from '../I18n/i18n';
/* import SettingsListItem from './SettingsListItem'; */

const settings = [
  {
    name: 'language',
    icon: 'language',
    screen: 'LanguageSelector'
  },
  {
    name: 'weather',
    icon: 'cloud',
    screen: 'Weather'
  }
];

class SettingsList extends React.Component {
  render() {
    return (
      <View>
        {
          settings.map((item) => (
            <TouchableOpacity
                onPress={this.props.onPress}
            > 
                <ListItem
                    key={item.name}
                    title={I18n.t(item.name)}
                    onPress={() => this.props.onPressItem(item.screen)}
                    leftIcon={{ name: item.icon }}
                    /* badge={{ value: item.state }} */
                    bottomDivider
                    chevron
                />
            </TouchableOpacity>
          ))
        }
      </View>
    );
  }
};

export default SettingsList;