import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  languageRequest: ['data'],
  languageSuccess: ['payload'],
  languageFailure: null,
  //
  //valores posibles por ahora: [es, en]
  changeLanguage: ['lang'],
})

export const LanguageTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null,
  //
  language: 'en',
})

/* ------------- Selectors ------------- */

export const LanguageSelectors = {
  getLanguage: state => state.language
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

//
export const changeLanguage = (state, { lang }) => {
  return state.merge({ language: lang })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LANGUAGE_REQUEST]: request,
  [Types.LANGUAGE_SUCCESS]: success,
  [Types.LANGUAGE_FAILURE]: failure,
  //
  [Types.CHANGE_LANGUAGE]: changeLanguage,
})
