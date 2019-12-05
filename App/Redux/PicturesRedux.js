import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  picturesRequest: ['data'],
  picturesSuccess: ['payload'],
  picturesFailure: null,
  //
  savePicture: ['data']
})

export const PicturesTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null,
  //
  pictures: []
})

/* ------------- Selectors ------------- */

export const PicturesSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })

//Se almacena la fotografía
export const savePicture = (state, { data }) => {
  return state.merge({ pictures: data })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PICTURES_REQUEST]: request,
  [Types.PICTURES_SUCCESS]: success,
  [Types.PICTURES_FAILURE]: failure,
  //
  [Types.SAVE_PICTURE]: savePicture,
})
