import { Auth } from 'aws-amplify'
import { SignupParams } from '../types'

export const signup = (payload: SignupParams) => {
  const params = {
    username: payload.username,
    password: payload.password,
    attributes: {
      email: payload.email,
      phone_number: payload.phone_number,
    },
  }
  return Auth.signUp(params)
}
