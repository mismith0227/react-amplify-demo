import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from 'types/redux'
import { actions as authActions } from 'store/modules/Auth'
import Button from 'components/atoms/Button'

const About: React.FC = () => {
  const user = useSelector((state: State) => state.auth.info)
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(authActions.logout())
  }

  return (
    <div className="About">
      <div>About</div>
      {user && <div>{user.username}</div>}
      <Button level={3} onClick={() => onLogout()}>
        ログアウト
      </Button>
    </div>
  )
}

export default About
