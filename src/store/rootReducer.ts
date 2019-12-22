import { combineReducers, Reducer } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as authReducer } from './modules/Auth'
import { reducer as noteReducer } from './modules/Note'
import history from './history'

import { Action, State } from '../types/redux'

const reducer: Reducer<State, Action> = combineReducers({
  auth: authReducer,
  note: noteReducer,
  router: connectRouter(history),
})

export default reducer
