import { SagaIterator } from 'redux-saga'
import { all, call } from 'redux-saga/effects'
import create from './create'
import list from './list'
import deleteNote from './delete'

export default function* noteSaga(): SagaIterator {
  yield all([call(create), call(list), call(deleteNote)])
}
