import { SagaIterator } from 'redux-saga'
import { all, call, put, takeEvery, select } from 'redux-saga/effects'
import { listDone, listFail } from '../actions'
import { list as listNote } from '../api/list'
import { selectors as authSelectors } from 'store/modules/Auth'
import { LIST } from '../actionTypes'

function* list(): SagaIterator {
  try {
    const authUser = yield select(authSelectors.getUser)
    const { data } = yield call(listNote, authUser.username)
    yield put(listDone(data.listNotesSortedByCreatedAt.items))
  } catch (e) {
    yield put(listFail(e))
  }
}

export default function* rootSaga(): SagaIterator {
  yield all([takeEvery(LIST, list)])
}
