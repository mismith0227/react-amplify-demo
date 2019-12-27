import * as React from 'react'
import { pure } from 'recompose'
import styled from 'styled-components'
import { StyledSvg } from './styles'
import { Props } from './types'

export * from './types'

const Icon = ({
  className,
  children,
  role = 'icon',
  viewBox,
  angle,
}: Props) => (
  <StyledSvg
    width="100%"
    fill="currentColor"
    className={className}
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    role={role}
    viewBox={viewBox}
    angle={angle}
  >
    {children}
  </StyledSvg>
)

export default styled(pure(Icon))``
