import { SagaIterator } from 'redux-saga'
import { all, call } from 'redux-saga/effects'
import create from './create'
import update from './update'
import list from './list'
import deleteNote from './delete'
import getNote from './get'

export default function* noteSaga(): SagaIterator {
  yield all([
    call(create),
    call(update),
    call(list),
    call(deleteNote),
    call(getNote),
  ])
}
