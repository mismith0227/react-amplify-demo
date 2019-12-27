import styled from 'styled-components'
import { getColor } from 'styles/colors'
import { px2rem } from 'styles/utils'
import { Props } from './types'

export const Wrap = styled.div<Props>`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: ${({ isOpen }) => (isOpen ? `${px2rem(200)}` : `${px2rem(60)}`)};
  transition: 0.2s;
  background: ${getColor('orange', 600)};
`
