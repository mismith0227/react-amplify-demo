import { SagaIterator } from 'redux-saga'
import { all, call, put, takeEvery, select } from 'redux-saga/effects'
import { Actions, createDone, createFail } from '../actions'
import { create as createNote } from '../api/create'
import { CREATE } from '../actionTypes'
import { CreateNoteMutationVariables } from 'API'
import { selectors as authSelectors } from 'store/modules/Auth'
import { push } from 'connected-react-router'

function* create({ payload }: Actions[typeof CREATE]): SagaIterator {
  try {
    const authUser = yield select(authSelectors.getUser)
    const newPost: CreateNoteMutationVariables = {
      input: {
        ...payload,
        owner: authUser.username,
      },
    }
    const { data } = yield call(createNote, newPost)
    yield put(createDone(data.createNote))
    yield put(push('/home'))
  } catch (e) {
    yield put(createFail(e))
  }
}

export default function* rootSaga(): SagaIterator {
  yield all([takeEvery(CREATE, create)])
}
