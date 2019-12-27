import * as React from 'react'
import Icon from '..'
import { ParentProps } from '../types'

export type Props = ParentProps

const ArrowIcon = (props: Props) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
    </Icon>
  )
}

export default ArrowIcon
