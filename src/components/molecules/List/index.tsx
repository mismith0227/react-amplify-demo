import * as React from 'react'
import { Props } from './types'
import { Wrap } from './styles'

export { default as ListItem } from './ListItem'

const List: React.FC<Props> = ({ children }) => {
  return <Wrap>{children}</Wrap>
}

export default List
