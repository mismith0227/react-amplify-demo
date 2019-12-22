import styled from 'styled-components'

interface ContainerProps {
  readonly level?: 1 | 2 | 3
}

export const Wrap = styled.button<ContainerProps>`
  border: 0.1rem solid #ccc;
  background: #fff;
`
