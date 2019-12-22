import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
import { routerMiddleware } from 'connected-react-router'
import rootSaga from './rootSaga'
import SagaManager from '../lib/redux/SagaManager'
import history from './history'

export type AppState = ReturnType<typeof rootReducer>

const sagaMiddleware = createSagaMiddleware()

export const configureStore = () => {
  const middlewares: ReadonlyArray<any> = [
    sagaMiddleware,
    routerMiddleware(history),
  ]

  const middleWareEnhancer = applyMiddleware(...middlewares)

  const store = createStore(rootReducer, middleWareEnhancer)

  const sagaManager = new SagaManager(store, sagaMiddleware)
  sagaManager.runSagas(rootSaga)

  return store
}
