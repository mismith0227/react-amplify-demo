import * as React from 'react'
import { useDispatch } from 'react-redux'
import { actions as authActions } from 'store/modules/Auth'

type FormState = {
  userName: string
  password: string
}

const Login: React.FC = () => {
  const dispatch = useDispatch()
  const [input, setInput] = React.useState<FormState>({
    userName: '',
    password: '',
  })

  const onFormChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInput(prev => ({ ...prev, [name]: value }))
  }

  const onLogin = () => {
    if (input.userName === '' || input.password === '') return
    dispatch(authActions.login(input.userName, input.password))
  }

  return (
    <div className="Login">
      <div>Login</div>
      <input
        type="text"
        value={input.userName}
        name="userName"
        onChange={onFormChange}
      />
      <input
        type="text"
        value={input.password}
        name="password"
        onChange={onFormChange}
      />
      <button onClick={onLogin}>ログイン</button>
    </div>
  )
}

export default Login
