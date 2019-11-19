import HomeScreen      from '../Views/Home'
import MapaScreen      from '../Views/Map'
import AboutScreen     from '../Views/About'
import SettingsScreen  from '../Views/Settings'
import CameraScreen    from '../Views/Camera'
import TrailListScreen from '../Views/TrailList'
import TrailsScreen    from '../Views/Trail'
import WeatherScreen   from '../Views/Weather'
import LangScreen      from '../Views/LanguageSelector'

/* Icon key is optional. It must be of type string and its value should match a valid provider icon
  name.
  To omit the icon just pass null on its value.
*/
export default [
  {id: 0, name: 'home',     side: true,  screen: HomeScreen,      icon: 'home'},
  {id: 1, name: 'map',      side: true,  screen: MapaScreen,      icon: 'compass'},
  {id: 2, name: 'trails',   side: true,  screen: TrailListScreen, icon: 'nature'},
  {id: 3, name: 'camera',   side: true,  screen: CameraScreen,    icon: 'camera'},
  {id: 4, name: 'weather',  side: true,  screen: WeatherScreen,   icon: 'cloud'},
  {id: 5, name: 'trail',    side: false, screen: TrailsScreen,    icon: 'home'},
  {id: 6, name: 'settings', side: true,  screen: SettingsScreen,  icon: 'settings'},
  {id: 7, name: 'about',    side: true,  screen: AboutScreen,     icon: 'information'},
  {id: 8, name: 'lang',     side: false, screen: LangScreen,      icon: 'information'},
];
