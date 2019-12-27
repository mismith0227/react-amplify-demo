import styled from 'styled-components'
import { px2rem } from 'styles/utils'

interface SvgProps {
  readonly rotateAnimation?: boolean
  readonly angle?: number
}

export const StyledSvg = styled.svg<SvgProps>`
  display: inline-block;
  font-size: ${px2rem(24)};
  height: 1em;
  width: 1em;
  color: inherit;
  overflow: visible;
  vertical-align: -0.125em;
  transition: transform 0.2s ease;
  ${({ angle = 0 }) => angle && `transform: rotate(${angle}deg)`};
`
