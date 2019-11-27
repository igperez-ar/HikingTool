import React, { Component } from 'react'
import { 
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { 
  createStackNavigator, 
  createDrawerNavigator, 
  createAppContainer 
} from 'react-navigation';

import HomeScreen from '../Views/Home';
import MapScreen from '../Views/Map';
import CameraScreen from '../Views/Camera';
import TrailScreen from '../Views/Trail';
import TrailListScreen from '../Views/TrailList';
import WeatherScreen from '../Views/Weather';
import SettingsScreen from '../Views/Settings';
import LanguageSelectorScreen from '../Views/LanguageSelector';
import AboutScreen from '../Views/About';

import Icon from 'react-native-vector-icons/MaterialIcons';
import SideMenu from './SideMenu';
import I18n from '../I18n/i18n';

//Navigation Drawer Structure for all screen
class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Text style={{ paddingHorizontal: 8 }}><Icon name="menu" style={{ fontSize: 30 }} /></Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const MainStack = createStackNavigator({
  //All the screen from the First Option will be indexed here
  home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Inicio',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#2ECC40',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
//Stack Navigator for the Second Option of Navigation Drawer
const StackScreen2 = createStackNavigator({
  //All the screen from the Second Option will be indexed here
  map: {
    screen: MapScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Mapa',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
 
      headerStyle: {
        backgroundColor: '#2ECC40',
      },
      headerTintColor: '#fff',
    }),
  },
});

const StackScreen3 = createStackNavigator({
  
  trailist: {
    screen: TrailListScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Senderos',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
 
      headerStyle: {
        backgroundColor: '#2ECC40',
      },
      headerTintColor: '#fff',
    }),
  },
  trail: {
    screen: TrailScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Sendero',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
 
      headerStyle: {
        backgroundColor: '#2ECC40',
      },
      headerTintColor: '#fff',
    }),
  },
});

const StackScreen4 = createStackNavigator({
  
  camera: {
    screen: CameraScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Camara',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
 
      headerStyle: {
        backgroundColor: '#2ECC40',
      },
      headerTintColor: '#fff',
    }),
  },
});

const StackScreen5 = createStackNavigator({
  
  weather: {
    screen: WeatherScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Clima',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
 
      headerStyle: {
        backgroundColor: '#2ECC40',
      },
      headerTintColor: '#fff',
    }),
  },
});

const StackScreen6 = createStackNavigator({
  
  settings: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Ajustes',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
 
      headerStyle: {
        backgroundColor: '#2ECC40',
      },
      headerTintColor: '#fff',
    }),
  },
  lang: {
    screen: LanguageSelectorScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Ajustes',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
 
      headerStyle: {
        backgroundColor: '#2ECC40',
      },
      headerTintColor: '#fff',
    }),
  },
});

const StackScreen7 = createStackNavigator({
  
  about: {
    screen: AboutScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Clima',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
 
      headerStyle: {
        backgroundColor: '#2ECC40',
      },
      headerTintColor: '#fff',
    }),
  },
});

//Drawer Navigator for the Navigation Drawer / Sidebar
const Drawer = createDrawerNavigator(
  {
    //Drawer Optons and indexing
    home: { screen: MainStack },
    map: { screen: StackScreen2 },
    trailist: { screen: StackScreen3 },
    camera: { screen: StackScreen4 },
    weather: { screen: StackScreen5 },
    about: { screen: StackScreen6 },
  },
  {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 120, 
  },
);
export default createAppContainer(Drawer);
