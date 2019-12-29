import { Reducer } from 'redux'
import * as actionTypes from './actionTypes'
import { Action } from './actions'
import { Note } from './types'

export interface State {
  readonly entities: { readonly [id: string]: Note }
  readonly loading: boolean
  readonly failed: { readonly [requestType: string]: boolean }
}

export const initialState: State = {
  entities: {},
  loading: false,
  failed: {},
}

export const reducer: Reducer<State, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case actionTypes.CREATE:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.LIST_DONE:
      return {
        ...state,
        entities: action.payload.reduce(
          (acc: object, note: Note) => ({
            ...acc,
            [note.id]: note,
          }),
          state.entities
        ),
      }

    case actionTypes.CREATE_DONE:
      return {
        ...state,
        entities: {
          ...state.entities,
          [action.payload.id]: action.payload,
        },
        loading: false,
      }

    case actionTypes.DELETE_DONE:
      return {
        ...state,
        entities: Object.keys(state.entities)
          .filter(id => {
            return id !== action.payload
          })
          .reduce((obj, key) => ({ ...obj, [key]: state.entities[key] }), {}),
      }

    default:
      // Detect unhandled action type
      return state
  }
}
