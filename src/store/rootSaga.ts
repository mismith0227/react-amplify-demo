import { combineSagas } from '../lib/redux/sagaHelpers'

// Modules
import { saga as authSaga } from './modules/Auth'
import { saga as noteSaga } from './modules/Note'

export default combineSagas([authSaga, noteSaga])
