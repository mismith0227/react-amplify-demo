import * as React from 'react'
import { Props } from './types'
import { Wrap, Text } from './styles'

const SidebarItem: React.FC<Props> = ({
  isOpen = true,
  children,
  onClick,
  icon,
  className,
}) => {
  return (
    <Wrap isOpen={isOpen} onClick={onClick} className={className}>
      {icon}
      {isOpen && <Text>{children}</Text>}
    </Wrap>
  )
}

export default SidebarItem
