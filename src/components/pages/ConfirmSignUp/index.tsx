import * as React from 'react'
import { useDispatch } from 'react-redux'
import useForm from 'react-hook-form'
import { actions as authActions } from 'store/modules/Auth'
// import { withAuthenticator } from 'aws-amplify-react'

import {
  Wrap,
  Form,
  Title,
  Label,
  StyledTextInput,
  StyledButton,
} from './styles'

type FormData = {
  username: string
  password: string
  email: string
  phone_number: number
}

const ConfirmSignUp: React.FC = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit, errors, formState } = useForm<FormData>({
    mode: 'onChange',
  })

  const onSignup = (data: FormData) => {
    dispatch(authActions.signup(data))
  }

  return (
    <Wrap>
      <Form>
        <Title>SignUp</Title>

        <Label>ユーザー名</Label>
        <StyledTextInput
          type="text"
          name="username"
          ref={register({ required: true })}
        />
        <Label>パスワード</Label>
        <StyledTextInput
          type="text"
          name="password"
          ref={register({ required: true })}
        />
        <Label>メールアドレス</Label>
        <StyledTextInput
          type="text"
          name="email"
          ref={register({ required: true })}
        />
        {/* TODO: 国際電話のの国番号を選べるようにする。日本なら+819012345678 */}
        <Label>電話番号</Label>
        <StyledTextInput
          type="tel"
          name="phone_number"
          ref={register({ required: true })}
        />
        {errors.username && 'userName is required.'}
        {errors.password && 'password is required.'}
        {errors.email && 'email is required.'}
        {errors.phone_number && 'phone number is required.'}
        <StyledButton
          onClick={handleSubmit(onSignup)}
          disabled={!formState.isValid}
        >
          確認
        </StyledButton>
      </Form>
    </Wrap>
  )
}

export default ConfirmSignUp
