import { SagaIterator } from 'redux-saga'
import { all, call, put, takeEvery } from 'redux-saga/effects'
import { listDone, listFail } from '../actions'
import { list as listNote } from '../api/list'
import { LIST } from '../actionTypes'

function* list(): SagaIterator {
  try {
    const { data } = yield call(listNote)
    yield put(listDone(data.listNotes.items))
  } catch (e) {
    yield put(listFail(e))
  }
}

export default function* rootSaga(): SagaIterator {
  yield all([takeEvery(LIST, list)])
}
