import * as React from 'react'
import { renderRoutes } from 'react-router-config'
import { Props } from '../types'

import { Wrap, Content } from './styles'

const AuthTemplate: React.FC<Props> = ({ route, auth }: Props) => {
  const pageRef = React.useRef(null)

  return (
    <Wrap>
      {auth.loading ? (
        <div>loading</div>
      ) : (
        <Content>{route && renderRoutes(route.routes, { pageRef })}</Content>
      )}
    </Wrap>
  )
}

export default AuthTemplate
