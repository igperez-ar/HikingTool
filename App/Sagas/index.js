import { takeLatest, all } from 'redux-saga/effects'
//import API from '../Services/Api'
//import FixtureAPI from '../Services/FixtureApi'
//import DebugConfig from '../Config/DebugConfig'

import WeatherAPI from '../Services/WeatherApi'

/* ------------- Types ------------- */

//import { StartupTypes } from '../Redux/StartupRedux'
//import { GithubTypes } from '../Redux/GithubRedux'
//
import { WeatherTypes } from '../Redux/WeatherRedux'

/* ------------- Sagas ------------- */

//import { startup } from './StartupSagas'
//import { getUserAvatar } from './GithubSagas'
//
import { getWeather } from './WeatherSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
//const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

// Weather API creation
const wApi = WeatherAPI.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    //takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    //takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api),

    //
    takeLatest(WeatherTypes.WEATHER_REQUEST, getWeather, wApi)
  ])
}
