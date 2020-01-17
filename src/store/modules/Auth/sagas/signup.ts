import { SagaIterator } from 'redux-saga'
import { all, call, put, takeEvery } from 'redux-saga/effects'
import { Actions, signupDone, signupFail } from '../actions'
import { signup as signupService } from '../api/signup'
import { SIGNUP } from '../actionTypes'

function* signup({ payload }: Actions[typeof SIGNUP]): SagaIterator {
  try {
    const data = yield call(signupService, payload)
    console.log(data)
    yield put(signupDone(data))
  } catch (e) {
    yield put(signupFail(e))
  }
}

export default function* rootSaga(): SagaIterator {
  yield all([takeEvery(SIGNUP, signup)])
}
