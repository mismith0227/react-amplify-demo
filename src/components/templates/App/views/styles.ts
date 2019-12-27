import styled from 'styled-components'
import { SidebarItem } from 'components/organisms/Sidebar'

export const Wrap = styled.div`
  display: flex;
  height: 100%;
  transition: 0.2s;
`

export const Content = styled.div`
  flex: 1;
`

export const FooterMenu = styled(SidebarItem)`
  margin-top: auto;
`
