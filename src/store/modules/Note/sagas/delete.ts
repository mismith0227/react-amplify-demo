import { SagaIterator } from 'redux-saga'
import { all, call, put, takeEvery } from 'redux-saga/effects'
import { Actions, deleteDone, deleteFail } from '../actions'
import { deleteNoteAPI } from '../api/delete'
import { DELETE } from '../actionTypes'

function* deleteNote({ payload }: Actions[typeof DELETE]): SagaIterator {
  try {
    const deleteId = {
      id: payload,
    }

    const { data } = yield call(deleteNoteAPI, deleteId)
    yield put(deleteDone(data.deleteNote.id))
  } catch (e) {
    yield put(deleteFail(e))
  }
}

export default function* rootSaga(): SagaIterator {
  yield all([takeEvery(DELETE, deleteNote)])
}
