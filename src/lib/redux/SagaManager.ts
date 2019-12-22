import { SagaIterator, SagaMiddleware } from 'redux-saga'
import { cancel, fork, take } from 'redux-saga/effects'
import { CallableSagaIterator } from './sagaHelpers'

export default class SagaManager {
  public static readonly HMR_CANCEL_SAGA = '@@HMR_CANCEL_SAGA'

  // tslint:disable-next-line readonly-keyword
  public static sagas:
    | CallableSagaIterator
    | ReadonlyArray<CallableSagaIterator>

  public static createCancelAction(): {
    readonly type: typeof SagaManager.HMR_CANCEL_SAGA
  } {
    return {
      type: SagaManager.HMR_CANCEL_SAGA,
    }
  }

  public readonly store: any
  public readonly sagaMiddleware: SagaMiddleware<any>

  constructor(store: any, sagaMiddleware: SagaMiddleware<any>) {
    this.store = store
    this.sagaMiddleware = sagaMiddleware
  }

  public readonly runSaga = (saga: CallableSagaIterator) => {
    if (process.env.NODE_ENV === 'development') {
      // tslint:disable-next-line no-console
      console.log('[Saga]', `Initialized ${saga.name || 'Unnamed saga'}`)
    }
    this.sagaMiddleware.run(this.createCancellableSaga(saga))
  }

  public runSagas(
    sagas: CallableSagaIterator | ReadonlyArray<CallableSagaIterator>
  ): void {
    // tslint:disable-next-line no-object-mutation
    SagaManager.sagas = sagas

    if (!Array.isArray(sagas)) {
      this.runSaga(sagas as CallableSagaIterator)
    } else {
      sagas.forEach(this.runSaga)
    }
  }

  public cancelSagas(): void {
    this.store.dispatch(SagaManager.createCancelAction())
  }

  private readonly createCancellableSaga = (saga: CallableSagaIterator) => {
    if (process.env.NODE_ENV === 'development') {
      return function* cancellableSaga(): SagaIterator {
        const sagaTask = yield fork(saga)
        yield take(SagaManager.HMR_CANCEL_SAGA)
        // tslint:disable-next-line: no-console
        console.log('[Saga]', `Cancelled ${saga.name || 'Unnamed saga'}`)
        yield cancel(sagaTask)
      }
    } else {
      return saga
    }
  }
}
