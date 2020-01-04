import { SagaIterator } from 'redux-saga'
import { all, call, put, takeEvery } from 'redux-saga/effects'
import { Actions, updateDone, updateFail } from '../actions'
import { update as updateNote } from '../api/update'
import { UPDATE } from '../actionTypes'
import { UpdateNoteMutationVariables } from 'API'

function* update({ payload }: Actions[typeof UPDATE]): SagaIterator {
  try {
    const updatePost: UpdateNoteMutationVariables = {
      input: payload,
    }
    const { data } = yield call(updateNote, updatePost)
    yield put(updateDone(data.updateNote))
  } catch (e) {
    yield put(updateFail(e))
  }
}

export default function* rootSaga(): SagaIterator {
  yield all([takeEvery(UPDATE, update)])
}
