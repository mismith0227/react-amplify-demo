import * as React from 'react'
import { renderRoutes } from 'react-router-config'
import { useDispatch } from 'react-redux'
import Appbar from 'components/organisms/Appbar'
import { push } from 'connected-react-router'
import Sidebar, { SidebarItem } from 'components/organisms/Sidebar'
import { Props } from '../types'
import DocumentIcon from 'components/atoms/Icon/DocumentIcon'
import AccountIcon from 'components/atoms/Icon/AccountIcon'
import ArrowIcon from 'components/atoms/Icon/ArrowIcon'
import { Wrap, Content, FooterMenu } from './styles'

const AuthTemplate: React.FC<Props> = ({ route, auth }: Props) => {
  const pageRef = React.useRef(null)
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = React.useState(true)

  const hundleSidebarOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Wrap className="AuthTemplate">
      {auth.loading ? (
        <div>loading</div>
      ) : (
        <>
          <Sidebar isOpen={isOpen}>
            <SidebarItem
              isOpen={isOpen}
              icon={<DocumentIcon />}
              onClick={() => dispatch(push('/home'))}
            >
              home
            </SidebarItem>
            <SidebarItem
              isOpen={isOpen}
              icon={<AccountIcon />}
              onClick={() => dispatch(push('/about'))}
            >
              About
            </SidebarItem>
            <FooterMenu
              isOpen={isOpen}
              icon={<ArrowIcon angle={isOpen ? 0 : 180} />}
              onClick={() => hundleSidebarOpen()}
            >
              Close
            </FooterMenu>
          </Sidebar>
          <Content>
            <Appbar />
            {route && renderRoutes(route.routes, { pageRef })}
          </Content>
        </>
      )}
    </Wrap>
  )
}

export default AuthTemplate
