import React from 'react'
import 'index.css'
import { ConnectedRouter } from 'connected-react-router'
import Routes from './routes'
import Amplify from 'aws-amplify'
import config from 'aws-exports'
import { Provider as StoreProvider } from 'react-redux'
import { configureStore } from 'store'
import history from 'store/history'
Amplify.configure(config)

const store = configureStore()

const App = () => (
  <StoreProvider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </StoreProvider>
)

export default App
