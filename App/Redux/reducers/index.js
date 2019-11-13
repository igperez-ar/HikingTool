import { combineReducers } from 'redux';
import routes from './routes';

const rootReducer = combineReducers({
  routes,
  
  settings: require('../SettingsRedux').reducer,
});

export default rootReducer;