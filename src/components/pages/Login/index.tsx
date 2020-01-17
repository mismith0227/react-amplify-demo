import * as React from 'react'
import { useDispatch } from 'react-redux'
import useForm from 'react-hook-form'
import { actions as authActions } from 'store/modules/Auth'

import { Wrap, Form, Title, StyledTextInput, StyledButton } from './styles'

type FormData = {
  userName: string
  password: string
}

const Login: React.FC = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit, errors, formState } = useForm<FormData>({
    mode: 'onChange',
  })

  const onLogin = (data: FormData) => {
    dispatch(authActions.login(data.userName, data.password))
  }

  return (
    <Wrap>
      <Form>
        <Title>Login</Title>
        <StyledTextInput
          type="text"
          name="userName"
          ref={register({ required: true })}
        />
        <StyledTextInput
          type="text"
          name="password"
          ref={register({ required: true })}
        />
        {errors.userName && 'userName is required.'}
        {errors.password && 'password is required.'}
        <StyledButton
          onClick={handleSubmit(onLogin)}
          disabled={!formState.isValid}
        >
          ログイン
        </StyledButton>
      </Form>
    </Wrap>
  )
}

export default Login
