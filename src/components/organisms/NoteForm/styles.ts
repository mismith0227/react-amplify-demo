import styled from 'styled-components'
import { getColor } from 'styles/colors'
import { px2rem } from 'styles/utils'

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const TitleWrap = styled.div`
  padding: ${px2rem(8)};
`

export const TitleInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  font-size: ${px2rem(16)};
  padding: ${px2rem(8)};
  border: ${px2rem(1)} solid ${getColor('gray', 400)};
`

export const ContentWrap = styled.div`
  flex: 1;
  padding: ${px2rem(8)};
`

export const ContentInput = styled.textarea`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-size: ${px2rem(16)};
  padding: ${px2rem(8)};
  resize: none;
  border: ${px2rem(1)} solid ${getColor('gray', 400)};
`

export const Footer = styled.div`
  padding: ${px2rem(8)};
`
