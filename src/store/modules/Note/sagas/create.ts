import { SagaIterator } from 'redux-saga'
import { all, call, put, takeEvery } from 'redux-saga/effects'
import { Actions, createDone, createFail } from '../actions'
import { create as createNote } from '../api/create'
import { CREATE } from '../actionTypes'
import { CreateNoteMutationVariables } from 'API'

function* create({ payload }: Actions[typeof CREATE]): SagaIterator {
  try {
    const newPost: CreateNoteMutationVariables = {
      input: payload,
    }
    const { data } = yield call(createNote, newPost)
    yield put(createDone(data.createNote))
  } catch (e) {
    yield put(createFail(e))
  }
}

export default function* rootSaga(): SagaIterator {
  yield all([takeEvery(CREATE, create)])
}
