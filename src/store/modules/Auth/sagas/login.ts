import { SagaIterator } from 'redux-saga'
import { all, call, put, takeEvery } from 'redux-saga/effects'
import { Actions, loginDone, loginFail } from '../actions'
import { login as loginService } from '../api/login'
import { LOGIN } from '../actionTypes'

function* login({ payload }: Actions[typeof LOGIN]): SagaIterator {
  try {
    const data = yield call(loginService, payload)
    console.log(data)
    yield put(loginDone(data))
  } catch (e) {
    yield put(loginFail(e))
  }
}

export default function* rootSaga(): SagaIterator {
  yield all([takeEvery(LOGIN, login)])
}
