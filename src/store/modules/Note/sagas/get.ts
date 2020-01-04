import { SagaIterator } from 'redux-saga'
import { all, call, put, takeEvery } from 'redux-saga/effects'
import { Actions, getDone, getFail } from '../actions'
import { getNoteAPI } from '../api/get'
import { GET } from '../actionTypes'

function* getNote({ payload }: Actions[typeof GET]): SagaIterator {
  try {
    const getId = {
      id: payload,
    }

    const { data } = yield call(getNoteAPI, getId)
    yield put(getDone(data.getNote))
  } catch (e) {
    yield put(getFail(e))
  }
}

export default function* rootSaga(): SagaIterator {
  yield all([takeEvery(GET, getNote)])
}
