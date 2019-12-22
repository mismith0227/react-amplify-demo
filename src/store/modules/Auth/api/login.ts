import { Auth } from 'aws-amplify'
import { LoginParams } from '../types'

export const login = (payload: LoginParams) =>
  Auth.signIn(payload.userName, payload.password)
