import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
]

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  weatherRequest: ['data'],
  weatherSuccess: ['payload'],
  weatherFailure: null
})

export const WeatherTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  currentDay: {},
  nextDays: [],
  date: {},
  //
  data: null,
  fetching: null,
  payload: null,
  error: null
})

/* ------------- Selectors ------------- */

/* export const WeatherSelectors = {
  getData: state => state.data,
  getCurrentDay: state => state.weather.currentDay,
  getNextDays: state => state.weather.nextDays,
} */

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  const today = new Date();
  const newDate = {
    'year': today.getFullYear(),
    'month': monthNames[today.getMonth()],
    'day': today.getDate() < 10 ? ('0' + today.getDate()) : today.getDate(),
    'hour': today.getHours() < 10 ? ('0' + today.getHours()) : today.getHours(),
    'minutes': today.getMinutes() < 10 ? ('0' + today.getMinutes()) : today.getMinutes(),
  }
  return state.merge({
         fetching: false,
         error: null,
         data: payload,
         date: newDate,
         currentDay: payload.DailyForecasts[0],
         nextDays: [payload.DailyForecasts[1], payload.DailyForecasts[2], payload.DailyForecasts[3], payload.DailyForecasts[4]]
        })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.WEATHER_REQUEST]: request,
  [Types.WEATHER_SUCCESS]: success,
  [Types.WEATHER_FAILURE]: failure
})
