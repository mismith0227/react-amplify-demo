import { Reducer } from 'redux'
import * as actionTypes from './actionTypes'
import { Action } from './actions'
import { User } from './types'

export interface State {
  readonly info: User | null
  readonly loading: boolean
  readonly failed: { readonly [requestType: string]: boolean }
}

export const initialState = {
  info: null,
  loading: true,
  failed: {},
}

export const reducer: Reducer<State, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case actionTypes.LOGIN_DONE:
      return {
        ...state,
        info: action.payload,
        loading: false,
      }
    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        info: null,
        loading: false,
      }
    case actionTypes.LOGIN:
      return {
        ...state,
        loading: true,
      }
    default:
      // Detect unhandled action type
      return state
  }
}
