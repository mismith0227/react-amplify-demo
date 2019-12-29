import styled from 'styled-components'
import { getColor } from 'styles/colors'
import { px2rem } from 'styles/utils'

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  padding: ${px2rem(16)};
  border-bottom: ${px2rem(1)} solid ${getColor('gray', 400)};
`
