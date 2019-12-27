import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { getColor } from 'styles/colors'
import { px2rem } from 'styles/utils'

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  padding: ${px2rem(16)};
  border-bottom: ${px2rem(1)} solid ${getColor('gray', 400)};
`

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const MenuItem = styled.li`
  margin: 0 0 0 ${px2rem(16)};
  text-decoration: none;
  &:first-child {
    margin: 0;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${getColor('gray', 800)};
  transition: 0.2s;
  &:hover {
    opacity: 0.8;
  }
`

export const ButtonArea = styled.div`
  margin: 0 0 0 auto;
`
