import HomeScreen from '../Views/Home';
import MapaScreen from '../Views/Mapa';
import AboutScreen from '../Views/About';
import ConfigScreen from '../Views/Config';
import CameraScreen from '../Views/Camera';
import TrailListScreen from '../Views/TrailList';
import TrailsScreen from '../Views/Trail';

/* Icon key is optional. It must be of type string and its value should match a valid provider icon
  name.
  To omit the icon just pass null on its value.
*/
export default [
  {id: 0, name: 'home',   side: true,  screen: HomeScreen, icon: 'home'},
  {id: 1, name: 'map',    side: true,  screen: MapaScreen, icon: 'compass'},
  {id: 2, name: 'trails', side: true,  screen: TrailListScreen, icon: 'nature'},
  {id: 6, name: 'camera', side: true,  screen: CameraScreen, icon: 'camera'},
  {id: 3, name: 'trail',  side: false, screen: TrailsScreen, icon: 'home'},
  {id: 4, name: 'config', side: true,  screen: ConfigScreen, icon: 'settings'},
  {id: 5, name: 'about',  side: true,  screen: AboutScreen, icon: 'information'},
];
