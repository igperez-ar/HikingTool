import React from 'react'
import { 
  View,
  ListView, 
  Text, 
  Button, 
  ActivityIndicator,
  Image,
  Alert
} from 'react-native'
import styles from './Styles/TrailListStyles'
import { Card } from 'react-native-elements'
import I18n from '../I18n/i18n'
import trailsAPI from '../Services/SenderoApi'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class TrailList extends React.Component {

  static navigationOptions =  {
    headerRight: 
      <TouchableOpacity
        onPress={ () => alert("Filtrado") } 
      >
        <Icon
          name="md-more"
          style={{ fontSize: 35, color: 'white', marginRight:25 }}
        />
      </TouchableOpacity>
  };

  constructor(props) {
      super(props);
      this.service = trailsAPI.create();
      this.renderRow = this.renderRow.bind(this);
      this.state = {
        isLoading: true,
        trails: ds,
      };
  }

  componentDidMount () {
    this.service.getList()
    .then((result) => {
      return result.data
    })
    .then((trails) => {
      this.setState({ 
        trails: ds.cloneWithRows(trails)
        }),
        this.setState({
        isLoading: false,
      })
    })
  }

  renderRow(rowData) {
    const { navigate } = this.props.navigation;
    
    return (
      <Card title={rowData.nombre}>
        <View style={styles.content}>
          <Image
            style={styles.image}
            source={{uri: 'https://placeimg.com/640/480/nature'}}
          />
          <View>
            <Text>{I18n.t('difficulty')}: {rowData.dificultad}</Text>
            <Text>{I18n.t('aproxTime')}:  {rowData.ida_hr}min</Text>
            <Text>{I18n.t('selfGuided')}: {rowData.autoguiado === 0 ? 'No' : 'Si'}</Text>
          </View>
        </View>
        <Button
          title={I18n.t('seeTrail')}
          onPress={ () => navigate('trail', {trail: rowData}) }
        />
      </Card>
    );
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 30}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View>
        <ListView
          dataSource={this.state.trails}
          renderRow={this.renderRow}
        />
      </View>
    );
  } 
}
