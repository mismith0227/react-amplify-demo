import styled from 'styled-components'
import { Props } from './types'
import { getColor } from 'styles/colors'
import { px2rem } from 'styles/utils'

export const Wrap = styled.div<Props>`
  padding: ${px2rem(16)} ${px2rem(8)};
  transition: 0.2s;
  border-bottom: ${px2rem(1)} solid ${getColor('gray', 400)};
  :hover {
    background: ${getColor('gray', 200)};
  }
`

export const Text = styled.span`
  margin: 0 0 0 ${px2rem(8)};
`
