import * as React from 'react'
import { Props } from './types'
import { Wrap } from './styles'

const ListItem: React.FC<Props> = ({ children, onClick, className, key }) => {
  return (
    <Wrap key={key} onClick={onClick} className={className}>
      {children}
    </Wrap>
  )
}

export default ListItem
