import React from 'react'
import { 
  View,
  ListView, 
  Text, 
  Image,
  Picker
} from 'react-native'
import FastImage from 'react-native-fast-image'
import styles from './Styles/TrailListStyles'
import { Divider } from 'react-native-elements'
import I18n from '../I18n/i18n'
import trailsAPI from '../Services/SenderoApi'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon_I from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { primaryDark } from '../global.styles'

import TrailsJSON from '../Jsons/senderos-pn-tdf-es.json'


var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class TrailList extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <TouchableOpacity
          hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
          onPress={navigation.getParam('showFilters')}
        >
          <Icon_I
            name="md-more"
            style={{ fontSize: 30, color: 'white', marginRight:25 }}
          />
        </TouchableOpacity>
      ),
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ showFilters: this._showFilters });
  }

  _showFilters = () => {
    this.setState({ showFilters: !this.state.showFilters });
  };

  constructor(props) {
      super(props);
      this.service = trailsAPI.create();
      this.renderRow = this.renderRow.bind(this);
      this.state = {
        showFilters: false,
        difficulty: 'Todos',
        distance: 'Todos',
        time: 'Todos'
      };
  }

  filterTrail(trail) {
    const sDiff = this.state.difficulty;

    const sDistVal = (this.state.distance).split(' ');
    const sDistComp = sDistVal[0];
    const sDist = parseInt(sDistVal[1]);

    const sTimeVal = (this.state.time).split(' ');
    const sTimeComp = sTimeVal[0];
    const sTimeH = parseInt(sTimeVal[1]);
    const sTimeM = parseInt(sTimeVal[2]); 


    const tDist = parseInt((trail.distance).split('k')[0]);
    const tDiff = trail.difficulty;

    const tTimeVal = ((trail.estimated_time).split('h')[0]).split(':'); 
    const tTimeH = parseInt(tTimeVal[0]);
    const tTimeM = parseInt(tTimeVal[1]);

    if (this.state.difficulty !== 'Todos') {
      if (tDiff !== sDiff) {
        return false;
      }
    }

    if (this.state.distance !== 'Todos') {
      if (sDistComp === '>') {
        if (tDist < sDist) {
          return false;
        }

      } else {
        if (tDist > sDist) {
          return false;
        }
      }
    }

    if (this.state.time !== 'Todos') {
      if (sTimeComp === '>') {
        if ((tTimeH < sTimeH) || ((tTimeH == sTimeH) && (tTimeM < sTimeM))) {
          return false;
        }

      } else {
        if ((tTimeH > sTimeH) || ((tTimeH == sTimeH) && (tTimeM > sTimeM))) {
          return false;
        }
      }
    }


    return true;
  }

  renderFilters() {
    if (this.state.showFilters)
      return (
          <View style={styles.filtersContainer}>  

            <View style={styles.filter}>
              <Icon name='hiking' size={25} color={primaryDark}></Icon>
              <View style={styles.picker}>
                <Picker
                  style={{marginTop:-10, marginRight:-10}}
                  selectedValue={this.state.difficulty}
                  onValueChange={(itemValue) => this.setState({difficulty: itemValue})}
                >
                  <Picker.Item label={I18n.t("all")}   value={'Todos'}/>
                  <Picker.Item label={I18n.t("Baja")}  value={'Baja'}/>
                  <Picker.Item label={I18n.t("Media")} value={'Media'}/>
                  <Picker.Item label={I18n.t("Alta")}  value={'Alta'}/>
                </Picker>
              </View>
            </View>

            <View style={styles.filter}>
              <Icon name='route' size={25} color={primaryDark}></Icon>
              <View style={styles.picker}>
                <Picker
                  style={{marginTop:-10, marginRight:-10}}
                  selectedValue={this.state.distance}
                  onValueChange={(itemValue) => this.setState({distance: itemValue})}
                >
                  <Picker.Item label={I18n.t("all")} value={'Todos'}/>
                  <Picker.Item label='< 5km' value={'< 5'}/>
                  <Picker.Item label='> 5km' value={'> 5'}/>
                  <Picker.Item label='< 10km' value={'< 10'}/>
                  <Picker.Item label='> 10km' value={'> 10'}/>
                  <Picker.Item label='< 20km' value={'< 20'}/>
                  <Picker.Item label='> 20km' value={'> 20'}/>
                  <Picker.Item label='> 30km' value={'> 30'}/>
                </Picker>
              </View>
            </View>

            <View style={styles.filter}>
              <Icon name='clock' size={25} color={primaryDark}></Icon>
              <View style={styles.picker}>
                <Picker
                  style={{marginTop:-10, marginRight:-10}}
                  selectedValue={this.state.time}
                  onValueChange={(itemValue) => this.setState({time: itemValue})}
                >
                  <Picker.Item label={I18n.t("all")} value={'Todos'}/>
                  <Picker.Item label='< 1:00hs' value={'< 1 00'}/>
                  <Picker.Item label='> 1:00hs' value={'> 1 00'}/>
                  <Picker.Item label='< 2:00hs' value={'< 2 00'}/>
                  <Picker.Item label='> 2:00hs' value={'> 2 00'}/>
                  <Picker.Item label='> 3:00hs' value={'> 3 00'}/>
                </Picker>
              </View>
            </View>
          </View>
      );
    return null;
  }

  renderRow(rowData) {
    const { navigate } = this.props.navigation;
    const trail = rowData.properties;

    if (this.filterTrail(trail)) {
      return (
        <View 
          key={trail.id}
          style={styles.card}>
          <View style={[styles.rowContent, {justifyContent:"space-between"}]}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.subtitle}>{trail.name}</Text>
          </View>
          <Divider style={{marginVertical:10, height:2, elevation:2, backgroundColor: primaryDark}}></Divider>
          <View style={[styles.rowContent, styles.box]}>
            <Image
              style={styles.image}
              source={{uri: trail.images}}
            />
            <View style={{justifyContent: "space-around", marginLeft:25}}>
              <View style={styles.rowContent}>
                <View style={{width:45, alignItems:"center"}}><Icon name="hiking" size={25} color={'white'}/></View>
                <Text style={styles.text}>{I18n.t(trail.difficulty)}</Text>
              </View>
              <View style={styles.rowContent}>
                <View style={{width:45, alignItems:"center"}}><Icon name="route" size={25} color={'white'}/></View>
                <Text style={styles.text}>{trail.distance}</Text>
              </View>
              <View style={styles.rowContent}>
                <View style={{width:45, alignItems:"center"}}><Icon name="clock" size={25} color={'white'} /></View>
                <Text style={styles.text}>{trail.estimated_time}</Text>
              </View>
            </View>  
          </View>
          <TouchableOpacity
            onPress={ (id=(trail.id)-1) => navigate('trail', {trail: id}) }
          >
            <Text style={styles.info}>{I18n.t("info")}</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return null;
    };
  };

  render() {
    let trails = ds.cloneWithRows(TrailsJSON.features)

    return (
      <View style={styles.content}>
        <ListView
          dataSource={trails}
          renderRow={this.renderRow}
        />

        {this.renderFilters()}
      </View>
    );
  } 
}

