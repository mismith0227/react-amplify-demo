import { SagaIterator } from 'redux-saga'
import { all } from 'redux-saga/effects'

export type CallableSagaIterator = () => SagaIterator

export function combineSagas(
  sagas: ReadonlyArray<CallableSagaIterator> = []
): CallableSagaIterator {
  const sagaNames = sagas.map(saga => saga.name || 'Unnamed saga')

  const combinedSaga = function*(): any {
    yield all(sagas.map(saga => saga()))
  }

  Object.defineProperty(combinedSaga, 'name', {
    value: `combinedSaga(${sagaNames.join(', ')})`,
  })

  return (combinedSaga as unknown) as CallableSagaIterator
}
