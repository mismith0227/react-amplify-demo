import styled from 'styled-components'
import { Props } from './types'
import { getColor } from 'styles/colors'
import { px2rem } from 'styles/utils'

export const Wrap = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: ${({ isOpen }) => (isOpen ? `flex-start` : `center`)};
  padding: ${px2rem(16)} ${px2rem(8)};
  color: ${getColor('gray', 100)};
  transition: 0.2s;
  background: ${getColor('orange', 600)};
  :hover {
    cursor: pointer;
    background: ${getColor('orange', 800)};
  }
`

export const Text = styled.span`
  margin: 0 0 0 ${px2rem(8)};
`
