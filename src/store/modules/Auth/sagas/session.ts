import { SagaIterator } from 'redux-saga'
import { all, call, put, takeEvery } from 'redux-saga/effects'
import { loginDone, loginFail } from '../actions'
import { session as sessionService } from '../api/session'
import { SESSION } from '../actionTypes'

function* session(): SagaIterator {
  try {
    const data = yield call(sessionService)
    yield put(loginDone(data))
  } catch (e) {
    yield put(loginFail(e))
  }
}

export default function* rootSaga(): SagaIterator {
  yield all([takeEvery(SESSION, session)])
}
