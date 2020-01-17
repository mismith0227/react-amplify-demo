import styled from 'styled-components'
import { getColor } from 'styles/colors'
import { px2rem } from 'styles/utils'

export const StyledInput = styled.input`
  border: ${px2rem(1)} solid ${getColor('orange', 700)};
  padding: ${px2rem(8)};
  font-size: ${px2rem(14)};
  border-radius: ${px2rem(4)};
`
