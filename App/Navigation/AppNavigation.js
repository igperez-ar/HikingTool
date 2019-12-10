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
import { bgHeader } from '../global.styles';

import HomeScreen from '../Views/Home';
import MapScreen from '../Views/Map';
import CameraScreen from '../Views/Camera';
import TrailScreen from '../Views/Trail';
import TrailListScreen from '../Views/TrailList';
import WeatherScreen from '../Views/Weather';
import SettingsScreen from '../Views/Settings';
import LanguageSelectorScreen from '../Views/LanguageSelector';
import AboutScreen from '../Views/About';
import InterestPointScreen from '../Views/InterestPoint';
import FloraScreen from '../Views/Flora';
import WildlifeScreen from '../Views/Wildlife';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SideMenu from './SideMenu';
import I18n from '../I18n/i18n';

//Navigation Drawer Structure for all screen
class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  
  goBack = () => {
    this.props.navigationProps.goBack();
  };

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity 
          style={{ paddingLeft: 15 }}
          onPress={ this.props.navigationProps.state.routeName === 'home' ? 
                    this.toggleDrawer.bind(this) : 
                    this.goBack.bind(this) }
        >
          <Text>
            <Icon 
              name={this.props.navigationProps.state.routeName === 'home' ? "menu" : "arrow-left"} 
              style={{ color: 'white', fontSize: 30 }} 
            />
          </Text>
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
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: bgHeader,
      },
      headerTintColor: '#fff',
    }),
  },
  map: {
    screen: MapScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: bgHeader,
      },
      headerTintColor: '#fff',
    }),
  },
  trailist: {
    screen: TrailListScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: bgHeader,
      },
      headerTintColor: '#fff',
    }),
  },
  trail: {
    screen: TrailScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: bgHeader,
      },
      headerTintColor: '#fff',
    }),
  },
  interestPoint: {
    screen: InterestPointScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: bgHeader,
      },
      headerTintColor: '#fff',
    }),
  },
  flora: {
    screen: FloraScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: bgHeader,
      },
      headerTintColor: '#fff',
    }),
  },
  wildlife: {
    screen: WildlifeScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: bgHeader,
      },
      headerTintColor: '#fff',
    }),
  },
  camera: {
    screen: CameraScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: bgHeader,
      },
      headerTintColor: '#fff',
    }),
  },
  weather: {
    screen: WeatherScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: bgHeader,
      },
      headerTintColor: '#fff',
    }),
  },
  settings: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: bgHeader,
      },
      headerTintColor: '#fff',
    }),
  },
  lang: {
    screen: LanguageSelectorScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: bgHeader,
      },
      headerTintColor: '#fff',
    }),
  },
  about: {
    screen: AboutScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: bgHeader,
      },
      headerTintColor: '#fff',
    }),
  },
});

const Drawer = createDrawerNavigator(
  {
    home: {screen: MainStack},
  },
  {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 70, 
    drawerBackgroundColor: 'transparent'
  },
);

export default createAppContainer(Drawer);

/* const MainStack = createStackNavigator({
  //All the screen from the First Option will be indexed here
  home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Inicio',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: bgHeader,
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
        backgroundColor: bgHeader,
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
        backgroundColor: bgHeader,
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
        backgroundColor: bgHeader,
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
        backgroundColor: bgHeader,
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
        backgroundColor: bgHeader,
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
        backgroundColor: bgHeader,
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
        backgroundColor: bgHeader,
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
        backgroundColor: bgHeader,
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
export default createAppContainer(Drawer); */
