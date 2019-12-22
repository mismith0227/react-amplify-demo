import { SagaIterator } from 'redux-saga'
import { all, call, put, takeEvery } from 'redux-saga/effects'
import { loginFail } from '../actions'
import { logout as logoutService } from '../api/logout'
import { LOGOUT } from '../actionTypes'

function* logout(): SagaIterator {
  try {
    const response = yield call(logoutService)
    console.log(response)
  } catch (e) {
    yield put(loginFail(e))
  }
}

export default function* rootSaga(): SagaIterator {
  yield all([takeEvery(LOGOUT, logout)])
}
