import { compose } from 'recompose'
import containers from './containers'
import { Props } from './types'
import AuthTemplate from './views'

export default compose<Props, {}>(containers)(AuthTemplate)
