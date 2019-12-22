import * as React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { actions as authActions } from 'store/modules/Auth'

const AppBar: React.FC = () => {
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(authActions.logout())
  }

  return (
    <div className="AppBar">
      <div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li onClick={onLogout}>ログアウト</li>
        </ul>
      </div>
    </div>
  )
}

export default AppBar
