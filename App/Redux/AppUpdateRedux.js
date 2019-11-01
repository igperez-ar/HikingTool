import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  appUpdateIsUpdating: null,
  appUpdateIsNotUpdating: null,
})

export const AppUpdateTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  updating: false,
})

/* ------------- Selectors ------------- */

export const AppUpdateSelectors = {
  isUpdating: state => state.appUpdate.updating,
}

/* ------------- Reducers ------------- */

export const setIsUpdating = (state) =>
  state.merge({ updating: true })

export const setIsNotUpdating = (state) =>
  state.merge({ updating: false })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.APP_UPDATE_IS_UPDATING]: setIsUpdating,
  [Types.APP_UPDATE_IS_NOT_UPDATING]: setIsNotUpdating,
})
