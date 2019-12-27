import styled, { css } from 'styled-components'
import palette from 'styles/colors/palette'
import { getColor } from 'styles/colors'
import { px2rem } from 'styles/utils'

interface ContainerProps {
  readonly level?: 1 | 2 | 3
}

const getContentStyles = ({ level = 1 }: ContainerProps) => {
  switch (level) {
    case 1:
      return css`
        background: ${getColor('orange', 700)};
        color: ${getColor('gray', 100)};
        border: ${px2rem(1)} solid ${getColor('orange', 700)};
      `
    case 2:
      return css`
        background: ${getColor('gray', 100)};
        color: ${getColor('orange', 700)};
        border: ${px2rem(1)} solid ${getColor('orange', 700)};
      `
    case 3:
      return css`
        background: ${getColor('gray', 100)};
        color: ${getColor('orange', 700)};
        border: ${px2rem(1)} solid ${getColor('gray', 100)};
      `
  }
}

export const Wrap = styled.button<ContainerProps>`
  ${getContentStyles};
  padding: ${px2rem(6)} ${px2rem(16)};
  font-size: ${px2rem(14)};
  border-radius: ${px2rem(4)};
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  &:disabled,
  &[disabled] {
    cursor: not-allowed;
    box-shadow: none;
    background: ${getColor('gray', 100)};
    color: ${palette.gray[400]};
    border: ${px2rem(1)} solid ${getColor('gray', 400)};
  }
`
