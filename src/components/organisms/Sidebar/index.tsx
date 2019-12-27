import * as React from 'react'
import { Props } from './types'
import { Wrap } from './styles'

export { default as SidebarItem } from './SidebarItem'

const Sidebar: React.FC<Props> = ({ isOpen = true, children }) => {
  return <Wrap isOpen={isOpen}>{children}</Wrap>
}

export default Sidebar
