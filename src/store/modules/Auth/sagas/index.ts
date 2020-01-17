import { SagaIterator } from 'redux-saga'
import { all, call } from 'redux-saga/effects'
import session from './session'
import signup from './signup'
import login from './login'
import logout from './logout'

export default function* authSaga(): SagaIterator {
  yield all([call(session), call(signup), call(login), call(logout)])
}
