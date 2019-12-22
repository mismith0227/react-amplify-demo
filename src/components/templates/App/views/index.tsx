import * as React from 'react'
import { renderRoutes } from 'react-router-config'
import Appbar from 'components/organisms/Appbar'
import { Props } from '../types'

const AuthTemplate: React.FC<Props> = ({ route, auth }: Props) => {
  const pageRef = React.useRef(null)

  return (
    <div className="AuthTemplate">
      {auth.loading ? (
        <div>loading</div>
      ) : (
        <div>
          <Appbar />
          <div>AppTemplate</div>
          {route && renderRoutes(route.routes, { pageRef })}
        </div>
      )}
    </div>
  )
}

export default AuthTemplate
