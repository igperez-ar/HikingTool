import React, {Component} from 'react';
import {
  StyleSheet,
  Dimensions,
  Platform,
  View,
  StatusBar,
  DrawerLayoutAndroid,
} from 'react-native';
import createStore from './App/Redux';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import reducer from './App/Redux/reducers';
import { setNavigator, setActiveRoute } from "./App/Redux/actions";
import DrawerContent from './App/Navigation/DrawerContent';
import Toolbar from './App/Navigation/Toolbar';
import AppNavigation from './App/Navigation/AppNavigation';
import { bgStatusBar, bgDrawer } from './App/global.styles';

let store = createStore();
/* getDrawerWidth       Default drawer width is screen width - header width
* https://material.io/guidelines/patterns/navigation-drawer.html
*/
const getDrawerWidth = () => Dimensions.get('window').width - (Platform.OS === 'android' ? 56 : 64);

export default class App extends Component {
  constructor() {
    super();

    this.drawer = React.createRef();
    this.navigator = React.createRef();
  }

  componentDidMount() {
    store.dispatch(setNavigator(this.navigator.current));
  }

  openDrawer = () => {
    this.drawer.current.openDrawer();
  };

  closeDrawer = () => {
    this.drawer.current.closeDrawer();
  };

  getActiveRouteName = navigationState => {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
      return getActiveRouteName(route);
    }
    return route.routeName;
  };

  render() {
    return (
      <Provider store={store}>
        <DrawerLayoutAndroid
          drawerWidth={getDrawerWidth()}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={
            () => <DrawerContent closeDrawer={this.closeDrawer} />
          }
          drawerBackgroundColor={bgDrawer}
          ref={this.drawer}
        >
          <View style={styles.container}>
            <StatusBar
                translucent
                backgroundColor={bgStatusBar}
                animated
            />
            <Toolbar showMenu={this.openDrawer} />
            <AppNavigation
              onNavigationStateChange={(prevState, currentState) => {
                const currentScreen = this.getActiveRouteName(currentState);
                store.dispatch(setActiveRoute(currentScreen));
              }}
              ref={this.navigator}
            />
          </View>
        </DrawerLayoutAndroid>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
